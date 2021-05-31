Type.registerNamespace("Sys.Extended.UI");Sys.Extended.UI.BubbleChart=function(n){Sys.Extended.UI.BubbleChart.initializeBase(this,[n]);var t=this.get_id();t=t.replace("_ctl00","");this._parentDiv=document.getElementById(t+"__ParentDiv");this._chartWidth="300";this._chartHeight="200";this._chartTitle="";this._bubbleChartClientValues=null;this._theme="BubbleChart";this._yAxisLines=6;this._xAxisLines=6;this._bubbleSizes=5;this._chartTitleColor="";this._yAxisLineColor="";this._xAxisLineColor="";this._baseLineColor="";this._tooltipBackgroundColor="#ffffff";this._tooltipFontColor="#0E426C";this._tooltipBorderColor="#B85B3E";this._xAxisLabel="";this._yAxisLabel="";this._bubbleLabel="";this._axislabelFontColor="#000000";this.yMax=0;this.yMin=0;this.xMax=0;this.xMin=0;this.dataMax=0;this.dataMin=0;this.yRoundedIntervalLabelSize=0;this.xRoundedIntervalLabelSize=0;this.roundedBubbleSize=0;this.startX=0;this.startY=0;this.endX=0;this.endY=0;this.xInterval=0;this.yInterval=0;this.charLength=3.5;this._divTooltip=null};Sys.Extended.UI.BubbleChart.prototype={initialize:function(){if(Sys.Extended.UI.BubbleChart.callBaseMethod(this,"initialize"),!document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"))throw"Current version of browser does not support SVG.";this._yAxisLines==0&&(this._yAxisLines=6);this._xAxisLines==0&&(this._xAxisLines=6);this._bubbleSizes==0&&(this._bubbleSizes=5);this.generateTooltipDiv();this.generateBubbleChart()},dispose:function(){Sys.Extended.UI.BubbleChart.callBaseMethod(this,"dispose")},generateTooltipDiv:function(){this._divTooltip=$common.createElementFromTemplate({nodeName:"div",properties:{id:this.get_id()+"_tooltipDiv",style:{position:"absolute",backgroundColor:this._tooltipBackgroundColor,borderStyle:"solid",borderWidth:"5px",borderColor:this._tooltipBorderColor,left:"0px",top:"0px",color:this._tooltipFontColor,visibility:"hidden",zIndex:"10000",padding:"10px"}}},this._parentDiv)},generateBubbleChart:function(){this.calculateMinMaxValues();this.calculateBubbleSize();this.calculateAxisValues();var n=this.intializeSVG();n=n+String.format('<text x="{0}" y="{1}" id="ChartTitle" style="fill:{3}">{2}<\/text>',parseInt(this._chartWidth)/2-this._chartTitle.length*this.charLength,parseInt(this._chartHeight)/20,this._chartTitle,this._chartTitleColor);this.calculateIntervals();n=n+this.drawBackgroundHorizontalLines();n=n+this.drawBackgroundVerticalLines();n=n+this.drawBaseLines();n=n+this.drawAxisValues();this._parentDiv.innerHTML=this._parentDiv.innerHTML+n;this.drawBubbles(this,0)},intializeSVG:function(){var n=String.format('<?xml-stylesheet type="text/css" href="{0}.css"?>',this._theme);return n=String.format('<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="{0}" height="{1}" preserveAspectRatio="xMidYMid meet" viewbox="0 0 {2} {3}" style="position: relative; display: block;" onload="init(evt)">',this._chartWidth,this._chartHeight,parseFloat(this._chartWidth)*.99,parseFloat(this._chartHeight)*.99),n=n+String.format('<path fill="none" stroke-opacity="1" fill-opacity="1" stroke-linejoin="round" stroke-linecap="square" d="M5 {0} {1} {0} {1} {2} 5 {2} z"/>',parseInt(this._chartHeight)/10+5,parseInt(this._chartWidth)-5,parseInt(this._chartHeight)-parseInt(this._chartHeight)/10),n=n+String.format('<path id="ChartBackGround" stroke="" d="M0 0 {0} 0 {0} {1} 0 {1} z"/>',this._chartWidth,parseInt(this._chartHeight)-5),n+String.format('<path fill="#ffffff" stroke-opacity="1" fill-opacity="0" stroke-linejoin="round" stroke-linecap="square" stroke="" d="M5 {0} {1} {0} {1} {2} 5 {2} z" />',parseInt(this._chartHeight)/10+5,parseInt(this._chartWidth)-5,parseInt(this._chartHeight)-parseInt(this._chartHeight)/10)},drawBubbles:function(n,t){n._parentDiv.innerHTML=n._parentDiv.innerHTML.replace("<\/svg>","")+String.format('<circle id="Dot{4}" cx="{0}" cy="{1}" r="{2}" style="fill:{3};stroke:{3}" onmouseover="ShowTooltip(this, evt,\'{5}\',{6}, \'{7}\')" onmouseout="HideTooltip(this, evt)"><\/circle><\/svg>',n.startX+Math.round(parseFloat(n._bubbleChartClientValues[t].X)/n.xRoundedIntervalLabelSize*n.xInterval),n.startY+Math.round(-1*parseFloat(n._bubbleChartClientValues[t].Y)/n.yRoundedIntervalLabelSize*n.yInterval),Math.round(parseFloat(n._bubbleChartClientValues[t].Data)/n.roundedBubbleSize*n._bubbleSizes),n._bubbleChartClientValues[t].BubbleColor,t+1,n._bubbleChartClientValues[t].Category,n._bubbleChartClientValues[t].Data,n._bubbleLabel);t++;t<n._bubbleChartClientValues.length&&setTimeout(function(){n.drawBubbles(n,t)},400)},calculateMinMaxValues:function(){for(var n=0;n<this._bubbleChartClientValues.length;n++)n==0?(this.dataMax=parseFloat(this._bubbleChartClientValues[n].Data),this.dataMin=parseFloat(this._bubbleChartClientValues[n].Data),this.yMax=parseFloat(this._bubbleChartClientValues[n].Y),this.yMin=parseFloat(this._bubbleChartClientValues[n].Y),this.xMax=parseFloat(this._bubbleChartClientValues[n].X),this.xMin=parseFloat(this._bubbleChartClientValues[n].X)):(parseFloat(this._bubbleChartClientValues[n].Data)>this.dataMax&&(this.dataMax=parseFloat(this._bubbleChartClientValues[n].Data)),parseFloat(this._bubbleChartClientValues[n].Data)<this.dataMin&&(this.dataMin=parseFloat(this._bubbleChartClientValues[n].Data)),parseFloat(this._bubbleChartClientValues[n].X)>this.xMax&&(this.xMax=parseFloat(this._bubbleChartClientValues[n].X)),parseFloat(this._bubbleChartClientValues[n].Data)<this.xMin&&(this.xMin=parseFloat(this._bubbleChartClientValues[n].X)),parseFloat(this._bubbleChartClientValues[n].Y)>this.yMax&&(this.yMax=parseFloat(this._bubbleChartClientValues[n].Y)),parseFloat(this._bubbleChartClientValues[n].Y)<this.yMin&&(this.yMin=parseFloat(this._bubbleChartClientValues[n].Y)));this.xMin<0&&(this._xAxisLines=Math.round(this._xAxisLines/2));this.yMin<0&&(this._yAxisLines=Math.round(this._yAxisLines/2))},calculateBubbleSize:function(){var n,i,r,t;r=this.dataMax;t=r/(this._bubbleSizes-1);i=Math.ceil(Math.log(t)/Math.log(10)-1);n=Math.pow(10,i);this.roundedBubbleSize=Math.ceil(t/n)*n},calculateAxisValues:function(){var i,n,r,t;i=this.yMin<0?this.yMax>Math.abs(this.yMin)?this.yMax:Math.abs(this.yMin):this.yMax;n=i/(this._yAxisLines-1);n<1?this.yRoundedIntervalLabelSize=n.toFixed(1):(x=Math.ceil(Math.log(n)/Math.log(10)-1),pow10x=Math.pow(10,x),this.yRoundedIntervalLabelSize=Math.ceil(n/pow10x)*pow10x);r=this.xMin<0?this.xMax>Math.abs(this.xMin)?this.xMax:Math.abs(this.xMin):this.xMax;t=r/(this._xAxisLines-1);n<1?this.xRoundedIntervalLabelSize=t.toFixed(1):(x=Math.ceil(Math.log(t)/Math.log(10)-1),pow10x=Math.pow(10,x),this.xRoundedIntervalLabelSize=Math.ceil(t/pow10x)*pow10x)},calculateIntervals:function(){this.endX=parseFloat(this._chartWidth)-parseFloat(this._chartWidth)/20;this.startX=this.xMin<0?Math.round(parseFloat(this._chartWidth)+parseFloat(this._chartWidth)/10)/2+.5:parseFloat(this._chartWidth)/5+.5;this.xInterval=this.xMin<0?(this.endX-this.startX)/this._xAxisLines:Math.round((this.endX-this.startX)/this._xAxisLines);this.startY=this.yMin<0?Math.round(parseInt(this._chartHeight)-parseInt(this._chartHeight)/20)/2+.5:Math.round(parseInt(this._chartHeight)-parseInt(this._chartHeight)/5)+.5;this.yInterval=this.startY/(this._yAxisLines+1);this.endY=this.startY-this.yInterval*this._yAxisLines},drawBackgroundHorizontalLines:function(){for(var t="",n=1;n<=this._yAxisLines;n++)t=t+String.format('<path d="M{0} {2} {1} {2}" id="HorizontalLine" style="stroke:{3}"><\/path>',this.startX,this.endX,this.startY-this.yInterval*n,this._xAxisLineColor);if(this.yMin<0)for(n=1;n<=this._yAxisLines;n++)t=t+String.format('<path d="M{0} {2} {1} {2}" id="HorizontalLine" style="stroke:{3}"><\/path>',this.startX,this.endX,this.startY+this.yInterval*n,this._xAxisLineColor);if(this.xMin<0)for(n=1;n<=this._yAxisLines;n++)t=t+String.format('<path id="HorizontalLine" d="M{0} {2} {1} {2}" style="stroke:{3}"><\/path>',this.startX,this.startX-this.xInterval*this._xAxisLines,this.startY-this.yInterval*n,this._xAxisLineColor);if(this.xMin<0&&this.yMin<0)for(n=1;n<=this._yAxisLines;n++)t=t+String.format('<path id="HorizontalLine" d="M{0} {2} {1} {2}" style="stroke:{3}"><\/path>',this.startX,this.startX-this.xInterval*this._xAxisLines,this.startY+this.yInterval*n,this._xAxisLineColor);return t},drawBackgroundVerticalLines:function(){for(var t="",n=1;n<=this._xAxisLines;n++)t=t+String.format('<path d="M{0} {1} {0} {2}" id="VerticalLine" style="stroke:{3}"><\/path>',this.startX+this.xInterval*n,this.startY,this.endY,this._yAxisLineColor);if(this.xMin<0)for(n=1;n<=this._xAxisLines;n++)t=t+String.format('<path d="M{0} {1} {0} {2}" id="VerticalLine" style="stroke:{3}"><\/path>',this.startX-this.xInterval*n,this.startY,this.endY,this._yAxisLineColor);if(this.yMin<0)for(n=1;n<=this._xAxisLines;n++)t=t+String.format('<path id="VerticalLine" d="M{0} {1} {0} {2}" style="stroke:{3}"><\/path>',this.startX+this.xInterval*n,this.startY,this.startY+this.yInterval*this._yAxisLines,this._yAxisLineColor);if(this.xMin<0&&this.yMin<0)for(n=1;n<=this._xAxisLines;n++)t=t+String.format('<path id="VerticalLine" d="M{0} {1} {0} {2}" style="stroke:{3}"><\/path>',this.startX-this.xInterval*n,this.startY,this.startY+this.yInterval*this._yAxisLines,this._yAxisLineColor);return t},drawBaseLines:function(){var n="",t;for(n=n+String.format('<path d="M{0} {1} {2} {1}" id="BaseLine" style="stroke:{3}"><\/path>',this.startX,this.startY,this.endX,this._baseLineColor),n=n+String.format('<path d="M{0} {1} {0} {2}" id="BaseLine" style="stroke:{3}"><\/path>',this.startX,this.startY,this.startY+4,this._baseLineColor),n=n+String.format('<path d="M{0} {1} {0} {2}" id="BaseLine" style="stroke:{3}"><\/path>',this.startX,this.startY,this.endY,this._baseLineColor),n=n+String.format('<path d="M{0} {1} {2} {1}" id="BaseLine" style="stroke:{3}"><\/path>',this.startX,this.startY,this.startX+4,this._baseLineColor),t=0;t<=this._yAxisLines;t++)n=n+String.format('<path d="M{0} {2} {1} {2}" id="BaseLine" style="stroke:{3}"><\/path>',this.startX-4,this.startX,this.startY-this.yInterval*t,this._baseLineColor);if(this.yMin<0){for(t=1;t<=this._yAxisLines;t++)n=n+String.format('<path d="M{0} {2} {1} {2}" id="BaseLine" style="stroke:{3}"><\/path>',this.startX-4,this.startX,this.startY+this.yInterval*t,this._baseLineColor);n=n+String.format('<path d="M{0} {1} {0} {2}" id="BaseLine" style="stroke:{3}"><\/path>',this.startX-this.xInterval*this._xAxisLines,this.startY,this.startY+4,this._baseLineColor);n=n+String.format('<path d="M{0} {1} {0} {2}" id="BaseLine" style="stroke:{3}"><\/path>',this.startX,this.startY,this.startY+this.yInterval*this._yAxisLines,this._baseLineColor)}for(t=0;t<=this._xAxisLines;t++)n=n+String.format('<path d="M{0} {1} {0} {2}" id="BaseLine" style="stroke:{3}"><\/path>',this.startX+this.xInterval*t,this.startY,this.startY+4,this._baseLineColor);if(this.xMin<0){for(t=1;t<=this._xAxisLines;t++)n=n+String.format('<path d="M{0} {1} {0} {2}" id="BaseLine" style="stroke:{3}"><\/path>',this.startX-this.xInterval*t,this.startY,this.startY+4,this._baseLineColor);n=n+String.format('<path d="M{0} {2} {1} {2}" id="BaseLine" style="stroke:{3}"><\/path>',this.startX,this.startX-this.xInterval*this._xAxisLines,this.startY,this._baseLineColor)}return n},drawAxisValues:function(){for(var t="",i=0,r,n=1;n<=this._yAxisLines;n++)i=(this.yRoundedIntervalLabelSize*10*n/10).toString().length*5.5,t=t+String.format('<text id="ValueAxis" x="{0}" y="{1}">{2}<\/text>',this.startX-i-10,this.startY-this.yInterval*n+4,this.yRoundedIntervalLabelSize*10*n/10);if(this.yMin<0)for(n=1;n<=this._yAxisLines;n++)i=(this.yRoundedIntervalLabelSize*10*n/10).toString().length*5.5+5.5,t=t+String.format('<text id="ValueAxis" x="{0}" y="{1}">-{2}<\/text>',this.startX-i-10,this.startY+this.yInterval*n+4,this.yRoundedIntervalLabelSize*10*n/10);for(n=1;n<=this._xAxisLines;n++)i=(this.xRoundedIntervalLabelSize*10*n/10).toString().length*5.5,t=t+String.format('<text id="SeriesAxis" x="{0}" y="{1}">{2}<\/text>',Math.round(this.startX+this.xInterval*n-i/2),this.startY+Math.round(this.yInterval/4)+5,this.xRoundedIntervalLabelSize*10*n/10);if(this.xMin<0)for(n=1;n<=this._xAxisLines;n++)i=(this.xRoundedIntervalLabelSize*10*n/10).toString().length*5.5+5.5,t=t+String.format('<text id="SeriesAxis" x="{0}" y="{1}">-{2}<\/text>',Math.round(this.startX-this.xInterval*n-i/2),this.startY+Math.round(this.yInterval/4)+5,this.xRoundedIntervalLabelSize*10*n/10);return r=this.yMin<0?Math.round(this.startY+this.yInterval*this._yAxisLines-(this.startY-this.yInterval*this._yAxisLines))/2:Math.round((this.startY-this.endY)/2),t=t+String.format('<text id="AxisLabels"  x="{0}" y="{1}" style="fill:{3};" transform="rotate(-90, {0}, {1})">{2}<\/text>',Math.round(parseFloat(this._chartWidth)/20),r+this._yAxisLabel.toString().length*this.charLength,this._yAxisLabel,this._axislabelFontColor),t+String.format('<text id="AxisLabels" x="{0}" y="{1}" style="fill:{3};">{2}<\/text>',Math.round(parseInt(this._chartWidth)/2-this._xAxisLabel.toString().length*this.charLength/2),Math.round(parseInt(this._chartHeight)*90/100+5),this._xAxisLabel,this._axislabelFontColor)},get_chartWidth:function(){return this._chartWidth},set_chartWidth:function(n){this._chartWidth=n},get_chartHeight:function(){return this._chartHeight},set_chartHeight:function(n){this._chartHeight=n},get_chartTitle:function(){return this._chartTitle},set_chartTitle:function(n){this._chartTitle=n},get_BubbleChartClientValues:function(){return this._bubbleChartClientValues},set_BubbleChartClientValues:function(n){this._bubbleChartClientValues=n},get_theme:function(){return this._theme},set_theme:function(n){this._theme=n},get_yAxisLines:function(){return this._yAxisLines},set_yAxisLines:function(n){this._yAxisLines=n},get_xAxisLines:function(){return this._xAxisLines},set_xAxisLines:function(n){this._xAxisLines=n},get_chartTitleColor:function(){return this._chartTitleColor},set_chartTitleColor:function(n){this._chartTitleColor=n},get_yAxisLineColor:function(){return this._yAxisLineColor},set_yAxisLineColor:function(n){this._yAxisLineColor=n},get_xAxisLineColor:function(){return this._xAxisLineColor},set_xAxisLineColor:function(n){this._xAxisLineColor=n},get_bubbleSizes:function(){return this._bubbleSizes},set_bubbleSizes:function(n){this._bubbleSizes=n},get_baseLineColor:function(){return this._baseLineColor},set_baseLineColor:function(n){this._baseLineColor=n},get_tooltipBackgroundColor:function(){return this.tooltipBackgroundColor},set_tooltipBackgroundColor:function(n){this.tooltipBackgroundColor=n},get_tooltipFontColor:function(){return this._tooltipFontColor},set_tooltipFontColor:function(n){this._tooltipFontColor=n},get_tooltipBorderColor:function(){return this._tooltipBorderColor},set_tooltipBorderColor:function(n){this._tooltipBorderColor=n},get_xAxisLabel:function(){return this._xAxisLabel},set_xAxisLabel:function(n){this._xAxisLabel=n},get_yAxisLabel:function(){return this._yAxisLabel},set_yAxisLabel:function(n){this._yAxisLabel=n},get_bubbleLabel:function(){return this._bubbleLabel},set_bubbleLabel:function(n){this._bubbleLabel=n},get_axislabelFontColor:function(){return this._axislabelFontColor},set_axislabelFontColor:function(n){this._axislabelFontColor=n}};Sys.Extended.UI.BubbleChart.registerClass("Sys.Extended.UI.BubbleChart",Sys.Extended.UI.ControlBase);Sys.registerComponent(Sys.Extended.UI.BubbleChart,{name:"BubbleChart",parameters:[{name:"BubbleChartClientValues",type:"BubbleChartValue[]"}]});
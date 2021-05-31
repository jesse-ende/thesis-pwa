Type.registerNamespace("Sys.Extended.UI");Sys.Extended.UI.PieChart=function(n){Sys.Extended.UI.PieChart.initializeBase(this,[n]);var t=this.get_id();t=t.replace("_ctl00","");this._parentDiv=document.getElementById(t+"__ParentDiv");this._chartWidth="300";this._chartHeight="300";this._chartTitle="";this._pieChartClientValues=null;this._theme="PieChart";this._chartTitleColor="";this.charLength=3.5};Sys.Extended.UI.PieChart.prototype={initialize:function(){if(Sys.Extended.UI.PieChart.callBaseMethod(this,"initialize"),!document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"))throw"Current version of browser does not support SVG.";this.generatePieChart()},dispose:function(){Sys.Extended.UI.PieChart.callBaseMethod(this,"dispose")},generatePieChart:function(){var c=parseInt(this._chartWidth)>parseInt(this._chartHeight)?(parseInt(this._chartHeight)-10)/3:(parseInt(this._chartWidth)-10)/3,l=parseInt(this._chartWidth)/2,a=parseInt(this._chartHeight)/2.25,n=String.format('<?xml-stylesheet type="text/css" href="{0}.css"?>',this._theme),i,v,t;n=String.format('<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="{0}" height="{1}" style="position: relative; display: block;">',this._chartWidth,this._chartHeight);n=n+"<defs>";n=n+String.format('<radialGradient gradientUnits="userSpaceOnUse" r="{0}" fy="{1}" fx="{2}" cy="{1}" cx="{2}">',c,l,a);n=n+'<stop offset="0%" id="RadialGradient1"><\/stop>';n=n+'<stop offset="25%" id="RadialGradient2"><\/stop>';n=n+'<stop offset="100%" id="RadialGradient3"><\/stop><\/RadialGradient>';n=n+"<\/defs>";n=n+String.format('<path fill="none" stroke-opacity="1" fill-opacity="1" stroke-linejoin="round" stroke-linecap="square" d="M5 {0} {1} {0} {1} {2} 5 {2} z"/>',parseInt(this._chartHeight)/10+5,parseInt(this._chartWidth)-5,parseInt(this._chartHeight)-parseInt(this._chartHeight)/10);n=n+String.format('<path id="ChartBackGround" stroke="" d="M0 0 {0} 0 {0} {1} 0 {1} z"/>',this._chartWidth,this._chartHeight);n=n+String.format('<path fill="#ffffff" stroke-opacity="1" fill-opacity="0" stroke-linejoin="round" stroke-linecap="square" stroke="" d="M5 {0} {1} {0} {1} {2} 5 {2} z" />',parseInt(this._chartHeight)/10+5,parseInt(this._chartWidth)-5,parseInt(this._chartHeight)-parseInt(this._chartHeight)/10);n=n+String.format('<text x="{0}" y="{1}" id="ChartTitle" style="fill:{3}">{2}<\/text>',parseInt(this._chartWidth)/2-this._chartTitle.length*this.charLength,parseInt(this._chartHeight)/20,this._chartTitle,this._chartTitleColor);var o=parseInt(this._chartHeight)*82/100+5,r=7.5,u=5,y=0;for(t=0;t<this._pieChartClientValues.length;t++)y=y+this._pieChartClientValues[t].Category.length;i=Math.round(y*5/2)+Math.round((r+u*2)*this._pieChartClientValues.length);v=!1;i>parseInt(this._chartWidth)/2&&(i=i/2,v=!0);n=n+"<g>";n=n+String.format('<path d="M{0} {1} {2} {1} {2} {3} {0} {3} z" id="LegendArea" stroke=""><\/path>',parseInt(this._chartWidth)*40/100-i/2,o,parseInt(this._chartWidth)*40/100+i/2,Math.round(parseInt(this._chartHeight)*97.5/100));var e=parseInt(this._chartWidth)*40/100-i/2+5+r+u,s=e,f=parseInt(this._chartWidth)*40/100-i/2+5,h=f;for(t=0;t<this._pieChartClientValues.length;t++)v&&t==Math.round(this._pieChartClientValues.length/2)&&(e=parseInt(this._chartWidth)*40/100-i/2+5+r+u,s=e,f=parseInt(this._chartWidth)*40/100-i/2+5,h=f,o=parseInt(this._chartHeight)*89/100+5,v=!1),f=h,e=s,n=n+String.format('<path d="M{0} {1} {2} {1} {2} {3} {0} {3} z" id="Legend{4}" style="stroke:{6};fill:{5}"><\/path>',f,o+7.5,f+r,o+15,t+1,this._pieChartClientValues[t].PieChartValueColor,this._pieChartClientValues[t].PieChartValueStrokeColor),n=n+String.format('<text x="{0}" y="{1}" id="LegendText">{2}<\/text>',e,o+15,this._pieChartClientValues[t].Category),this._pieChartClientValues[t].Category.length>10?(h=f+this._pieChartClientValues[t].Category.length*5.5+r+u*2,s=e+this._pieChartClientValues[t].Category.length*5.5+r+u*2):(h=h+this._pieChartClientValues[t].Category.length*6+r+u*2,s=s+this._pieChartClientValues[t].Category.length*6+r+u*2);n=n+"<\/g>";var p=0,w=l,b=a-c,k=l,d=a-c;for(t=0;t<this._pieChartClientValues.length;t++)p=p+Math.abs(parseFloat(this._pieChartClientValues[t].Data));this._parentDiv.innerHTML=n;this.drawSegments(this,0,0,p,c,0,0,0,l,0,a,0,k,d,w,b,0)},drawSegments:function(n,t,i,r,u,f,e,o,s,h,c,l,a,v,y,p,w){i=i+Math.abs(parseFloat(n._pieChartClientValues[t].Data));f=i/r*360;e=f*(Math.PI/180);o=(i-Math.abs(parseFloat(n._pieChartClientValues[t].Data))+Math.abs(parseFloat(n._pieChartClientValues[t].Data))/2)/r*360;o=o*(Math.PI/180);h=parseFloat(Math.sin(e)*u);l=parseFloat(Math.cos(e)*u);a=parseFloat(Math.sin(o)*(u+10));v=parseFloat(Math.cos(o)*(u+10));a=s+a>s?s+a:s+a-n._pieChartClientValues[t].Data.toString().length*this.charLength;v=c+-1*v<c?c+-1*v:c+-1*v+10;n._parentDiv.innerHTML=n._parentDiv.innerHTML.replace("<\/svg>","")+String.format('<g><path id="Segment{8}" d="M{0} {1} A {2} {2} 0 {3},1 {4} {5} L {6} {7} z" style="stroke:{10};fill:{9};"><\/path>',y,p,u,w,s+h,c+-1*l,s,c,t+1,n._pieChartClientValues[t].PieChartValueColor,n._pieChartClientValues[t].PieChartValueStrokeColor)+String.format('<text fill="#000000" style="font: 11px Arial,Helvetica,sans-serif" fill-opacity="1" y="{1}" x="{0}">{2}<\/text><\/g>',a,v,n._pieChartClientValues[t].Data)+"<\/svg>";y=s+h;p=c+-1*l;t++;t<n._pieChartClientValues.length&&setTimeout(function(){n.drawSegments(n,t,i,r,u,f,e,o,s,h,c,l,a,v,y,p,w)},400)},get_chartWidth:function(){return this._chartWidth},set_chartWidth:function(n){this._chartWidth=n},get_chartHeight:function(){return this._chartHeight},set_chartHeight:function(n){this._chartHeight=n},get_chartTitle:function(){return this._chartTitle},set_chartTitle:function(n){this._chartTitle=n},get_PieChartClientValues:function(){return this._pieChartClientValues},set_PieChartClientValues:function(n){this._pieChartClientValues=n},get_theme:function(){return this._theme},set_theme:function(n){this._theme=n},get_chartTitleColor:function(){return this._chartTitleColor},set_chartTitleColor:function(n){this._chartTitleColor=n}};Sys.Extended.UI.PieChart.registerClass("Sys.Extended.UI.PieChart",Sys.Extended.UI.ControlBase);Sys.registerComponent(Sys.Extended.UI.PieChart,{name:"PieChart",parameters:[{name:"PieChartValues",type:"PieChartValue[]"}]});
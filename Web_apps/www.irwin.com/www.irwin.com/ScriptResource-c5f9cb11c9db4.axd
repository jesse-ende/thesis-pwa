Type.registerNamespace("Sys.Extended.UI.HTMLEditor.ToolbarButton");Sys.Extended.UI.HTMLEditor.ToolbarButton.SelectButton=function(n){Sys.Extended.UI.HTMLEditor.ToolbarButton.SelectButton.initializeBase(this,[n]);this._onclick_option$delegate=Function.createDelegate(this,this._onclick_option);this._onchange$delegate=Function.createDelegate(this,this._onchange)};Sys.Extended.UI.HTMLEditor.ToolbarButton.SelectButton.prototype={initialize:function(){var i=this.get_element().id,n,t;for(Sys.Extended.UI.HTMLEditor.ToolbarButton.SelectButton.callBaseMethod(this,"initialize"),this._select=$get(i+"_select"),$addHandler(this._select,"change",this._onchange$delegate),n=0;n<this._select.options.length;n++)t=this._select.options[n],$addHandler(t,"click",this._onclick_option$delegate)},dispose:function(){for(var t,n=0;n<this._select.options.length;n++)t=this._select.options[n],$removeHandler(t,"click",this._onclick_option$delegate);$removeHandler(this._select,"change",this._onchange$delegate);Sys.Extended.UI.HTMLEditor.ToolbarButton.SelectButton.callBaseMethod(this,"dispose")},isImage:function(){return!1},callMethod:function(){return!0},_onclick_option:function(n){if(!this.isEnable())return!1;var t=n.target;return(t.parentNode.value=t.value,Sys.Extended.UI.HTMLEditor._stopEvent(n),!Sys.Extended.UI.HTMLEditor.isSafari)?!1:(this.callMethod(t.parentNode,n),!0)},_onchange:function(n){if(!this.isEnable())return!1;var t=n.target;return Sys.Extended.UI.HTMLEditor._stopEvent(n),this.callMethod(t,n),!0}};Sys.Extended.UI.HTMLEditor.ToolbarButton.SelectButton.registerClass("Sys.Extended.UI.HTMLEditor.ToolbarButton.SelectButton",Sys.Extended.UI.HTMLEditor.ToolbarButton.CommonButton);
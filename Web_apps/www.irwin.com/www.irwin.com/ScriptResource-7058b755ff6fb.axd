Type.registerNamespace("Sys.Extended.UI.HTMLEditor.ToolbarButton");Sys.Extended.UI.HTMLEditor.ToolbarButton.DesignModeBoxButton=function(n){Sys.Extended.UI.HTMLEditor.ToolbarButton.DesignModeBoxButton.initializeBase(this,[n]);this._designPanel=null};Sys.Extended.UI.HTMLEditor.ToolbarButton.DesignModeBoxButton.prototype={_onmousedown:function(n){return this._designPanel==null?!1:this._designPanel.isPopup()?!1:Sys.Extended.UI.HTMLEditor.ToolbarButton.DesignModeBoxButton.callBaseMethod(this,"_onmousedown",[n])===null?!1:(this.callMethod(),!1)},onEditPanelActivity:function(){this._designPanel=this._editPanel.get_activePanel()},callMethod:function(){return this._designPanel==null?!1:this._designPanel.isPopup()?!1:!0}};Sys.Extended.UI.HTMLEditor.ToolbarButton.DesignModeBoxButton.registerClass("Sys.Extended.UI.HTMLEditor.ToolbarButton.DesignModeBoxButton",Sys.Extended.UI.HTMLEditor.ToolbarButton.BoxButton);
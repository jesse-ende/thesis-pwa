Type.registerNamespace("Sys.Extended.UI.HTMLEditor.ToolbarButton");Sys.Extended.UI.HTMLEditor.ToolbarButton.Bold=function(n){Sys.Extended.UI.HTMLEditor.ToolbarButton.Bold.initializeBase(this,[n])};Sys.Extended.UI.HTMLEditor.ToolbarButton.Bold.prototype={callMethod:function(){if(!Sys.Extended.UI.HTMLEditor.ToolbarButton.Bold.callBaseMethod(this,"callMethod"))return!1;this._designPanel._execCommand("bold",!1,null)},checkState:function(){return Sys.Extended.UI.HTMLEditor.ToolbarButton.Bold.callBaseMethod(this,"checkState")?this._designPanel._queryCommandState("bold"):!1}};Sys.Extended.UI.HTMLEditor.ToolbarButton.Bold.registerClass("Sys.Extended.UI.HTMLEditor.ToolbarButton.Bold",Sys.Extended.UI.HTMLEditor.ToolbarButton.EditorToggleButton);
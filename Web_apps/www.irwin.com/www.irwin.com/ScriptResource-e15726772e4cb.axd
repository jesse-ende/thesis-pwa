Type.registerNamespace("Sys.Extended.UI.HTMLEditor.ToolbarButton");Sys.Extended.UI.HTMLEditor.ToolbarButton.Rtl=function(n){Sys.Extended.UI.HTMLEditor.ToolbarButton.Rtl.initializeBase(this,[n])};Sys.Extended.UI.HTMLEditor.ToolbarButton.Rtl.prototype={callMethod:function(){var n,t,i;if(!Sys.Extended.UI.HTMLEditor.ToolbarButton.Rtl.callBaseMethod(this,"callMethod"))return!1;this._designPanel._doc.body.style.direction=this.checkState()?"":"rtl";Sys.Extended.UI.HTMLEditor.isIE||(n=this._designPanel._getSelection(),t=this._designPanel._createRange(n),this._designPanel._removeAllRanges(n),this._designPanel._selectRange(n,t),this._designPanel.focusEditor());i=this;setTimeout(function(){i._editPanel.updateToolbar()},0)},checkState:function(){return Sys.Extended.UI.HTMLEditor.ToolbarButton.Rtl.callBaseMethod(this,"checkState")?this._designPanel._doc.body.style.direction&&this._designPanel._doc.body.style.direction=="rtl"?!0:!1:!1}};Sys.Extended.UI.HTMLEditor.ToolbarButton.Rtl.registerClass("Sys.Extended.UI.HTMLEditor.ToolbarButton.Rtl",Sys.Extended.UI.HTMLEditor.ToolbarButton.EditorToggleButton);
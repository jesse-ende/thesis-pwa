// (c) 2010 CodePlex Foundation
(function(n,t){$act.createWidget("dynamicPopulateExtender",{options:{clearContentsDuringUpdate:!0,contextKey:null,servicePath:null,serviceMethod:null,populateTriggerID:null,cacheDynamicResults:!1,updatingCssClass:"",customScript:""},_events:["populating","populated"],_create:function(){var n=this,i=n.options;n._clickHandler=null;n._callID=0;n._currentCallID=-1;n._oldCss=null;n._populated=!1;i.populateTriggerID&&t("#"+i.populateTriggerID).click(function(){n.populate(i.contextKey)})},populate:function(n){var i,r,e,o,u,f,s,h;if(n&&this._setOption("contextKey",n),i=this,r=i.options,!r.populated||!r.cacheDynamicResults){if(i._currentCallID==-1){if(e=new $act.args.cancelEventArgs,i.raisePopulating(e),e.get_cancel())return;i._setUpdating(!0)}r.customScript?(o=eval(r.customScript),i._setTargetHtml(o),i._setUpdating(!1)):(i._currentCallID=++i._callID,u=r.servicePath||location.pathname,f=r.serviceMethod,(u||f)&&(s=u?u+"/"+encodeURIComponent(f):encodeURIComponent(f),h=n?n:r.contextKey,t.ajax({url:s,type:"POST",contentType:"application/json; charset=utf-8",dataType:"json",data:JSON.stringify({contextKey:h})}).done(function(n){n&&n.d&&(n=n.d);i._onMethodComplete(n,i._currentCallID)}).fail(function(n){i._onMethodError(n,i._currentCallID)})))}},_onMethodComplete:function(n,t){t==this._currentCallID&&(this._setTargetHtml(n),this._setUpdating(!1))},_onMethodError:function(n,t){t==this._currentCallID&&(n.statusText=="timeout"?this._setTargetHtml($act.resources.DynamicPopulate_WebServiceTimeout):this._setTargetHtml($act.string.format($act.resources.DynamicPopulate_WebServiceError,n.status)),this._setUpdating(!1))},_setUpdating:function(n){var t=this;t.setStyle(n);n||(t._currentCallID=-1,t._populated=!0,t.raisePopulated(this))},_setTargetHtml:function(n){var i=t(this.element);i&&(i.is("input")?i.val(n):i.html(n))},setStyle:function(n){var i=this,r=i.options,u=t(i.element);r.updatingCssClass&&(n?(i._oldCss=u.attr("class"),u.removeClass().addClass(r.updatingCssClass)):(u.removeClass().addClass(i._oldCss),i._oldCss=null));n&&r.clearContentsDuringUpdate&&i._setTargetHtml("")}})})(window,actJQuery);
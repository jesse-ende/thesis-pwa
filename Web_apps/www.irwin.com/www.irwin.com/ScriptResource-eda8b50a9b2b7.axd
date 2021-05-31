// (c) 2010 CodePlex Foundation
Type.registerNamespace("Sys.Extended.UI");Sys.Extended.UI.ModalPopupRepositionMode=function(){throw Error.invalidOperation();};Sys.Extended.UI.ModalPopupRepositionMode.prototype={None:0,RepositionOnWindowResize:1,RepositionOnWindowScroll:2,RepositionOnWindowResizeAndScroll:3};Sys.Extended.UI.ModalPopupRepositionMode.registerEnum("Sys.Extended.UI.ModalPopupRepositionMode");Sys.Extended.UI.ModalPopupBehavior=function(n){Sys.Extended.UI.ModalPopupBehavior.initializeBase(this,[n]);this._PopupControlID=null;this._PopupDragHandleControlID=null;this._BackgroundCssClass=null;this._DropShadow=!1;this._Drag=!1;this._OkControlID=null;this._CancelControlID=null;this._OnOkScript=null;this._OnCancelScript=null;this._xCoordinate=-1;this._yCoordinate=-1;this._repositionMode=Sys.Extended.UI.ModalPopupRepositionMode.RepositionOnWindowResizeAndScroll;this._onShown=new Sys.Extended.UI.Animation.GenericAnimationBehavior(n);this._onHidden=new Sys.Extended.UI.Animation.GenericAnimationBehavior(n);this._onShowing=new Sys.Extended.UI.Animation.GenericAnimationBehavior(n);this._onHiding=new Sys.Extended.UI.Animation.GenericAnimationBehavior(n);this._backgroundElement=null;this._foregroundElement=null;this._relativeOrAbsoluteParentElement=null;this._popupElement=null;this._dragHandleElement=null;this._showHandler=null;this._okHandler=null;this._cancelHandler=null;this._scrollHandler=null;this._resizeHandler=null;this._windowHandlersAttached=!1;this._dropShadowBehavior=null;this._dragBehavior=null;this._isIE6=!1;this._saveTabIndexes=[];this._saveDesableSelect=[];this._tagWithTabIndex=["A","AREA","BUTTON","INPUT","OBJECT","SELECT","TEXTAREA","IFRAME"];this._isAnimationJustEnded=!1;this._hidingAnimationEndedHandler=null;this._showingAnimationEndedHandler=null};Sys.Extended.UI.ModalPopupBehavior.prototype={initialize:function(){Sys.Extended.UI.ModalPopupBehavior.callBaseMethod(this,"initialize");this._isIE6=Sys.Browser.agent==Sys.Browser.InternetExplorer&&Sys.Browser.version<7;this._PopupDragHandleControlID&&(this._dragHandleElement=$get(this._PopupDragHandleControlID));this._popupElement=$get(this._PopupControlID);this._DropShadow?(this._foregroundElement=document.createElement("div"),this._foregroundElement.id=this.get_id()+"_foregroundElement",this._popupElement.parentNode.appendChild(this._foregroundElement),this._foregroundElement.appendChild(this._popupElement)):this._foregroundElement=this._popupElement;this._backgroundElement=document.createElement("div");this._backgroundElement.id=this.get_id()+"_backgroundElement";this._backgroundElement.style.display="none";this._backgroundElement.style.position="fixed";this._backgroundElement.style.left="0px";this._backgroundElement.style.top="0px";this._backgroundElement.style.zIndex=1e4;this._BackgroundCssClass&&(this._backgroundElement.className=this._BackgroundCssClass);this._foregroundElement.parentNode.appendChild(this._backgroundElement);this._foregroundElement.style.display="none";this._foregroundElement.style.position="fixed";this._foregroundElement.style.zIndex=$common.getCurrentStyle(this._backgroundElement,"zIndex",this._backgroundElement.style.zIndex)+1;this._showHandler=Function.createDelegate(this,this._onShow);$addHandler(this.get_element(),"click",this._showHandler);this._OkControlID&&(this._okHandler=Function.createDelegate(this,this._onOk),$addHandler($get(this._OkControlID),"click",this._okHandler));this._CancelControlID&&(this._cancelHandler=Function.createDelegate(this,this._onCancel),$addHandler($get(this._CancelControlID),"click",this._cancelHandler));this._scrollHandler=Function.createDelegate(this,this._onLayout);this._resizeHandler=Function.createDelegate(this,this._onLayout);this.registerPartialUpdateEvents();this._resetAnimationsTarget();this._onHiding.get_animation()&&(this._hidingAnimationEndedHandler=Function.createDelegate(this,function(){this._isAnimationJustEnded=!0;this.hide()}),this._onHiding.get_animation().add_ended(this._hidingAnimationEndedHandler));this._onShowing.get_animation()&&(this._showingAnimationEndedHandler=Function.createDelegate(this,function(){this._isAnimationJustEnded=!0;this.show()}),this._onShowing.get_animation().add_ended(this._showingAnimationEndedHandler))},dispose:function(){this._hideImplementation();this._foregroundElement&&this._foregroundElement.parentNode&&(this._foregroundElement.parentNode.removeChild(this._backgroundElement),this._DropShadow&&(this._foregroundElement.parentNode.appendChild(this._popupElement),this._foregroundElement.parentNode.removeChild(this._foregroundElement)));this._scrollHandler=null;this._resizeHandler=null;this._cancelHandler&&$get(this._CancelControlID)&&($removeHandler($get(this._CancelControlID),"click",this._cancelHandler),this._cancelHandler=null);this._okHandler&&$get(this._OkControlID)&&($removeHandler($get(this._OkControlID),"click",this._okHandler),this._okHandler=null);this._showHandler&&($removeHandler(this.get_element(),"click",this._showHandler),this._showHandler=null);this._hidingAnimationEndedHandler&&this._onHiding.get_animation().remove_ended(this._hidingAnimationEndedHandler);this._showingAnimationEndedHandler&&this._onShowing.get_animation().remove_ended(this._showingAnimationEndedHandler);Sys.Extended.UI.ModalPopupBehavior.callBaseMethod(this,"dispose")},_attachPopup:function(){this._DropShadow&&!this._dropShadowBehavior&&(this._dropShadowBehavior=$create(Sys.Extended.UI.DropShadowBehavior,{},null,null,this._popupElement));this._dragHandleElement&&!this._dragBehavior&&(this._dragBehavior=$create(Sys.Extended.UI.FloatingBehavior,{handle:this._dragHandleElement},null,null,this._foregroundElement));$addHandler(window,"resize",this._resizeHandler);$addHandler(window,"scroll",this._scrollHandler);this._windowHandlersAttached=!0},_detachPopup:function(){this._windowHandlersAttached&&(this._scrollHandler&&$removeHandler(window,"scroll",this._scrollHandler),this._resizeHandler&&$removeHandler(window,"resize",this._resizeHandler),this._windowHandlersAttached=!1);this._dragBehavior&&(this._dragBehavior.dispose(),this._dragBehavior=null);this._dropShadowBehavior&&(this._dropShadowBehavior.dispose(),this._dropShadowBehavior=null)},_onShow:function(n){if(!this.get_element().disabled)return this.show(),n.preventDefault(),!1},_onOk:function(n){var t=$get(this._OkControlID);if(t&&!t.disabled)return this.hide()&&this._OnOkScript&&window.setTimeout(this._OnOkScript,0),n.preventDefault(),!1},_onCancel:function(n){var t=$get(this._CancelControlID);if(t&&!t.disabled)return this.hide()&&this._OnCancelScript&&window.setTimeout(this._OnCancelScript,0),n.preventDefault(),!1},_onLayout:function(n){var t=this.get_repositionMode();(t===Sys.Extended.UI.ModalPopupRepositionMode.RepositionOnWindowScroll||t===Sys.Extended.UI.ModalPopupRepositionMode.RepositionOnWindowResizeAndScroll)&&n.type==="scroll"?this._layout():(t===Sys.Extended.UI.ModalPopupRepositionMode.RepositionOnWindowResize||t===Sys.Extended.UI.ModalPopupRepositionMode.RepositionOnWindowResizeAndScroll)&&n.type==="resize"?this._layout():this._layoutBackgroundElement()},show:function(){var t,n;if(this._isAnimationJustEnded)this._isAnimationJustEnded=!1;else{if(t=new Sys.CancelEventArgs,this.raiseShowing(t),t.get_cancel())return;if(this._onShowing.get_animation()){this._onShowing.play();return}}if(this.populate(),this._attachPopup(),this._backgroundElement.style.display="",this._foregroundElement.style.display="",this._popupElement.style.display="",this._isIE6)for(this._foregroundElement.style.position="absolute",this._backgroundElement.style.position="absolute",n=this._foregroundElement.parentNode;n&&n!=document.documentElement;)if(n.style.position!="relative"&&n.style.position!="absolute")n=n.parentNode;else{this._relativeOrAbsoluteParentElement=n;break}this.disableTab();this._layout();this._layout();this.raiseShown(Sys.EventArgs.Empty);this._onShown.play()},disableTab:function(){var r=0,t,f=[],u,i,n;for(Array.clear(this._saveTabIndexes),i=0;i<this._tagWithTabIndex.length;i++)for(t=this._foregroundElement.getElementsByTagName(this._tagWithTabIndex[i]),n=0;n<t.length;n++)f[r]=t[n],r++;for(r=0,i=0;i<this._tagWithTabIndex.length;i++)for(t=document.getElementsByTagName(this._tagWithTabIndex[i]),n=0;n<t.length;n++)Array.indexOf(f,t[n])==-1&&(this._saveTabIndexes[r]={tag:t[n],index:t[n].tabIndex},t[n].tabIndex="-1",r++);if(r=0,Sys.Browser.agent===Sys.Browser.InternetExplorer&&Sys.Browser.version<7){for(u=[],i=0;i<this._tagWithTabIndex.length;i++)for(t=this._foregroundElement.getElementsByTagName("SELECT"),n=0;n<t.length;n++)u[r]=t[n],r++;for(r=0,Array.clear(this._saveDesableSelect),t=document.getElementsByTagName("SELECT"),n=0;n<t.length;n++)Array.indexOf(u,t[n])==-1&&(this._saveDesableSelect[r]={tag:t[n],visib:$common.getCurrentStyle(t[n],"visibility")},t[n].style.visibility="hidden",r++)}},restoreTab:function(){for(var t,n=0;n<this._saveTabIndexes.length;n++)this._saveTabIndexes[n].tag.tabIndex=this._saveTabIndexes[n].index;if(Array.clear(this._saveTabIndexes),Sys.Browser.agent===Sys.Browser.InternetExplorer&&Sys.Browser.version<7){for(t=0;t<this._saveDesableSelect.length;t++)this._saveDesableSelect[t].tag.style.visibility=this._saveDesableSelect[t].visib;Array.clear(this._saveDesableSelect)}},hide:function(){if(this._isAnimationJustEnded)this._isAnimationJustEnded=!1;else{var n=new Sys.CancelEventArgs;if(this.raiseHiding(n),n.get_cancel())return!1;if(this._onHiding.get_animation())return this._onHiding.play(),!0}return this._hideImplementation(),this.raiseHidden(Sys.EventArgs.Empty),this._onHidden.play(),!0},_hideImplementation:function(){this._backgroundElement.style.display="none";this._foregroundElement.style.display="none";this.restoreTab();this._detachPopup()},_layout:function(){var i=document.documentElement.scrollLeft?document.documentElement.scrollLeft:document.body.scrollLeft,r=document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop,u=$common.getClientBounds(),o=u.width,s=u.height,n,t,f,e;this._layoutBackgroundElement();n=0;t=0;this._xCoordinate<0?(f=this._foregroundElement.offsetWidth?this._foregroundElement.offsetWidth:this._foregroundElement.scrollWidth,n=(o-f)/2,this._foregroundElement.style.position=="absolute"&&(n+=i),this._foregroundElement.style.left=n+"px"):this._isIE6?(this._foregroundElement.style.left=this._xCoordinate+i+"px",n=this._xCoordinate+i):(this._foregroundElement.style.left=this._xCoordinate+"px",n=this._xCoordinate);this._yCoordinate<0?(e=this._foregroundElement.offsetHeight?this._foregroundElement.offsetHeight:this._foregroundElement.scrollHeight,t=(s-e)/2,this._foregroundElement.style.position=="absolute"&&(t+=r),this._foregroundElement.style.top=t+"px"):this._isIE6?(this._foregroundElement.style.top=this._yCoordinate+r+"px",t=this._yCoordinate+r):(this._foregroundElement.style.top=this._yCoordinate+"px",t=this._yCoordinate);this._layoutForegroundElement(n,t);this._dropShadowBehavior&&(this._dropShadowBehavior.setShadow(),window.setTimeout(Function.createDelegate(this,this._fixupDropShadowBehavior),0));this._layoutBackgroundElement()},_layoutForegroundElement:function(n,t){var u;if(this._isIE6&&this._relativeOrAbsoluteParentElement){var i=$common.getLocation(this._foregroundElement),r=$common.getLocation(this._relativeOrAbsoluteParentElement),f=i.x;f!=n&&(this._foregroundElement.style.left=n-r.x+"px");u=i.y;u!=t&&(this._foregroundElement.style.top=t-r.y+"px")}},_layoutBackgroundElement:function(){var n,t,i;this._isIE6&&(n=$common.getLocation(this._backgroundElement),t=n.x,t!=0&&(this._backgroundElement.style.left=-t+"px"),i=n.y,i!=0&&(this._backgroundElement.style.top=-i+"px"));var r=$common.getClientBounds(),u=r.width,f=r.height;this._backgroundElement.style.width=Math.max(Math.max(document.documentElement.scrollWidth,document.body.scrollWidth),u)+"px";this._backgroundElement.style.height=Math.max(Math.max(document.documentElement.scrollHeight,document.body.scrollHeight),f)+"px"},_fixupDropShadowBehavior:function(){this._dropShadowBehavior&&this._dropShadowBehavior.setShadow()},_partialUpdateEndRequest:function(n,t){if(Sys.Extended.UI.ModalPopupBehavior.callBaseMethod(this,"_partialUpdateEndRequest",[n,t]),this.get_element()){var i=t.get_dataItems()[this.get_element().id];"show"==i?this.show():"hide"==i&&this.hide()}this._layout()},_onPopulated:function(n,t){Sys.Extended.UI.ModalPopupBehavior.callBaseMethod(this,"_onPopulated",[n,t]);this._layout()},_replaceAnimationTarget:function(n,t){var i=this[n].get_json();this[n]=new Sys.Extended.UI.Animation.GenericAnimationBehavior(t);this[n].set_json(i);this[n].initialize()},_resetAnimationsTarget:function(){var n=$get(this.get_PopupControlID());this._replaceAnimationTarget("_onShowing",n);this._replaceAnimationTarget("_onShown",n);this._replaceAnimationTarget("_onHiding",n);this._replaceAnimationTarget("_onHidden",n)},get_PopupControlID:function(){return this._PopupControlID},set_PopupControlID:function(n){this._PopupControlID!=n&&(this._PopupControlID=n,this.raisePropertyChanged("PopupControlID"))},get_X:function(){return this._xCoordinate},set_X:function(n){this._xCoordinate!=n&&(this._xCoordinate=n,this.raisePropertyChanged("X"))},get_Y:function(){return this._yCoordinate},set_Y:function(n){this._yCoordinate!=n&&(this._yCoordinate=n,this.raisePropertyChanged("Y"))},get_PopupDragHandleControlID:function(){return this._PopupDragHandleControlID},set_PopupDragHandleControlID:function(n){this._PopupDragHandleControlID!=n&&(this._PopupDragHandleControlID=n,this.raisePropertyChanged("PopupDragHandleControlID"))},get_BackgroundCssClass:function(){return this._BackgroundCssClass},set_BackgroundCssClass:function(n){this._BackgroundCssClass!=n&&(this._BackgroundCssClass=n,this.raisePropertyChanged("BackgroundCssClass"))},get_DropShadow:function(){return this._DropShadow},set_DropShadow:function(n){this._DropShadow!=n&&(this._DropShadow=n,this.raisePropertyChanged("DropShadow"))},get_Drag:function(){return this._Drag},set_Drag:function(n){this._Drag!=n&&(this._Drag=n,this.raisePropertyChanged("Drag"))},get_OkControlID:function(){return this._OkControlID},set_OkControlID:function(n){this._OkControlID!=n&&(this._OkControlID=n,this.raisePropertyChanged("OkControlID"))},get_CancelControlID:function(){return this._CancelControlID},set_CancelControlID:function(n){this._CancelControlID!=n&&(this._CancelControlID=n,this.raisePropertyChanged("CancelControlID"))},get_OnOkScript:function(){return this._OnOkScript},set_OnOkScript:function(n){this._OnOkScript!=n&&(this._OnOkScript=n,this.raisePropertyChanged("OnOkScript"))},get_OnCancelScript:function(){return this._OnCancelScript},set_OnCancelScript:function(n){this._OnCancelScript!=n&&(this._OnCancelScript=n,this.raisePropertyChanged("OnCancelScript"))},get_repositionMode:function(){return this._repositionMode},set_repositionMode:function(n){this._repositionMode!==n&&(this._repositionMode=n,this.raisePropertyChanged("RepositionMode"))},get_OnShowing:function(){return this._onShowing.get_json()},set_OnShowing:function(n){this._onShowing.set_json(n);this.raisePropertyChanged("OnShowing")},get_OnShown:function(){return this._onShown.get_json()},set_OnShown:function(n){this._onShown.set_json(n);this.raisePropertyChanged("OnShown")},get_OnHiding:function(){return this._onHiding.get_json()},set_OnHiding:function(n){this._onHiding.set_json(n);this.raisePropertyChanged("OnHiding")},get_OnHidden:function(){return this._onHidden.get_json()},set_OnHidden:function(n){this._onHidden.set_json(n);this.raisePropertyChanged("OnHidden")},add_showing:function(n){this.get_events().addHandler("showing",n)},remove_showing:function(n){this.get_events().removeHandler("showing",n)},raiseShowing:function(n){var t=this.get_events().getHandler("showing");t&&t(this,n)},add_shown:function(n){this.get_events().addHandler("shown",n)},remove_shown:function(n){this.get_events().removeHandler("shown",n)},raiseShown:function(n){var t=this.get_events().getHandler("shown");t&&t(this,n)},add_hiding:function(n){this.get_events().addHandler("hiding",n)},remove_hiding:function(n){this.get_events().removeHandler("hiding",n)},raiseHiding:function(n){var t=this.get_events().getHandler("hiding");t&&t(this,n)},add_hidden:function(n){this.get_events().addHandler("hidden",n)},remove_hidden:function(n){this.get_events().removeHandler("hidden",n)},raiseHidden:function(n){var t=this.get_events().getHandler("hidden");t&&t(this,n)}};Sys.Extended.UI.ModalPopupBehavior.registerClass("Sys.Extended.UI.ModalPopupBehavior",Sys.Extended.UI.DynamicPopulateBehaviorBase);Sys.Extended.UI.ModalPopupBehavior.invokeViaServer=function(n,t){var i=$find(n);i&&(t?i.show():i.hide())};
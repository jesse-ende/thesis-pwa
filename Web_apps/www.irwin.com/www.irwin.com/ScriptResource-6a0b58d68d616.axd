// (c) 2010 CodePlex Foundation
(function(){function n(){Type.registerNamespace("Sys.Extended.UI");Sys.Extended.UI.AutoSize=function(){throw Error.invalidOperation();};Sys.Extended.UI.AutoSize.prototype={None:0,Fill:1,Limit:2};Sys.Extended.UI.AutoSize.registerEnum("Sys.Extended.UI.AutoSize",!1);Sys.Extended.UI.AccordionSelectedIndexChangeEventArgs=function(n,t){Sys.Extended.UI.AccordionSelectedIndexChangeEventArgs.initializeBase(this);this._oldIndex=n;this._selectedIndex=t};Sys.Extended.UI.AccordionSelectedIndexChangeEventArgs.prototype={get_oldIndex:function(){return this._oldIndex},set_oldIndex:function(n){this._oldIndex=n},get_selectedIndex:function(){return this._selectedIndex},set_selectedIndex:function(n){this._selectedIndex=n}};Sys.Extended.UI.AccordionSelectedIndexChangeEventArgs.registerClass("Sys.Extended.UI.AccordionSelectedIndexChangeEventArgs",Sys.CancelEventArgs);Sys.Extended.UI.AccordionBehavior=function(n){Sys.Extended.UI.AccordionBehavior.initializeBase(this,[n]);this._selectedIndex=0;this._panes=[];this._fadeTransitions=!1;this._duration=.25;this._framesPerSecond=30;this._autoSize=Sys.Extended.UI.AutoSize.None;this._requireOpenedPane=!0;this._suppressHeaderPostbacks=!1;this._headersSize=0;this._headerClickHandler=null;this._headerCssClass="";this._headerSelectedCssClass="";this._resizeHandler=null;this._isIE8InStandardMode=Sys.Browser.agent==Sys.Browser.InternetExplorer&&Sys.Browser.version>7&&Sys.Browser.documentMode!=0};Sys.Extended.UI.AccordionBehavior.prototype={initialize:function(){var t,i,n,r,u;for(Sys.Extended.UI.AccordionBehavior.callBaseMethod(this,"initialize"),this._headerClickHandler=Function.createDelegate(this,this._onHeaderClick),t=this.get_ClientState(),t!==null&&t!==""&&this._changeSelectedIndex(parseInt(t),!1,!0),i=this.get_element().childNodes,n={},n.value=0;n.value<i.length;n.value++){if(r=this._getNextDiv(i,n),!r)break;u=this._getNextDiv(i,n);u&&(this.addPane(r,u),n.value--)}this._requireOpenedPane&&!this.get_Pane()&&this._panes.length>0&&this._changeSelectedIndex(0,!1,!0);this._initializeLayout()},_getNextDiv:function(n,t){for(var i=null;t.value<n.length&&(i=n[t.value++]);)if(i.tagName&&i.tagName.toLowerCase()==="div")break;return i},addPane:function(n,t){var r={},u,i;return r.animation=null,r.header=n,n._index=this._panes.length,$addHandler(n,"click",this._headerClickHandler),u=this.get_element(),i=document.createElement("div"),u.insertBefore(i,t),i.appendChild(t),i._original=t,r.content=i,i.style.border="",i.style.margin="",i.style.padding="",Array.add(this._panes,r),this._initializePane(n._index),t.style.display="block",r},_getAnimation:function(n){var t=n.animation,i,r;return t||(i=null,r=null,this._fadeTransitions?(i=new Sys.Extended.UI.Animation.LengthAnimation(null,null,null,"style","height",0,0,"px"),r=new Sys.Extended.UI.Animation.FadeAnimation(null,null,null,Sys.Extended.UI.Animation.FadeEffect.FadeOut,0,1,!1),t=new Sys.Extended.UI.Animation.ParallelAnimation(n.content,this._duration,this._framesPerSecond,[r,i])):t=i=new Sys.Extended.UI.Animation.LengthAnimation(n.content,this._duration,this._framesPerSecond,"style","height",0,0,"px"),n.animation=t,t._length=i,t._fade=r,t._pane=n,t._opening=!0,t._behavior=this,t._ended=Function.createDelegate(n.animation,this._onAnimationFinished),t.add_ended(n.animation._ended),t.initialize()),t},_onAnimationFinished:function(){this._behavior._endPaneChange(this._pane,this._opening)},_initializeLayout:function(){for(var r,u,t,i,n=0;n<this._panes.length;n++)r=this._panes[n].animation,r&&r.get_isPlaying()&&r.stop();for(u=this.get_element(),this._initialHeight=u.offsetHeight,t=u.style,this._autoSize===Sys.Extended.UI.AutoSize.None?(this._disposeResizeHandler(),i=Sys.Browser.agent==Sys.Browser.InternetExplorer&&Sys.Browser.version>=7,(!i||i&&t.height&&t.height.length>0)&&(t.height="auto"),(!i||i&&t.overflow&&t.overflow.length>0)&&(t.overflow="auto")):(this._addResizeHandler(),t.height=u.offsetHeight+"px",t.overflow="hidden"),n=0;n<this._panes.length;n++)this._initializePane(n);this._resizeSelectedPane()},_initializePane:function(n){var f=this.get_Pane(n),u;if(f){var t=f.content,i=t._original,r=n===this._selectedIndex;t.style.height=r||this._autoSize===Sys.Extended.UI.AutoSize.Fill?"auto":"0px";t.style.overflow=r?"auto":"hidden";t.style.display=r?"block":"none";i.style.height="auto";i.style.maxHeight="";i.style.overflow=r?"auto":"hidden";u=r||!this._fadeTransitions?1:0;this._autoSize===Sys.Extended.UI.AutoSize.Fill?($common.getElementOpacity(i)!=u&&$common.setElementOpacity(i,u),$common.getElementOpacity(t)!=1&&$common.setElementOpacity(t,1)):($common.getElementOpacity(t)!=u&&$common.setElementOpacity(t,u),$common.getElementOpacity(i)!=1&&$common.setElementOpacity(i,1));f.header.className=this._selectedIndex===n?this._headerSelectedCssClass||this._headerCssClass:this._headerCssClass}},_addResizeHandler:function(){this._resizeHandler||(this._resizeHandler=Function.createDelegate(this,this._resizeSelectedPane),$addHandler(window,"resize",this._resizeHandler))},dispose:function(){var t,n;for(this._disposeResizeHandler(),this._disposeAnimations(),t=this._panes.length-1;t>=0;t--)n=this._panes[t],n&&(n.header&&(n.header._index=null,$removeHandler(n.header,"click",this._headerClickHandler),n.header=null),n.content&&(n.content._original=null,n.content=null),this._panes[t]=null,delete this._panes[t]);this._panes=null;this._headerClickHandler=null;Sys.Extended.UI.AccordionBehavior.callBaseMethod(this,"dispose")},_disposeResizeHandler:function(){this._resizeHandler&&($removeHandler(window,"resize",this._resizeHandler),this._resizeHandler=null)},_disposeAnimations:function(){for(var n,t=0;t<this._panes.length;t++)n=this._panes[t].animation,n&&(n.get_isPlaying()&&n.stop(),n._ended&&(n.remove_ended(n._ended),n._ended=null),n.dispose(),n._length=null,n._fade=null,n._pane=null,n._opening=null,n._behavior=null,this._panes[t].animation=null)},_resizeSelectedPane:function(){var i=this.get_Pane(),n,t;if(i){this._headersSize=this._getHeadersSize().height;n=i.content._original;switch(this._autoSize){case Sys.Extended.UI.AutoSize.None:n.style.height="auto";n.style.maxHeight="";break;case Sys.Extended.UI.AutoSize.Limit:t=this._getRemainingHeight(!1);n.style.height="auto";n.style.maxHeight=t+"px";break;case Sys.Extended.UI.AutoSize.Fill:t=this._getRemainingHeight(!0);n.style.height=t+"px";n.style.maxHeight=""}}},_onHeaderClick:function(n){for(var t=n.target,r=this.get_element(),i;t&&t.parentNode!==r;)t=t.parentNode;n.stopPropagation();this._suppressHeaderPostbacks&&n.preventDefault();i=t._index;i!==this._selectedIndex||this._requireOpenedPane||(i=-1);this._changeSelectedIndex(i,!0)},_changeSelectedIndex:function(n,t,i){var r=this._selectedIndex,u=this.get_Pane(n),f=this.get_Pane(r),e;(i||u!=f)&&((e=new Sys.Extended.UI.AccordionSelectedIndexChangeEventArgs(r,n),this.raiseSelectedIndexChanging(e),e.get_cancel())||(f&&(f.header.className=this._headerCssClass),u&&(u.header.className=this._headerSelectedCssClass==""?this._headerCssClass:this._headerSelectedCssClass),this._selectedIndex=n,this.set_ClientState(this._selectedIndex),t&&this._changePanes(r),this.raiseSelectedIndexChanged(new Sys.Extended.UI.AccordionSelectedIndexChangeEventArgs(r,n)),this.raisePropertyChanged("SelectedIndex")))},_changePanes:function(n){var u,f,r,i,t;if(this.get_isInitialized()){for(u=null,f=null,r=0;r<this._panes.length;r++){if(i=this._panes[r],t=this._getAnimation(i),t.get_isPlaying()&&t.stop(),r==this._selectedIndex)t._opening=!0,u=t;else if(r==n)t._opening=!1,f=t;else continue;this._startPaneChange(i,t._opening);this._fadeTransitions&&t._fade.set_effect(t._opening?Sys.Extended.UI.Animation.FadeEffect.FadeIn:Sys.Extended.UI.Animation.FadeEffect.FadeOut);this._autoSize===Sys.Extended.UI.AutoSize.Fill?(t.set_target(i.content._original),t._length.set_startValue($common.getContentSize(i.content._original).height),t._length.set_endValue(t._opening?this._getRemainingHeight(!0):0)):(t.set_target(i.content),t._length.set_startValue(i.content.offsetHeight),t._length.set_endValue(t._opening?this._getRemainingHeight(!1):0))}f&&f.play();u&&u.play()}},_startPaneChange:function(n,t){var i=n.content,r=i._original;t?(i.style.display="block",this._autoSize===Sys.Extended.UI.AutoSize.Fill&&this._isIE8InStandardMode&&(r.style.display="block")):(i.style.overflow="hidden",r.style.overflow="hidden",this._autoSize===Sys.Extended.UI.AutoSize.Limit&&(i.style.height=this._getTotalSize(r).height+"px",r.style.maxHeight=""))},_endPaneChange:function(n,t){var i=n.content,r=i._original,u;t?(this._autoSize===Sys.Extended.UI.AutoSize.Limit&&(u=this._getRemainingHeight(!0),r.style.maxHeight=u+"px"),r.style.overflow="auto",i.style.height="auto",i.style.overflow="auto"):this._isIE8InStandardMode?this._autoSize===Sys.Extended.UI.AutoSize.Fill?r.style.display="none":i.style.height="0px":i.style.display="none"},_getHeadersSize:function(){for(var n={width:0,height:0},i,t=0;t<this._panes.length;t++)i=this._getTotalSize(this._panes[t].header),n.width=Math.max(n.width,i.width),n.height+=i.height;return n},_getRemainingHeight:function(n){var t=0,i=this.get_Pane(),u,r;return this._autoSize===Sys.Extended.UI.AutoSize.None?i&&(t=this._getTotalSize(i.content._original).height):(t=this._headersSize,n&&i&&(t+=this._getGutterSize(i.content._original).height),u=this.get_element(),t=Math.max(u.offsetHeight-t,0),i&&this._autoSize===Sys.Extended.UI.AutoSize.Limit&&(r=this._getTotalSize(i.content._original).height,r>0&&(t=Math.min(t,r)))),t},_getTotalSize:function(n){var t=$common.getSize(n),i=$common.getMarginBox(n);return t.width+=i.horizontal,t.height+=i.vertical,t},_getGutterSize:function(n){var i={width:0,height:0},t;try{t=$common.getPaddingBox(n);i.width+=t.horizontal;i.height+=t.vertical}catch(r){}try{t=$common.getBorderBox(n);i.width+=t.horizontal;i.height+=t.vertical}catch(r){}return t=$common.getMarginBox(n),i.width+=t.horizontal,i.height+=t.vertical,i},add_selectedIndexChanging:function(n){this.get_events().addHandler("selectedIndexChanging",n)},remove_selectedIndexChanging:function(n){this.get_events().removeHandler("selectedIndexChanging",n)},raiseSelectedIndexChanging:function(n){var t=this.get_events().getHandler("selectedIndexChanging");t&&t(this,n)},add_selectedIndexChanged:function(n){this.get_events().addHandler("selectedIndexChanged",n)},remove_selectedIndexChanged:function(n){this.get_events().removeHandler("selectedIndexChanged",n)},raiseSelectedIndexChanged:function(n){var t=this.get_events().getHandler("selectedIndexChanged");t&&t(this,n)},get_Pane:function(n){return(n===undefined||n===null)&&(n=this._selectedIndex),this._panes&&n>=0&&n<this._panes.length?this._panes[n]:null},get_Count:function(){return this._panes?this._panes.length:0},get_TransitionDuration:function(){return this._duration*1e3},set_TransitionDuration:function(n){var t,i;if(this._duration!=n/1e3){for(this._duration=n/1e3,t=0;t<this._panes.length;t++)i=this._panes[t].animation,i&&i.set_duration(this._duration);this.raisePropertyChanged("TransitionDuration")}},get_FramesPerSecond:function(){return this._framesPerSecond},set_FramesPerSecond:function(n){var t,i;if(this._framesPerSecond!=n){for(this._framesPerSecond=n,t=0;t<this._panes.length;t++)i=this._panes[t].animation,i&&i.set_fps(this._framesPerSecond);this.raisePropertyChanged("FramesPerSecond")}},get_FadeTransitions:function(){return this._fadeTransitions},set_FadeTransitions:function(n){if(this._fadeTransitions!=n){if(this._fadeTransitions=n,this._disposeAnimations(),!this._fadeTransitions)for(var t=0;t<this._panes.length;t++)$common.getElementOpacity(this._panes[t].content)!=1&&$common.setElementOpacity(this._panes[t].content,1),$common.getElementOpacity(this._panes[t].content._original)!=1&&$common.setElementOpacity(this._panes[t].content._original,1);this.raisePropertyChanged("FadeTransitions")}},get_HeaderCssClass:function(){return this._headerCssClass},set_HeaderCssClass:function(n){this._headerCssClass=n;this.raisePropertyChanged("HeaderCssClass")},get_HeaderSelectedCssClass:function(){return this._headerSelectedCssClass},set_HeaderSelectedCssClass:function(n){this._headerSelectedCssClass=n;this.raisePropertyChanged("HeaderSelectedCssClass")},get_AutoSize:function(){return this._autoSize},set_AutoSize:function(n){Sys.Browser.agent===Sys.Browser.InternetExplorer&&n===Sys.Extended.UI.AutoSize.Limit&&(n=Sys.Extended.UI.AutoSize.Fill);this._autoSize!=n&&(this._autoSize=n,this._initializeLayout(),this.raisePropertyChanged("AutoSize"))},get_SelectedIndex:function(){return this._selectedIndex},set_SelectedIndex:function(n){this._changeSelectedIndex(n,!0)},get_requireOpenedPane:function(){return this._requireOpenedPane},set_requireOpenedPane:function(n){this._requireOpenedPane!=n&&(this._requireOpenedPane=n,this.raisePropertyChanged("requireOpenedPane"))},get_suppressHeaderPostbacks:function(){return this._suppressHeaderPostbacks},set_suppressHeaderPostbacks:function(n){this._suppressHeaderPostbacks!=n&&(this._suppressHeaderPostbacks=n,this.raisePropertyChanged("suppressHeaderPostbacks"))}};Sys.Extended.UI.AccordionBehavior.registerClass("Sys.Extended.UI.AccordionBehavior",Sys.Extended.UI.BehaviorBase);Sys.registerComponent(Sys.Extended.UI.AccordionBehavior,{name:"accordion"})}window.Sys&&Sys.loader?Sys.loader.registerScript("ExtendedAccordion",["ExtendedAnimations","ExtendedBase"],n):n()})();
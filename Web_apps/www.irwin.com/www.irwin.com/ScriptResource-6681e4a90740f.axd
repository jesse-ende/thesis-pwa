// (c) 2010 CodePlex Foundation
(function(n,t){$act.createWidget("tabContainer",{options:{activeTabIndex:0,useVerticalStripPlacement:!1,onDemand:!1,autoPostBackId:null,scrollBars:"None",tabStripPlacement:"Top"},_create:function(){var n=this,u=n.options,i=t(n.element),r=i.attr("id");n._header=t("#"+r+"_header");n._body=t("#"+r+"_body");n._tabs=[];n._cachedActiveTabIndex=u.activeTabIndex;n._created=!1;i.addClass("ajax__tab_container ajax__tab_default");n._body.children().each(function(t,i){n._tabs.push($act.common.activateWidget("tabPanel",i,{owner:n,tabIndex:t}))});n.option("activeTabIndex",n.options.activeTabIndex)},_events:["activeTabChanged"],_setOption:function(n,t){var i=this;i._created&&i.option(n)==t||(n=="activeTabIndex"&&(t=i._setActiveTabIndex(t)),i._superApply(arguments),i._saveClientState(),i._invalidate())},_saveClientState:function(){var n=this.options,t={ActiveTabIndex:n.activeTabIndex,TabEnabledState:[!0,!0,!0],TabWasLoadedOnceState:[!1,!1,!1]};this._clientStateElement.val(JSON.stringify(t))},show:function(){t(this.element).css({visibility:"visible"})},getFirstTab:function(n){for(var i=this._tabs,t=0;t<i.length;t++)if(n||i[t].options.enabled)return i[t];return null},getLastTab:function(n){for(var i=this._tabs,t=i.length-1;t>=0;t--)if(n||i[t].options.enabled)return i[t];return null},getNextTab:function(n){for(var i=this._tabs,f=this.options.activeTabIndex,u,r,t=1;t<i.length;t++)if(u=(f+t)%i.length,r=i[u],n||r.options.enabled)return r;return null},getPreviousTab:function(n){for(var t=this._tabs,f=this.options.activeTabIndex,u,r,i=1;i<t.length;i++)if(u=(t.length+(f-i))%t.length,r=t[u],n||r.options.enabled)return r;return null},getNearestTab:function(n){var t=this.getPreviousTab(n),i=this.getNextTab(n);return t&&t._tabIndex<this.options.activeTabIndex?t:i&&i._tabIndex>this.options.activeTabIndex?i:null},_invalidate:function(){var n=this,i="ajax__scroll_auto",r=n.options;switch(r.scrollBars){case"Horizontal":i="ajax__scroll_horizontal";break;case"Vertical":i="ajax__scroll_vertical";break;case"Both":i="ajax__scroll_both";break;case"None":i="ajax__scroll_none"}if(n._body.addClass(i),!n.hoop&&r.useVerticalStripPlacement){var u=n.element.attr("id"),f=n._header.outerHeight(),e=n._body.outerHeight();t("#"+u+"_headerSpannerHeight").height(e-f);n.hoop=!0}},_setActiveTabIndex:function(n){var t=this,i=t.options,r,u;if(n<-1)throw"invalid tab index";return n>=t._tabs.length&&(n=t._tabs.length-1),t._created&&n==i.activeTabIndex||(i.activeTabIndex!=-1&&t._tabs[i.activeTabIndex]._set_active(!1),i.activeTabIndex=n,r=t._tabs[i.activeTabIndex],i.activeTabIndex!=-1&&r._set_active(!0),i.onDemand&&(u=r.options.onDemandMode,u!="None"&&((u!="Once"||r.options.wasLoadedOnce)&&u!="Always"||setTimeout(function(){$act.common.doPostBack(r.options.updatePanelID);r.option("wasLoadedOnce",!0)},0))),t._created&&t.raiseActiveTabChanged(),t._created=!0),n},raiseActiveTabChanged:function(){var t=this,n=t.options;t._invokeHandler("activeTabChanged",t);n.autoPostBackId&&n.autoPostBack&&$act.common.doPostBack(n.autoPostBackId,"activeTabChanged:"+n.activeTabIndex)},set_activeTab:function(n){var i=t.inArray(n,this._tabs);if(i==-1)throw"can't find index of tab to activate";this.option("activeTabIndex",i)},get_activeTab:function(){return this._tabs[this.options.activeTabIndex]},get_tabs:function(){return this._tabs==null&&(this._tabs=[]),this._tabs}})})(window,actJQuery);
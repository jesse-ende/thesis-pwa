Type.registerNamespace("Sys.Extended.UI.AjaxFileUpload");Type.registerNamespace("AjaxFileUpload");Sys.Extended.UI.AjaxFileUpload.Control=function(n){Sys.Extended.UI.AjaxFileUpload.Control.initializeBase(this,[n]);this._allowedFileTypes=null;this._contextKey=null;this._postBackUrl=null;this._mode=0;this._serverPollingSupport=!1;this._throbber=null;this._maximumNumberOfFiles=10;this._allowedFileTypes="";this._chunkSize=4096;this._storeToAzure=!1;this._azureContainerName="";this._uploadUrl="AjaxFileUploadHandler.axd";this._useHtml5Support=!1;this._elements=null;this._processor=null;this._filesInQueue=[];this._isUploading=!1;this._currentFileId=null;this._currentQueueIndex=0;this._canceled=!1};Sys.Extended.UI.AjaxFileUpload.Control.prototype={initialize:function(){var r=new Sys.Extended.UI.AjaxFileUpload.Utils,u=this.get_id(),n=function(n){return document.getElementById(u+n)},t={queueContainer:n("_QueueContainer"),selectFileButton:n("_SelectFileButton"),uploadOrCancelButton:n("_UploadOrCancelButton"),fileStatusContainer:n("_FileStatusContainer"),footer:n("_Footer")},i;this._useHtml5Support=r.checkHtml5BrowserSupport()&&this._mode!=2;t.progressBar=n("_ProgressBar");t.progressBarContainer=n("_ProgressBarContainer");this._useHtml5Support?(t.inputFile=n("_Html5InputFile"),t.dropZone=n("_Html5DropZone")):t.inputFile=n("_InputFileElement");this._elements=t;i=this._useHtml5Support?new Sys.Extended.UI.AjaxFileUpload.ProcessorHtml5(this,t):new Sys.Extended.UI.AjaxFileUpload.Processor(this,t);this.setDefaultElementsLayout(t);this.attachEvents(t);i.initialize();this._processor=i;Sys.Extended.UI.AjaxFileUpload.Control.callBaseMethod(this,"initialize")},dispose:function(){Sys.Extended.UI.AjaxFileUpload.Control.callBaseMethod(this,"dispose")},setDefaultElementsLayout:function(n){$common.setVisible(n.inputFile,!0);$common.setVisible(n.uploadOrCancelButton,!1);$common.setVisible(n.fileStatusContainer,!0);n.selectFileButton.innerHTML=Sys.Extended.UI.Resources.AjaxFileUpload_SelectFile;n.uploadOrCancelButton.innerHTML=Sys.Extended.UI.Resources.AjaxFileUpload_Upload;this.setStatusMessage(Sys.Extended.UI.Resources.AjaxFileUpload_SelectFileToUpload)},attachEvents:function(n){this.onUploadOrCancelButtonClicked$delegate=Function.createDelegate(this,this.onUploadOrCancelButtonClickedHandler);$addHandlers(n.uploadOrCancelButton,{click:this.onUploadOrCancelButtonClicked$delegate})},onUploadOrCancelButtonClickedHandler:function(){var i=this._filesInQueue,u,t,r,n;if(!i.length){alert(Sys.Extended.UI.Resources.AjaxFileUpload_SelectFileToUpload);return}for(u=0,n=0;n<i.length;n++)i[n]._isUploaded&&u++;if(u==i.length){alert(Sys.Extended.UI.Resources.AjaxFileUpload_AllFilesUploaded);return}if(this.enableControls(this._isUploading),this._isUploading=!this._isUploading,this._isUploading)this._canceled=!1,t=new XMLHttpRequest,r=this,t.open("POST","?contextKey="+this._contextKey+"&start=1&queue="+this._filesInQueue.length),t.onreadystatechange=function(){if(t.readyState==4)if(t.status==200)r._processor.startUpload(),r.raiseUploadStart(Sys.Serialization.JavaScriptSerializer.deserialize(t.responseText));else{r.raiseUploadError(t);throw"Failed to starting upload.";}},t.send(null);else for(this._canceled=!0,this._processor.cancelUpload(),n=0;n<i.length;n++)i[n]._isUploaded||(i[n]._isUploading=!1)},enableControls:function(n){var t=this._elements.uploadOrCancelButton;$common.setText(t,n?Sys.Extended.UI.Resources.AjaxFileUpload_Upload:Sys.Extended.UI.Resources.AjaxFileUpload_Cancel);t.setAttribute("class",n?"ajax__fileupload_uploadbutton":"ajax_fileupload_cancelbutton");$common.setVisible(this._elements.inputFile,n);this._useHtml5Support&&(this._elements.dropZone.disable=!n,this._elements.inputFile.disable=!n)},done:function(){this._isUploading=!1;this.enableControls(!0);this.setStatusMessage(Sys.Extended.UI.Resources.AjaxFileUpload_AllFilesUploaded+" "+Sys.Extended.UI.Resources.AjaxFileUpload_SelectFileToUpload);$common.setVisible(this._elements.uploadOrCancelButton,!1);var n=new XMLHttpRequest,t=this,i=this._filesInQueue[this._currentQueueIndex-1];n.open("POST","?contextKey="+this._contextKey+"&complete=1&queue="+this._filesInQueue.length+"&uploaded="+(this._currentQueueIndex-(i._isUploaded?0:1))+"&reason="+(this._canceled?"cancel":"done"));n.onreadystatechange=function(){if(n.readyState==4)if(n.status==200)t.raiseUploadCompleteAll(Sys.Serialization.JavaScriptSerializer.deserialize(n.responseText));else{t.raiseUploadError(n);throw"Failed to completing upload.";}};n.send(null);this._filesInQueue=[];this._currentQueueIndex=0},removeFileFromQueueHandler:function(n){n&&!n._isUploading&&(Array.remove(this._filesInQueue,n),n.removeNodeFrom(this._elements.queueContainer),this._elements.queueContainer.hasChildNodes()||($common.setVisible(this._elements.queueContainer,!1),$common.setVisible(this._elements.uploadOrCancelButton,!1)),this._showFilesCount())},addFileToQueue:function(n){var i=this.get_maximumNumberOfFiles(),t;return i>0&&this._filesInQueue.length>=i?(alert(Sys.Extended.UI.Resources.AjaxFileUpload_MaxNumberOfFilesExceeded),!1):(t=new Sys.Extended.UI.AjaxFileUpload.Item(this.get_id(),n,Function.createDelegate(this,this.removeFileFromQueueHandler)),t.appendNodeTo(this._elements.queueContainer),t.setStatus("pending",Sys.Extended.UI.Resources.AjaxFileUpload_Pending),$common.setVisible(this._elements.queueContainer,!0),$common.setVisible(this._elements.uploadOrCancelButton,!0),this._filesInQueue.push(t),this._showFilesCount(),!0)},_showFilesCount:function(){var n=this._filesInQueue.length==0;this.setStatusMessage(n?Sys.Extended.UI.Resources.AjaxFileUpload_SelectFileToUpload:String.format(Sys.Extended.UI.Resources.AjaxFileUpload_FileInQueue,this._filesInQueue.length.toString()))},fileTypeIsValid:function(n){var i,t,r;if(!this._allowedFileTypes)return!0;for(i=this._allowedFileTypes.split(","),t=0;t<i.length;t++)if(r=i[t],n.toLocaleLowerCase()==r.toLocaleLowerCase())return!0;return!1},confirmFileIsInvalid:function(n){var t=new Sys.Extended.UI.AjaxFileUpload.Utils;alert(String.format(Sys.Extended.UI.Resources.AjaxFileUpload_WrongFileType,t.getFileName(n.value),n.type))},doneAndUploadNextFile:function(n){var t=new XMLHttpRequest,i=this;t.open("POST","?contextKey="+this._contextKey+"&done=1&guid="+n._id,!0);t.onreadystatechange=function(){if(t.readyState==4)if(t.status==200)i.raiseUploadComplete(Sys.Serialization.JavaScriptSerializer.deserialize(t.responseText)),i._processor.startUpload();else{i.setFileStatus(n,"error",Sys.Extended.UI.Resources.AjaxFileUpload_error);i.raiseUploadError(t);throw"error raising upload complete event and start new upload";}};t.send(null)},cancelUpload:function(){var i=this.getCurrentFileItem(),n,t;for(i._isUploaded=!1,i._isUploading=!1,this.setStatusMessage(Sys.Extended.UI.Resources.AjaxFileUpload_UploadCanceled),n=0;n<this._filesInQueue.length;n++)t=this._filesInQueue[n],t._isUploaded||this.setFileStatus(t,"cancelled",Sys.Extended.UI.Resources.AjaxFileUpload_Canceled)},setAsUploading:function(n){n._isUploading=!0;n._isUploaded=!1;this._currentQueueIndex=Array.indexOf(this._filesInQueue,n)+1;this.setFileStatus(n,"uploading",Sys.Extended.UI.Resources.AjaxFileUpload_Uploading);this.setStatusMessage("Uploading "+this._currentQueueIndex+" of "+this._filesInQueue.length+" file(s)")},setFileStatus:function(n,t,i){typeof n=="string"&&(n=this.getFileItem(n));n&&n.setStatus(t,i)},setStatusMessage:function(n){this._elements.fileStatusContainer.innerHTML=n},setPercent:function(n){var t=this._elements.progressBar;n<=0?n="0":n>=100&&(n="100");t.style.width=n+"%";$common.setText(t,String.format(Sys.Extended.UI.Resources.AjaxFileUpload_UploadedPercentage,n))},get_allowedFileTypes:function(){return this._allowedFileTypes},set_allowedFileTypes:function(n){this._allowedFileTypes=n},get_contextKey:function(){return this._contextKey},set_contextKey:function(n){this._contextKey=n},get_postBackUrl:function(){return this._postBackUrl},set_postBackUrl:function(n){this._postBackUrl=n},get_mode:function(){return this._mode},set_mode:function(n){this._mode=n},get_serverPollingSupport:function(){return this._serverPollingSupport},set_serverPollingSupport:function(n){this._serverPollingSupport=n},get_throbber:function(){return this._throbber},set_throbber:function(n){this._throbber=n},get_maximumNumberOfFiles:function(){return this._maximumNumberOfFiles},set_maximumNumberOfFiles:function(n){this._maximumNumberOfFiles=n},get_chunkSize:function(){return this._chunkSize},set_chunkSize:function(n){this._chunkSize=n},get_storeToAzure:function(){return this._storeToAzure},set_storeToAzure:function(n){this._storeToAzure=n},get_azureContainerName:function(){return this._azureContainerName},set_azureContainerName:function(n){this._azureContainerName=n},add_uploadStart:function(n){this.get_events().addHandler("uploadStart",n)},remove_uploadStart:function(n){this.get_events().removeHandler("uploadStart",n)},add_uploadComplete:function(n){this.get_events().addHandler("uploadComplete",n)},remove_uploadComplete:function(n){this.get_events().removeHandler("uploadComplete",n)},add_uploadCompleteAll:function(n){this.get_events().addHandler("uploadCompleteAll",n)},remove_uploadCompleteAll:function(n){this.get_events().removeHandler("uploadCompleteAll",n)},raiseUploadStart:function(n){var t=this.get_events().getHandler("uploadStart"),i;t&&(i=new Sys.Extended.UI.AjaxFileUploadStartEventArgs(n.FilesInQueue,n.ServerArguments),t(this,i))},raiseUploadComplete:function(n){var t=this.getCurrentFileItem(),i,r,u;if(!t||!n||n.FileId!==t._id)throw"Invalid finalizing upload server response.";this.setFileStatus(t,"uploaded",Sys.Extended.UI.Resources.AjaxFileUpload_Uploaded);this.setStatusMessage("Uploaded "+this._currentQueueIndex+" of "+this._filesInQueue.length+" file(s)");t._isUploaded=!0;t._isUploading=!1;t.hide();i=this.get_events().getHandler("uploadComplete");i&&(r=Array.indexOf(this._filesInQueue,t),u=new Sys.Extended.UI.AjaxFileUploadEventArgs(n.FileId,"Success",n.FileName,n.FileSize,n.ContentType,n.PostedUrl,r,this._filesInQueue.length),i(this,u))},raiseUploadCompleteAll:function(n){var t=this.get_events().getHandler("uploadCompleteAll"),i;t&&(i=new Sys.Extended.UI.AjaxFileUploadCompleteAllEventArgs(n.FilesInQueue,n.FilesUploaded,n.Reason,n.ServerArguments),t(this,i))},add_uploadError:function(n){this.get_events().addHandler("uploadError",n)},remove_uploadError:function(n){this.get_events().removeHandler("uploadError",n)},raiseUploadError:function(n){var t=this.get_events().getHandler("uploadError");t&&t(this,n);this._canceled=!1;this._isUploading=!1;this.enableControls(!0)},getCurrentFileItem:function(){return this.getFileItem(this._currentFileId)},getNextFile:function(){var n,t;if(!this._isUploading)return null;for(n=0;n<this._filesInQueue.length;n++)if(t=this._filesInQueue[n],!t._isUploaded)return t;return null},getFileItem:function(n){for(var i,t=0;t<this._filesInQueue.length;t++)if(i=this._filesInQueue[t],i._id===n)return i;return null}};Sys.Extended.UI.AjaxFileUpload.Control.registerClass("Sys.Extended.UI.AjaxFileUpload.Control",Sys.Extended.UI.ControlBase);
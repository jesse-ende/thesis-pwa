import {
    WorkerMessenger
} from '../libraries/WorkerMessenger';
import {
    PageViewManager
} from '../managers/PageViewManager';
import PermissionManager from '../managers/PermissionManager';
import ContextHelper from "../helpers/ContextHelper";
import {
    UpdateManager
} from "../managers/UpdateManager";
import {
    SessionManager
} from "../managers/sessionManager/sw/SessionManager";
import {
    SecondaryChannelManager
} from '../managers/channelManager/shared/SecondaryChannelManager';
export default class ContextSW {
    constructor(appConfig) {
        this.appConfig = appConfig;
        this.subscriptionManager = ContextHelper.getSubscriptionManager(this);
        this.serviceWorkerManager = ContextHelper.getServiceWorkerManager(this);
        this.pageViewManager = new PageViewManager();
        this.sessionManager = new SessionManager(this);
        this.permissionManager = new PermissionManager();
        this.workerMessenger = new WorkerMessenger(this);
        this.updateManager = new UpdateManager(this);
        this.secondaryChannelManager = new SecondaryChannelManager();
    }
}
//# sourceMappingURL=ContextSW.js.map
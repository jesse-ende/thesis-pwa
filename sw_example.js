function main() {
    self.addEventListener('fetch', function(event) {

    });
    self.addEventListener('install', event => {
        self.skipWaiting();
    });
    self.addEventListener('notificationclick', function(event) {
        event.notification.close();

        event.waitUntil(
            clients.openWindow(event.notification.data.url)
        );
    });
    self.addEventListener('push', function(event) {
        if (!(self.Notification && self.Notification.permission === 'granted')) {
            return;
        }
        var webPushData = JSON.parse(event.data.text());
        const title = webPushData.title;
        const options = {
            body: webPushData.message,
            icon: webPushData.iconURL,
            data: {
                "url": webPushData.actionURL
            }
        };
        if (event.data) {
            event.waitUntil(self.registration.showNotification(title, options));
        }
    });
}
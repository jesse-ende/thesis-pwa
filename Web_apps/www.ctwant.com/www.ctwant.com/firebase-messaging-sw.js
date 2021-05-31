// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/6.3.4/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/6.3.4/firebase-messaging.js');

firebase.initializeApp({
    'messagingSenderId': '35365013381'
})

// 預設背景推播資料
let messaging = firebase.messaging()
let notificationTitle = '即時重點新聞'
let notificationBody = 'CTWANT'
let notificationLink = 'https://www.ctwant.com?utm_source=cms&utm_medium=notification'
let notificationIcon = 'https://static.ctwant.com/images/dist/logo-icon.png'

messaging.setBackgroundMessageHandler(function(payload) {
    const data = payload.data

    if (typeof data != 'undefined' && data !== null) {
        notificationTitle = (typeof data.title === 'undefined') ? notificationTitle : data.title
        notificationBody = (typeof data.body === 'undefined') ? notificationBody : data.body
        notificationLink = (typeof data.url === 'undefined') ? notificationLink : data.link
        notificationIcon = (typeof data.icon === 'undefined') ? notificationIcon : data.icon
    }
    const notificationOptions = {
        body: notificationBody,
        icon: notificationIcon,
        image: data.image,
        data: data
    }
    return self.registration.showNotification(notificationTitle, notificationOptions)
})

//通知視窗點擊後的動作
self.addEventListener('notificationclick', function(event) {
    event.notification.close()
    event.waitUntil(
        clients.openWindow(
            event.notification.data.click_action
        )
    )
})
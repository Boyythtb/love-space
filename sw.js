// Service Worker cho Love Space PWA
const CACHE_NAME = 'love-space-v2';

self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  return self.clients.claim();
});

// Xử lý sự kiện click vào thông báo đẩy ngoài màn hình khóa
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  const action = event.action;
  const urlToOpen = (event.notification.data && event.notification.data.url) || './index.html';

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      for (const client of clientList) {
        if (client.url && 'focus' in client) {
          if (action) {
            client.postMessage({ type: 'NOTIFICATION_ACTION', action: action });
          }
          return client.focus();
        }
      }
      if (clients.openWindow) return clients.openWindow(urlToOpen);
    })
  );
});

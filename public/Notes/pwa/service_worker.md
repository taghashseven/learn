
## what is a service worker? 
- its runs on its own thread, separate from the main thread of the browser
- it is a programmable network proxy, it can intercept the request and response
- it an middleware between the client and the server
- can run in the background even if the browser is closed 
## requirements 
- it must be served over https

### origin 
- protocol + hostname + port 
- the service worker is scoped to the origin
- the service worker can only control the pages that are in its scope
- any page can install the service worker 
- only one service worker is allowed per scope 
- ther are other changles when it an iframe, lets leave that for other day 

### 

### registering a service worker 

```javascript
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('SW registered: ', registration);
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}
```


### cache api 

- there are a number of design patterns for caching
- cache first
- network first
- prefetch 
- app shell pattern 

- the app shell pattern 
    - we cache all the resources that are neccessy for the app to render 


## service worker events 

```js
self.addEventListener('install', (event) => {

    caches.open('my-cache')
    .then((cache) => {
        cache.addAll([
            '/',  // this is the root of the app index.html
            '/main.js',
            '/style.css'

            // note that you can cache assets from other domains
        ])
    })
});


// serve the file 
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
        .then((response) => {
            if (response) {
                return response;
            }
            return fetch(event.request);
        })
    )
});

// or 
self.addEventListener('fetch', (event)=>{
    event.respondWith()
})

```


### cache first pattern 

```js

self.addEventListener('fetch', (event) => {
    event.respondWith(                  // respond with must not be buried in a promise
        caches.match(event.request)   // all caches database 
        .then((response) => {
            if (response) {
                return response;
            }
            return fetch(event.request);
        })
    )
});

```


### wait until 

```js
self.addEventListener('install', (event) => {
    event.waitUntil(            // 
        caches.open('my-cache')
        .then((cache) => {
            cache.addAll([
                '/',  // this is the root of the app index.html
                '/main.js',
                '/style.css'
    
                // note that you can cache assets from other domains
            ])
        })
    )
});
```

#### update the cache 


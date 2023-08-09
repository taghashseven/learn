#

## manifest 
- its like the heart of the PWA
- save the manifest in the root folder of you pwa 
- the start url is the first page that will be loaded when the user open the app, if you dont specify it, the browser will load the page that the user was on when he added the app to his home screen

### manifest file example 
```json
'name': 'My PWA',
'short_name': 'My PWA',
'start_url': '/',
'display': 'standalone',
'background_color': '#fff',
'theme_color': '#3f51b5',
'oreintation': 'all' // or portrait-primary or landscape-primary, // ios does not support this, in desktop it will be ignored
'scope' : './', // the scope of the app, the path that the app can access
'icons' : [
    {
        'src': 'images/icons/icon-72x72.png',
        'sizes': '72x72',
        'type': 'image/png'
    },
    {
        'src': 'images/icons/icon-96x96.png',
        'sizes': '96x96',
        'type': 'image/png'
    },
 
   
]
```

- theme_color: use names color an rgb, it define the color of the address bar in mobile, this them color can be overriden in html using meta tag
```html
<meta name="theme-color" content="#3f51b5">
```
- the theme color is also used for the splash screen background color
- icon , in android if you change the icon, it will be updated, the platform has a way to update that. but in ios and destop that is not the way
- the scope defines what likes will be rendered in like the app. and it can only be the same domain, if you point to the other domain, that will render in what is called the inner browser. For example you pwa use the google to log in. The google will be rendered in the inner browser, and then user should go back to the app. But if the page points back to the pwa domain then it will go back automatically.
- the start url : can be used with other arguments like 
```json
"start_url": "/?utm_source=homescreen"
```
- and the argument may be for google analytics or something else
- display: 
    - fullscreen: the app will be rendered in fullscreen, and the address bar will be hidden , only in android, in ios and desktop it will fall back into standalone
    - standalone: the app will be rendered in standalone mode, and the address bar will be shown
    - minimal-ui: the app will be rendered in standalone mode, and small url info will be shown, ios does not support this
    - browser: the app will be rendered in browser mode, and the address bar will be shown, and the browser will be shown

- icon 
    - the icon should be square
    - the icon should be png
    - svg is supported in desktop  
    - for ios you should use the apple touch icon
    - for ios the icon should be squire , the iso will add the rounded corner for u 
    ```
    <link rel="apple-touch-icon" href="images/icons/icon-72x72.png">`
    ```
    - android and icons 
    - in android there are two ways to have the app, that is the webAPK or shortcut, if the pwa is a shortct it will have a small browser bage on the icon, and if it is a webAPK it will have no badge. To have the pwa as webapk it must be installed from chrome

    - icons sizes 
      - 192x192 
      - 512x512
      - 384x384
      - 1024x1024
    
    - maskable icons 
      ```
      icons : [
        {
          'src': 'images/icons/icon-72x72.png',
          'sizes': '72x72',
          'type': 'image/png',
          'purpose': 'any maskable'
        },
      ]
      ```

      tools : maskable.app/editor
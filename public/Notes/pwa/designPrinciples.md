## 
- you have to make it feel like an app, try to remove some web like things 

- selection 
 - make most things none selectable
 ```css
    * {
        user-select: none;
    }
 ```

 - safe area 
    - the safe area is the area that is safe to put the content in, it is the area that is not covered by the notch or the home button or the status bar

    - you can use the safe area in css 
    ```css
        body {
            padding-top: env(safe-area-inset-top);
            padding-bottom: env(safe-area-inset-bottom);
            padding-left: env(safe-area-inset-left);
            padding-right: env(safe-area-inset-right);
        }
    ```

    - the env variables takes two arguments 
        - the first is the name of the variable 
        - the second is the fallback value if the variable is not supported
    
    - viewport-fit=cover 
        - this is a meta tag that can be used to make the app cover the whole screen, and it will be used in the iphone x and above, and it will make the app cover the whole screen, and it will make the app cover the notch and the home button, and it will make the app cover the statusa bar, and it will make the app cov

        ```css
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
        ``` 
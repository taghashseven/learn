# Understanding Mouse Events in OpenCV when Capturing Webcam Video

When working with webcam video using OpenCV, you can leverage mouse events to interact with the captured frames. Mouse events enable you to respond to user actions such as clicking, dragging, or releasing the mouse cursor over the displayed video frame. In this guide, we'll explore how to handle mouse events effectively.

## Mouse Events in OpenCV

Mouse events are triggered when the user interacts with the displayed frame. You can utilize these events to perform various actions based on user input.

1. **Event Registration:**

   To handle mouse events, you need to register a callback function using `cv2.setMouseCallback(window_name, callback_function)`.

   ```python
   def mouse_callback(event, x, y, flags, param):
       if event == cv2.EVENT_LBUTTONDOWN:
           print(f"Left button clicked at ({x}, {y})")

   cv2.setMouseCallback('Webcam Feed', mouse_callback)


    ``` 


## Mouse Event Types:

- cv2.EVENT_MOUSEMOVE: The mouse pointer is moved over the frame.
- cv2.EVENT_LBUTTONDOWN: The left mouse button is pressed.
- cv2.EVENT_LBUTTONUP: The left mouse button is released.
- cv2.EVENT_RBUTTONDOWN: The right mouse button is pressed.
- cv2.EVENT_RBUTTONUP: The right mouse button is released.


## Mouse Callback Function:

## The callback function receives the following parameters:

event: The type of mouse event.
x, y: Coordinates of the mouse pointer.
flags: Additional flags, e.g., whether a button was pressed.
param: Additional parameters passed to the callback function.


## Event Handling:

Inside the callback function, you can respond to different types of mouse events based on their types.

```python
def mouse_callback(event, x, y, flags, param):
    if event == cv2.EVENT_LBUTTONDOWN:
        print(f"Left button clicked at ({x}, {y})")
    elif event == cv2.EVENT_RBUTTONDOWN:
        print(f"Right button clicked at ({x}, {y})")

```


## draw lines example 

```python 
import cv2 
import numpy as np

points = []

# event handing 
def callback(event , x , y, flag , param    ) :
     print(flag)
     global points 
     if event == cv2.EVENT_LBUTTONDOWN:
        points.append([x , y])
        if(len(points) == 2):
            cv2.line(img , points[0], points[1] , (29 , 10 ,255) , 4 )
            cv2.imshow('img' , img)
            points = []
            return 


img = cv2.imread('sample/aero1.jpg' , 1)


# show the image 
cv2.imshow('img'    ,img  )


#mouse event x
cv2.setMouseCallback('img', callback )



if cv2.waitKey(0) & 0xFF == ord('q'):
    cv2.destroyAllWindows()

```
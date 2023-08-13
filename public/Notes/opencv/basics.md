## imgs presentations 

    an image is an array of pixes
    each pixel is a tuple of 3 values (R, G, B)

![200](/Notes/imgs/image_pre.png)


## read an image in open cv 

```python
import cv2              #import open sv

img = cv2.imread('imgs/bee.jpeg')           
cv2.imshow('Output', img)
cv2.waitKey(2000)                # the window will open unti infinite 

```

## read an video 


```python
import cv2              #import open sv

#importing a video 
cap = cv2.VideoCapture('video/me.mp4')

while True : 
    success , img = cap.read()
    cv2.imshow('Video', img)
    if cv2.waitKey(1) & 0xFF == ord('q'): 
        break
    
```


## read a webcam 

```python
import cv2              #import open sv

#importing a video 
cap = cv2.VideoCapture(0)

cap.set(3,640)
cap.set(4,480)

while True : 
    success , img = cap.read()
    cv2.imshow('Video', img)
    if cv2.waitKey(1) & 0xFF == ord('q'): 
        break
    
```

## explanation 
    video capture, it takes the source of the video, it can be a file or a webcam , if its a web cap its the id of the web cam. 
    the returned object can be configured 
    .set(id , value)


## image manipulation 

    cvtColor()

## save image from web cam


```python
import cv2 

# Define the codec and create a VideoWriter object
fourcc = cv2.VideoWriter_fourcc(*'XVID')  # Choose the codec (XVID is a commonly used one)
out = cv2.VideoWriter('output.avi', fourcc, 20.0, (640, 480))  # Output file: output.avi

# 'output.avi': Name of the output video file.
# fourcc: FourCC code representing the video codec.
# 20.0: Frames per second (FPS) of the output video.
# (640, 480): Frame dimensions (width, height).

# capture the video
while cap.isOpened():
    ret, frame = cap.read()  # Capture a frame

    if not ret:
        break  # Break the loop if capturing fails

    out.write(frame)  # Write the frame to the output file

    cv2.imshow('Captured Video', frame)  # Display the captured frame

    if cv2.waitKey(1) & 0xFF == ord('q'):
        break  # Break the loop if 'q' key is pressed

# Release the resources
cap.release()
out.release()
cv2.destroyAllWindows()


# cap.read(): Captures a frame from the webcam.
# cv2.imshow(): Displays the captured frame in a window.
# cv2.waitKey(): Waits for a key press. If the pressed key is 'q', the loop is exited.



```


## capture properties 

     to get the cap props 
     cap.get(cv2.CAP_PROP_NAME)
     to set the prop
     cap.set(cv2.CAP_PROP_NAME , vlaue)



When working with webcam video using OpenCV, you can manipulate various capture properties to control the behavior of your webcam. Here's a list of commonly used capture properties that you can both get and set:

1. **Resolution:**
   - `cv2.CAP_PROP_FRAME_WIDTH`: Frame width.
   - `cv2.CAP_PROP_FRAME_HEIGHT`: Frame height.

2. **Frame Rate:**
   - `cv2.CAP_PROP_FPS`: Frames per second.

3. **Brightness and Contrast:**
   - `cv2.CAP_PROP_BRIGHTNESS`: Brightness of the image.
   - `cv2.CAP_PROP_CONTRAST`: Contrast of the image.

4. **Saturation and Hue:**
   - `cv2.CAP_PROP_SATURATION`: Saturation of the image.
   - `cv2.CAP_PROP_HUE`: Hue of the image.

5. **Exposure:**
   - `cv2.CAP_PROP_EXPOSURE`: Exposure time in milliseconds.
   - `cv2.CAP_PROP_AUTO_EXPOSURE`: Auto exposure mode (0 for manual, 1 for automatic).

6. **White Balance:**
   - `cv2.CAP_PROP_AUTO_WB`: Auto white balance (0 for manual, 1 for automatic).

7. **Zoom and Focus:**
   - `cv2.CAP_PROP_ZOOM`: Zoom value.
   - `cv2.CAP_PROP_FOCUS`: Focus value.

8. **Backlight Compensation:**
   - `cv2.CAP_PROP_AUTOFOCUS`: Autofocus mode (0 for manual, 1 for automatic).

9. **Focal Length:**
   - `cv2.CAP_PROP_FOCAL_LENGTH`: Focal length of the lens in mm.

10. **Frame Count and Position:**
    - `cv2.CAP_PROP_FRAME_COUNT`: Total number of frames.
    - `cv2.CAP_PROP_POS_FRAMES`: 0-based index of the frame to be decoded/captured next.

11. **FourCC and Codec:**
    - `cv2.CAP_PROP_FOURCC`: FourCC code representing the codec.
    - `cv2.CAP_PROP_FOURCC` values are used to specify the codec when creating a `VideoWriter` object.

## note
Please note that not all properties are supported by all webcam models, and some properties may be read-only. Use the `cap.get(prop_id)` method to check if a property is available and the `cap.set(prop_id, value)` method with caution, as unsupported changes may lead to errors.

Experiment with these properties to achieve the desired video capture settings and enhance your webcam application's capabilities.

## algorithem

## code
```python

# read the image 
# convert to hsv
# define the range of the color
# create a mask of the color from the image 
# bitwise and the mask with the image
# coutour detection 
# draw the contour on the image
# show the image

```

### in range method 

- this method takes an image and a range of color and return a mask of the color in the image 

```python
import cv2
import numpy as np

img = cv2.imread('sample/aero1.jpg')    
imgHSV = cv2.cvtColor(img , cv2.COLOR_BGR2HSV)

# define the range of the color
lower = np.array([0 , 0 , 0])
upper = np.array([255 , 255 , 255])

# create a mask of the color from the image
mask = cv2.inRange(imgHSV , lower , upper)

# bitwise and the mask with the image
imgResult = cv2.bitwise_and(img , img , mask = mask)

# show the image
cv2.imshow('img' , img)
cv2.imshow('imgHSV' , imgHSV)
cv2.imshow('mask' , mask)
cv2.imshow('imgResult' , imgResult)

cv2.waitKey(0)
```
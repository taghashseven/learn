### get perpertictive transform 

```python
import cv2 
import numpy as np
import random

img = cv2.imread('imgs/cards.jpg')
img2 = img

# make the last card 

lt = [270 , 40 ]
rt = [472 , 98 ]
lb = [201 , 313]
rb = [390 , 367]

cv2.line(img , lt , rt , (0 , 0 , 0) , 4    )
cv2.line(img , rt , rb , (0 , 0 , 0) , 4    )
cv2.line(img , rb , lb , (0 , 0 , 0) , 4    )
cv2.line(img , lb , lt , (0 , 0 , 0) , 4    )

width , height = 250 , 350

pts1 = np.float32([ lt , rt , lb , rb ])
pts2 = np.float32([[0,0],[width,0],[0,height],[width,height]])

matrix = cv2.getPerspectiveTransform(pts1,pts2)
imgOutput = cv2.warpPerspective(img2 , matrix , (width,height))


cv2.imshow('per' , imgOutput)

cv2.imshow('cards', img)
cv2.waitKey(0)

```


![](/Notes/imgs/img_output.png)
## image size 



```python

# to get the size of the image 
import cv2              #import open sv
img = cv2.imread('imgs/bee.jpeg')
print(img.shape) # (height , width , channels)

# image resizing 
cv2(img, (width , height))


```


## img croping 

```python
import cv2
img  = cv2.imread('imgs/bee.jpeg')

cv2.imshow('bee ', img)

#image crop 
# img([height , width])
cv2.imshow('croped image', img[200:400 , 100:200])   

```

## line , rect , circle , putText 

```python
cv2.line(img , (start point) , (end point) , (color) , (thickness))
    # start point and end point are tuples of (x,y)
    # color is a tuple of (b,g,r)
    # thickness is an int
cv2.rectangle(img , (start point) , (end point) , (color) , (thickness))
    # start point and end point are tuples of (x,y)
    # color is a tuple of (b,g,r)
    # thickness is an int
    # fill , if you want to fill the rectangle with color , use cv2.FILLED for thickness
cv2.circle(img , (center) , (radius) , (color) , (thickness))
    # center is a tuple of (x,y)
    # color is a tuple of (b,g,r)
    # thickness is an int

cv2.putText(img, 'texg' , (start point) , (font) , (font scale) , (color) , (thickness))
    # start point is a tuple of (x,y)
    # font is a cv2.FONT_*
    # font scale is a float
    # color is a tuple of (b,g,r)
    # thickness is an int

``` 


## operation you can do to an video 

```python 
    cv2.add()
    cv2.resize()
    cv2.addWeighted()
```


## bitwise operation 

- there are most usefull when used with mask

```python
    cv2.bitwise_add()
    cv2.bitwise_or()
    cv2.bitwise_xor()
    cv2.bitwise_not()
```

## image props 

img.shape
img.size
img.dtype
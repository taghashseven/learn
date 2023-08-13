## threshold and adaptive thresholding 

## simple thresholding 
    the way this function works is simple, it takes an grayscale image. 
    each pixel value is compared with the threshold value. 
    if the pixel value is greater than the threshold value, it assinges the max value to the pixel.
    else it set it to zero. 

    this create distinct black and white image. 
```python
    # function signature 
    """
    @param src: input array (single-channel, 8-bit or 32-bit floating point).
    @param thresh: threshold value.
    @param maxval: maximum value to use with the THRESH_BINARY and THRESH_BINARY_INV thresholding types.
    @param type: thresholding type (see the cv::ThresholdTypes).
    @param dst: output array of the same size and type as src.
    
    """

    cv2.threshold(src, thresh, maxval, type[, dst]) -> retval, dst

```

### types of thresholding 
    - cv2.THRESH_BINARY
    - cv2.THRESH_BINARY_INV
    - cv2.THRESH_TRUNC
    - cv2.THRESH_TOZERO
    - cv2.THRESH_TOZERO_INV

![](/Notes/imgs/thresholdtypes.png)


## adaptive trusholing 

    in the previous section we used a global value as the threshold value. 
    but this is not always a good idea. 
    in some cases we need to use different threshold values for different parts of the image. 
    in this case we use adaptive thresholding. 
    in this method the threshold value is calculated for smaller regions of the image. 
    this method is useful when the image has different lighting conditions in different areas. 


    the function signature is as follows: 

```python
    """
    @param src: Source 8-bit single-channel image.
    @param maxValue: Non-zero value assigned to the pixels for which the condition is satisfied. 
    @param adaptiveMethod: Adaptive thresholding algorithm  to use, 
                        ADAPTIVE_THRESH_MEAN_C | ADAPTIVE_THRESH_GAUSSIAN_C.
    @param thresholdType: Thresholding type that must be either THRESH_BINARY | THRESH_BINARY_INV | THRESH_TRUNC | THRESH_TOZERO | THRESH_TOZERO_INV.
    @param blockSize: Size of a pixel neighborhood that is used to calculate a threshold value for the pixel: 3, 5, 7, and so on.
    @param C: Constant subtracted from the mean or weighted mean (see the details below). Normally, it is positive but may be zero or negative as well.
    @param dst: Destination image of the same size and the same type as src.
    """
    cv2.adaptiveThreshold(src, maxValue, adaptiveMethod, thresholdType, blockSize, C[, dst]) -> dst
```

    - adaptiveMethod: 
        - cv2.ADAPTIVE_THRESH_MEAN_C: the threshold value is the mean of the neighbourhood area minus the constant C.
        - cv2.ADAPTIVE_THRESH_GAUSSIAN_C: the threshold value is a gaussian-weighted sum of the neighbourhood values minus the constant C.

    - blockSize: the size of the neighbourhood area. 

    - C: a constant that is subtracted from the mean or weighted mean calculated. 

    - maxValue: the maximum value that is used with the THRESH_BINARY and THRESH_BINARY_INV thresholding types. 

    - thresholdType: the thresholding type. 

    - dst: the output image. 

    - src: the input image. 

    - the function returns the thresholded image. 

    - the function can be used to detect edges in an image.

## Contours in Image Processing

Contours are the boundaries of objects in an image, and they play a crucial role in object detection, shape analysis, and image segmentation. OpenCV provides functions to find and manipulate contours in images.

### Function Signature and Docstring:

```python
contours, hierarchy = cv2.findContours(image, mode, method[, contours[, hierarchy[, offset]]])
```

**Parameters:**
- `image`: Input binary image (8-bit single-channel image). The image should be thresholded or preprocessed to highlight the objects.
- `mode`: Contour retrieval mode. It specifies the retrieval hierarchy and how contours are retrieved.
- `method`: Contour approximation method. Specifies how much the contour should be approximated to save memory.
- `contours`: Output list where each contour is stored as a numpy array.
- `hierarchy`: Optional output hierarchy of contours. Useful for hierarchical structures in the image.
- `offset`: Optional offset by which the contours are shifted.

**Returns:**
- `contours`: List of contours present in the image.
- `hierarchy`: Hierarchical representation of the contours (parent-child relationships).

### Example Code:

```python
import cv2
import numpy as np

# Load an image (make sure it's thresholded or preprocessed)
image = cv2.imread('object.jpg', cv2.IMREAD_GRAYSCALE)

# Find contours using the cv2.findContours function
contours, hierarchy = cv2.findContours(image, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

# Create a blank image to draw contours
contour_image = np.zeros_like(image)

# Draw contours on the blank image
cv2.drawContours(contour_image, contours, -1, (255), thickness=2)

# Display the original and contour images
cv2.imshow('Original Image', image)
cv2.imshow('Contour Image', contour_image)
cv2.waitKey(0)
cv2.destroyAllWindows()
```

**Explanation:**
1. Load an image (ensure it's preprocessed) and convert it to grayscale.
2. Use `cv2.findContours` to detect contours. The `RETR_EXTERNAL` mode retrieves only the external contours.
3. Create a blank image of the same size to draw contours on.
4. Use `cv2.drawContours` to draw the detected contours on the blank image.
5. Display the original image and the image with drawn contours.

### Analogy: Connecting Dots

Think of contours as connecting dots on a coloring book page. Imagine you have a page with different shapes outlined by dots. Finding contours is like tracing those dots with a pen to outline the shapes. The contours represent the boundaries of the shapes, and you can manipulate or analyze them as needed.

Contours are the building blocks of object analysis in images, helping you identify and work with the shapes present in the image.
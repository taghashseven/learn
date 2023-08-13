## methods

- join images horizontally: `np.hstack((img, img))`
- join images vertically: `np.vstack((img, img))`
- resize image: `cv2.resize(img, (width, height))`
- shape of image: `img.shape` (height, width, channels) 
- crop image: `img[y1:y2, x1:x2]`
- convert image to grayscale: `cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)`
- color range detection: `cv2.inRange(img, lower, upper)`
- bitwise and: `cv2.bitwise_and(img, img, mask=mask)`
- bitwise or: `cv2.bitwise_or(img, img, mask=mask)`
- bitwise xor: `cv2.bitwise_xor(img, img, mask=mask)`
- bitwise not: `cv2.bitwise_not(img, img, mask=mask)`
- find contours: `cv2.findContours(img, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_NONE)`
- draw contours: `cv2.drawContours(img, contours, -1, (0, 0, 0), 3)`
- find bounding box: `x, y, w, h = cv2.boundingRect(contour)`
- draw bounding box: `cv2.rectangle(img, (x, y), (x+w, y+h), (0, 0, 0), 3)`
- find center of contour: `M = cv2.moments(contour)` then `cx = int(M['m10']/M['m00'])` and `cy = int(M['m01']/M['m00'])`
- draw center of contour: `cv2.circle(img, (cx, cy), 5, (0, 0, 0), cv2.FILLED)`
- color range of yellow color: `lower = np.array([22, 93, 0])` and `upper = np.array([45, 255, 255])`
- blur image: `cv2.GaussianBlur(img, (7, 7), 1)`
- canny edge detection: `cv2.Canny(img, 50, 50)` // 50, 50 are the threshold values


# keyboard 
- `cv2.waitKey(0)` // wait for any key to be pressed
- `cv2.waitKey(1)` // wait for 1 millisecond for any key to be pressed

- 
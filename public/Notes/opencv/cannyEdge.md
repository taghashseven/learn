## canny 

    the method was named after the develop of the algorithem canny 

```python
    cv.canny(img , x , y )
```


## Image Pyramids: Gaussian and Laplacian

Image pyramids are a multi-scale representation of an image that helps in various computer vision tasks such as image blending, resizing, and feature extraction. Two common types of image pyramids are the Gaussian pyramid and the Laplacian pyramid.

### Gaussian Pyramid:

- **Concept:** The Gaussian pyramid is a sequence of images obtained by repeatedly applying Gaussian blur and subsampling to the original image. Each level in the pyramid represents a different scale of the image.

- **Purpose:** It's used for image downscaling, where the higher levels of the pyramid represent lower resolution versions of the image. It's also used for blending images seamlessly.

- **Generation:** To build the Gaussian pyramid:
  1. Apply Gaussian blur to the original image.
  2. Subsample the blurred image by skipping every other pixel.
  3. Repeat these steps on the downsampled image to create multiple levels.

### Laplacian Pyramid:

- **Concept:** The Laplacian pyramid is derived from the Gaussian pyramid and represents the details lost during the Gaussian blurring and subsampling process.

- **Purpose:** It's used for image reconstruction and enhancing low-resolution images.

- **Generation:** To build the Laplacian pyramid:
  1. Start with the highest level of the Gaussian pyramid.
  2. Upsample the image from the next lower level in the Gaussian pyramid.
  3. Subtract the upsampled image from the original image to obtain the "Laplacian" image.
  4. Repeat these steps on each level of the Gaussian pyramid.

### Analogy: Building Blocks

Think of building an image pyramid like constructing a tower from building blocks. Each level of the pyramid corresponds to a different height of the tower. The Gaussian pyramid represents the general shape of the tower at various heights, while the Laplacian pyramid represents the additional details and textures at each level.

- Imagine building a tower using blocks, where each block represents an image at a certain scale.
- The Gaussian pyramid is like stacking the blocks while blurring and reducing their size.
- The Laplacian pyramid is like adding the differences between each block and its smoothed counterpart, preserving the fine details.

### Applications:

- **Image Blending:** Gaussian and Laplacian pyramids are used to blend images seamlessly, creating effects like fading one image into another.
- **Image Resizing:** Gaussian pyramids help in resizing images while preserving their details.
- **Texture Synthesis:** They aid in generating textures by mixing and matching pyramid levels.
- **Image Compression:** They can be used for efficient representation and compression of images.

In summary, Gaussian and Laplacian pyramids provide a powerful framework for working with images at multiple scales, enabling tasks like image blending, resizing, and enhancing details.
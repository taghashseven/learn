

## icon 
```python
    root.iconbitmap('filelocation')
```

## Text 
 it the text area 

```python
Text(root, 
    width=30, 
    height=10, 
    bg='light grey', 
    fg='black', 
    font=('Helvetica', 16)
    ).pack()

```

## Entry
- it is the input field
    
    ```python
    Entry(root, 
        width=30, 
        bg='light grey', 
        fg='black', 
        font=('Helvetica', 16)
        ).pack()
    
    ```

## label 
- it is the text label 

    ```python
    Label(root, 
        text='Hello World', 
        bg='light grey', 
        fg='black', 
        font=('Helvetica', 16)
        ).pack()
    
    ```

## Button
- it is the button 

    ```python
    def click():
        print('button clicked')

    Button(root, 
        text='Hello World', 
        bg='light grey', 
        fg='black', 
        font=('Helvetica', 16), 
        command=click

        ).pack()
    
    ```

## Frame

## Checkbutton

## Radiobutton

## Scale

## Listbox

## Scrollbar

## image

```python
from tkinter import Tk  

from PIL import ImageTK , Image 

my_img = imageTk.PhotoImage(Image.open('image'))        # create the image
label = Label(image=my_img)                             # wrap the image
label.pack()                                            # pack the image 

```
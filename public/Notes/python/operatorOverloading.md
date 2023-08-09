# her i will have a class for number 

```python
class Number :

    digits = ['one' , 'two'  , 'three' , 'four' , 'five' , 'six']

    def __init__(self , num): 
        self.num = num 
        self._digit = digits.index(num)
    
    def __add__ (self, other):
        return self._digit + other._digit

    
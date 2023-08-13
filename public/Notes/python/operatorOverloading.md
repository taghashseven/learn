# Python Operator Overloading

Operator overloading in Python allows you to define custom behavior for standard operators when used with objects of your own classes. This is achieved by implementing special methods that correspond to these operators.

## Arithmetic Operators

### Addition (`+`)
```python
class ComplexNumber:
    def __init__(self, real, imag):
        self.real = real
        self.imag = imag

    def __add__(self, other):
        return ComplexNumber(self.real + other.real, self.imag + other.imag)

    def __sub__(self, other):
        return ComplexNumber(self.real - other.real, self.imag - other.imag)

    def __mul__(self, other):
        return ComplexNumber(self.real * other.real, self.imag * other.imag)

    def __truediv__(self, other):
        return ComplexNumber(self.real / other.real, self.imag / other.imag)
    
    def __eq__(self, other):
        return 
    
    def __ne__(self, other):
        # Implementation

    def __le__(self, other):
        # Implementation

    def __neg__(self):
        # Implementation

    def __pos__(self):
        # Implementation

    def __str__(self):
        return f"{self.title} by {self.author}"

    def __repr__(self):
        return 







p1 = Point(2, 3)
p2 = Point(2, 3)
result = p1 == p2  # Calls __eq__




num1 = ComplexNumber(3, 5)
num2 = ComplexNumber(1, 7)
result = num1 + num2  # Calls __add__

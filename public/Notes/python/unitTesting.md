## pytest 
- its a testing framework 

```python
# math.py

def add(x , y): 
    return x+y

def minus(x, y): 
    return x-y


def multiply(x, y):
    return x *y 


# test_math.py
import math

def test_add():
    assert math.add(1 , 1) == 2
    assert math.add(0 , 0) == 0
    assert math.add(0 , -2) == -2

def test_minus():
    assert math.minus(1 , 1) == 0
    assert math.minus(0 , 0) == 0
    assert math.minus(0 , -2) == 2


```

```bs
$ pytest test_math.py
```

## notes 
- in the spirit of testing it is better to write functions without side effects, as side effects are hard to test for 
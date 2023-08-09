# topics
- data types 
- scope 
- functions 
- class 
    - inheritance 
- function overloading 
- collections 
    - list 
    - dict
    - set
    - tuple 
- lips 
- packages 
    - sys 
    - pillow 
    - request
    - 



# data types 
- string 
- integer
- float
- boolean
- None 

## data types 

- string 
    - methods 
        - `len()`
        - `upper()`
        - `lower()`
        - `title()`
        - `strip()`
        - `rstrip()`
        - `lstrip()`
        - `replace()`
        - `split()`
        - `join()`
        - `find()`
        - `rfind()`
        - `count()`
        - input()    - get input from user
    
    - f strings
        - `f"string {variable}"`
        - `f"string {variable:.2f}"` - format float to 2 decimal places
        - `f"string {variable:10.2f}"` - format float to 2 decimal places and pad with 10 spaces
        - `f"string {variable:010.2f}"` - format float to 2 decimal places and pad with 10 zeros

- integer 
    - methods 
        - int()         - convert to integer
        - float()       - convert to float

- float
    - methods 
        - int()         - convert to integer
        - float()       - convert to float
- boolean
    - methods 
        - bool()        - convert to boolean


## functions 

def function_name(parameters):
    """docstring"""
    function body
    return value

- parameters can be positional or keyword 
- parameters can have default values

## conditional statements

```python

if epxression:
    statement
elif expression:
    statement
else:
    statement

## match 
match expression:
    case expression:
        statement
    case expression:
        statement
    case _:
        default statement

## logical and mathermatical operators 

- and
- or
- not
- ==
- !=
- >
- <
- >=
- <=

## pythonics expressions

True if condition else False 

## ranges 

if 2 < n > 6 :
    statement

```

## loops 

```python

while condition:
    statement
    # python does not have ++ or -- operators

# programming pattern 
while True:
    statement
    if condition:
        break

```

- the varaible in while is not scoped to the while loop
- for support break and continue 
for loop 

```python

for item in iterable:
    statement

# pythonic
for _ in range(10):
    statement


```

- range(start, stop, step)
- range(stop)
- range(start, stop)
- range(start, stop, step)

## lists


## scope 
- 

## lambda function 
- its a function with a single expression
- its an anonymous function

```python
lambda parameters: expression

```
- it return in implicit 
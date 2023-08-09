## type hints 
- python is dynamicaly typed
- for debugging and documentation we can use type hints 
- type hints are not enforced
- type hints are not checked at runtime
- you can check type hints using mypy 

## example code 

```bash 
pip install mypy 
```


```python

def square(n: int) -> int:
    return n * n

```

## mypy 

```bash
mypy file.py 
```

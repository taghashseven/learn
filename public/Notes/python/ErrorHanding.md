# error handing 

## 1. try...except...finally

```python
try:
    statement
except expression as identifier:
    statement
else:
    statement
finally:
    statement
```


## pass 
    
    ```python
    try:
        statement
    except expression as identifier:
        pass
    else:
        statement
    finally:
        statement
    ```

## raise 
    
        ```python
        try:
            statement
        except expression as identifier:
            raise
        else:
            statement
        finally:
            statement
        ```

    - its like to throw an error 
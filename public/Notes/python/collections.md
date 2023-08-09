# list 
 
 ```python
  students = ['john', 'jane', 'doe']
  print(students[0])
 ```

 - list are mutable
 - list are ordered
 - list is iterable 


 # dict 

    ```python
    student = {
        'name': 'john',
        'age': 20,
        'courses': ['math', 'science']
    }
    print(student['name'])
    print(student.get('name'))
    print(student.get('phone', 'not found'))
    ```

    - dict are mutable
    - dict are unordered
    - dict is iterable
    - when iterating over a dict, you iterate over the keys

## set 

    '.add()'        - add an item to a set
    '.remove()'     - remove an item from a set
    '.discard()'    - remove an item from a set if it exists
    '.pop()'        - remove an item from a set
    '.clear()'      - remove all items from a set
    '.union()'      - return a new set with all items from both sets
    '.intersection()' - return a new set with items that are in both sets
    '.difference()' - return a new set with items that are not in the other set
    
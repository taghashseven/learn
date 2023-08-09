## package 
- you can think of a package as a folder 
- pypi.org is the official third-party software repository for Python


## pip 
- is a package manager 
```bash
     pip install package_name 
```


## requests 


## json

```python 
json.dump()

```


## defining a module 

````python
def square(n): 
    return n * n 

def pow(x, y): 
    return x**y 

if __name__ == '__main__':
    square(2)
    pow(2, 10)

````


## __init__.py

- this file is used to mark a directory as a python package 


## csv 

```python
reader = csv.reader('file.csv')

for name , gender in reader : 
    print(f"name is {name} and gender is {gender}")


## using DictReader 
# names.csv
name , age 
jonah , 21 
panashe, 24 

reader = csv.DictReader('names.csv')
for row in reader : 
    print(f'{row['name']} is {row['age']} years old ')



## write to csv 
with open('names.csv' , 'a') as file : 
    name = input('what is your name ')
    age = input('what is your age ')
    writer = csv.writer(file)
    writer.writerow([name , age])

    #or DictWriter 

    writer = csv.DictWriter( file, fieldnames=['name' , 'age'])
    writer.writerow({'name' : name , 'age' , age })

```
# pillow 


# argparse
- its used for handing arguments 

```bs
pip install argparse 

```

```python 
import argparse 


parse = argparse.ArgumentParse()
parse.add_argument('-n')

args = parser.parse_args()


```
## how to open a file 

```python
file = open('file.txt', 'w')           #open in write mode

file.write('hello world')              #write to file

file.close()                            # close the file 

```

## best practise for working with files 

```python
with open('filename.txt', 'r+') as file :
    file.read()


```

## file functions 
- file.read()           # read the whole file
- file.readline()       # read a single line
- file.readlines()      # read all the lines and return a list of lines
- file.write()          # write to file
- file.close()          # close the file
- file.seek()           # move the cursor to a specific position in the file


file modes 
- r: read only
- w: write only
- a: append only
- r+: read and write
- w+: write and read
- a+: append and read


## example codes 

```python
with open('file.txt' , 'r') as file:
    for line in file: 
        print(line, end='')

## file is iterabela and return list of lines 

## names.csv
jonah, male 
panashe, male
clara, female
james, female


## readfile.py

students = []

with open('names.csv', 'r') as file:
    for line in file:
        name , gender = line.split(',')
        student = {'name' : name , 'gender' : gender}
        students.append(student)

#sort by name 
students.sort(key=lambda student: student['name'])
#or 
def get_name(students):
    return students['name']

students.sort(key=get_name)

# the key will be the value that is used to sort the list , 

```
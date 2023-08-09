## regular expresssions 


- re lib is used for regular expressions 

re.search( pattern , string , flag=0) # returns a match object if the pattern is found


```python
    # 
    [0-1]           - any digit between 0 and 1
    [a-z]           - any lowercase letter
    [A-Z]           - any uppercase letter
    .               - any character except newline
    \d              - any digit
    \D              - any non digit
    \w              - any word character    
    *               - 0 or more repertitions 
    +               - 1 or more repertations 
    ?               - 0 or 1 repertations
    {n}             - exactly n repertations
    {n,}            - n or more repertations
    {n,m}           - between n and m repertations
    &              - and
    $                - end of string
    ^                - start of string
    []               - set of characters 
    [^]              - not in set of characters
    (uz|zw)          - group
    (?.)             - non capture version 


    # flags 
    re.IGNORECASE
    re.MULTILINE
    re.DOTALL
    #example code for a email 


    email.search(r'.?@.?\.edu' )
    email.match(r'.?@.?\.edu' )
    email.findall(r'.?@.?\.edu' )
    email.sub(r'.?@.?\.edu' , 'email' ) # replace the match with email , 



    # caputre groups for name lastname 
    if name:= re.search(r'(\w+) (\w+)' , 'john doe'):
        print(name.group(0))            # the whole match
        print(name.group(1))            # the first group
        print(name.group(2))            # the second group
        print(name.groups())            # all groups
```
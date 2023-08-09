## design patterns 

- these are more like heuristics, not rules, so
- so there are no hard and fast rules
- and there are here to help you, not to restrict you
- most of them are just what developers have found to be useful over the years and it is not a coincidence that they are still being used today

### side effects 
- it more adviced to desgin you function not to have side effects. 
- side effects are when an function changes the state of the program or the state of the world.
- this can achieved by using pure functions 
- what are pure function? 
    - so is a return a statement a side effect?
    - no, because it does not change the state of the program or the state of the world
    - so based on this definition, a function that returns a value is a pure function

- the good side of using a pure function is that it is easy to test 
- that implese that it easy to test for side effects 


### single responsibility principle
- a class should have only one reason to change
- a class should have only one responsibility
- a class should have only one job
- a class should have only  purpose
- a class should have only one role
- a class should have only one task

### open closed principle
- a class should be open for extension but closed for modification
-

### unit testing 
- unit testing is the process of testing a unit of code in isolation 
- a unit of code is the smallest testable part of an application
- a unit of code can be a function, a method, a class, a module, etc
- unit testing is the process of testing a unit of code in isolation
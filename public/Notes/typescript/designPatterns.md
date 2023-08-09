## Union types 

- its a combination of checking the data type at compile and run time 

```ts
async function getData() : 
    ['error' , Error] | ['success' , string] 
    {
        const data = await fetch('https://jsonplaceholder.typicode.com/todos/1')

        if(data.ok){
            const json = await data.json()
            return ['success' , json]
        }else{
            return ['error' , new Error('failed to fetch data')]
        }

    }

// when consuming the function we need to check the type of the data
const [type , data] = await getData()

if(type == 'error'){
    console.log(data.message)  
}else{
    console.log(data)
}


```

## discriminated union types | tagged union types

- its a combination of checking the data type at compile and run time 

```ts
function getData() : ['error' , Error] | ['success' , {name : string , age : number}] {
    return ['error' , new Error('something went wrong')]
}

let result = getData();


if(result[0] == 'error'){
    console.log(result[1].message)
}else{
    console.log(result[1].name)
    console.log(result[1].age)
}
```

- and the tagg in the case above is the first element in the array 


## type alias 

```ts   
export type Person = {
    name : string , 
    age : number
}


///////////////// 
import {Person} from './types'

let person : Person = {
    name : 'ahmed' , 
    age : 20
}

```


## interface 
- interface are open

## class, interface , extends, implements 
- a class extends another class 
- a class implements an interface
- a interface extends another interface 
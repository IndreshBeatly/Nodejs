/* 
There are 2 ways of js syntax mainly in terms or importing and exporting 
1. Common JS syntax 
2. ES module syntax 

The ES module syntax imports and exports as below 

You can export things in 2 ways 
1. Named exports 
2. Default exports 
*/

//named exports 
export function sayHello(name){
    console.log(`Hello ${name}`);
}

export const greeting = "Hi"

//default exports 
export default function sayHello2(name){
    console.log(`Hello ${name}`);
}



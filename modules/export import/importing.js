/* 
There are differnt ways of importing like : 
1. importing named exports 
2. importing everything as an object 
3. importing default exports 
*/

//importing named exports 
import { sayHello,greeting } from "./exporting.js";
sayHello("Indresh")
console.log(greeting);

//importing everything as an object - here the object is greetingUser
import * as greetingUser from './exporting.js';
greetingUser.sayHello('John')
console.log(greetingUser.greeting);

//importing default exports 
import sayHello2 from "./exporting.js";
sayHello2("Mike")
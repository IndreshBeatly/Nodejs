/* 
In large codebases we cant write and manage all codes in a single file , there may be parts of code which are inter-operating and need each other for their functioning .

In this case we need a smart way to make the code into small packets so that where ever its required we can plug and play to use it , this is called modularising the code 

So dividing large codebases in smaller modules and exporting it so that it can be imported and used in whichever file required is called code modularity and these code pieces are called modules 

*/

//A code module called greeting is created and exported, this is imported & used in app.js
function greeting(name){
    console.log(`Hello ${name}`);
}
export default greeting;


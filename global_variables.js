/* 
Global variables are gloablly scoped so they can be accessed from anywhere in the code 
Commonly used global variable are : 
1. __dirname - this variable stores the current path of the working directory 
2. __filename - this variable stores the current path of the working file 
*/
console.log(__dirname);
console.log(__filename);


/* 
To make your own global variable we use : 
"global.var_name = value"
now var_name can be used anywhere in the global scope of that file
*/
global.user_name = "Indresh"
console.log(user_name);

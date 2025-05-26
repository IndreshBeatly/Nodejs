//reverse a string
function rstring(str){
    let reversed = '';
    for(let i=str.length-1;i>=0;i--){
        reversed += str[i];
    }
    return reversed;
}
console.log(rstring("hello"));

//max number in a array 
function maxnum(arr){
    let max = arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max) max = arr[i];
    }
    return max 
}
console.log(maxnum([10,20,32,43,25,90]))

//check for palindrome
function palindrome(str){
    rev = rstring(str);
    let result = str==rev?true:false;
    return result;
}
console.log(palindrome("str"))

//fizzbuzz(n) - print num from 1 to n , multiple of 3 "Fizz", multiple of 5 "Buzz", multiple of 3 and 5 "FizzBuzz"
function FizzBuzz(n){
    for(let i=1;i<=n;i++){
        if(i%3==0&&i%5==0){
            console.log("FizzBuzz");
        }
        else if(i%3==0){
            console.log("Fizz");
        }
        else if(i%5==0){
            console.log("Buzz");
        }
        else{
            console.log(i)
        }
    }
}
FizzBuzz(15)

// capitalise the first leeter of each word in the sentence 
function capitalise(str){
    let arr = [];
    arr = str.split(" ");
    for(let i=0;i<arr.length;i++){
        let word = arr[i];
        let cap = word[0].toUpperCase();
        arr[i] = cap+word.slice(1);
    }
    return arr.join(" ");
}
let a = capitalise("i am indresh")
console.log(a)

//count vowels
function countVowel(str){
    let x = str.split("");
    let count = 0;
    let vowels = ['a','e','i','o','u','A','E','I','O','U']
    for(let i=0;i<x.length;i++){
        for(let j=0;j<vowels.length;j++){
            if (x[i]==vowels[j]) count++
        }
    }
    return count;
}
console.log(countVowel("Indresh"));

//count vowels refined approach
function countVowel2(str){
    let count = 0;
    const vowels = new Set(['a','e','i','o','u']);
    for(let ch of str.toLowerCase()){
        if(vowels.has(ch)) count++;
    }
    return count;
}
console.log(countVowel2("Indresh"));

//flatten a nested array 
function nested(arr){
    let result = []
    for(let i=0;i<arr.length;i++){
        Array.isArray(arr[i]) ?  result = result.concat(nested(arr[i])) : result.push(arr[i]); 
    }

    return result;
}
console.log(nested([1,2,[3,4,[5]]]));

//debunce 

//USING ES6 FEATURES

//reverse a string
const rstring2 = str => str.split("").reverse().join("");
console.log(rstring2("hello"))

//palindrome
const palindrome2 = str => str===rstring2(str);
console.log(palindrome2("hello"))

// capitalise the 1st letter
const capitalise2 = str => str
                          .split(" ")
                          .map(w=> w.charAt(0).toUpperCase() + w.slice(1))
                          .join(" ")
console.log(capitalise2("i am indresh"))

//count vowels es6
const countVowel3 = str => [...str.toLowerCase()].filter(c=>'aeiou'.includes(c)).length;
console.log(countVowel3("panama island"));

//flatten a nested array 
const nested = arr => arr.reduce((flat,item)=> flat.concat(Array.isArray(item) ? nested(item): item),[]);
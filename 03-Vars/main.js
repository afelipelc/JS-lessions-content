"use strict"
/**
  * @autor: afelipelc
  * @date: 01/09/2018
*/

/* at this level, we going to begin use vars
  JS is flexible to work with var and types, por example:
  assig value to indefinied var   x=10   will work perfecly

  But for best practices, is recomended work in strict mode, with these we can prevent for example, 
  asign or use undefinied vars

  read: https://javascript.info/strict-mode  
*/

// variable declaration sintax:   let varName;
// use "let" keyword for vars declaration, read: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/let
// example:   
// let name;
// let surname, age, weight;

// in this level, pleas read https://javascript.info/variables

let name, message;

// variable asignation
// varName = value;

name = "Felipe";
message = "Welcome to JS vars!";

console.log("name: ", name);
console.log(message);

// use + operator for concat or stringVar.concat(string1, string2, ...)
alert("Hello " + name + ", " + message);
console.log( name.concat(", ", message));

// var instead of let, javascript.info says:
/*
  In older scripts you may also find another keyword: var instead of let:
  var message = 'Hello';The var keyword is almost the same as let. It also declares a variable, but in a slightly different, “old-school” fashion.


  Please students, use let instead of var,  var is not good! :)
*/

// variable naming,  javascript.info says:
 /*
  There are two limitations for a variable name in JavaScript:
    1. The name must contain only letters, digits, symbols $ and _.
    2. The first character must not be a digit.

  When the name contains multiple words, camelCase is commonly used. 
  That is: words go one after another, each word starts with a capital letter: myVeryLongName.

  Valid names, for instance:
  let userName;
  let test123;

  Case matters
  Variables named apple and AppLE – are two different variables.
 */

 // reserved names
 /* There is a list of reserved words, which cannot be used as variable names, because they are used by the language itself.

  For example, words let, class, return, function are reserved.
*/

 
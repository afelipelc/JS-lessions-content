"use strict"
/**
  * @autor: afelipelc
  * @date: 01/09/2018
*/

/*
  javascript.info says:
  A variable in JavaScript can contain any data. A variable can at one moment be a 
  string and later receive a numeric value:
  
  let message = "hello";
  message = 123456;

  Programming languages that allow such things are called “dynamically typed”.
*/

// Types

// A) number:
//serves both for integer and floating point numbers.
// Infinity type “special numeric values” is part of number type
let n = 123;
n = 12.345;

// *********************************

// B) string:
//must be quoted with "" (Double quotes) or  '' (Single quotes)  or  `` (Backticks)
let str = "Hello";
let str2 = 'Single quotes are ok too';

// use of Backticks
// backticks is powerfull for create strings with embed Variables

// Please, please, please learn to use this
let phrase = `can embed ${str}`;

// other example of usin backticks
let name = "Felipe";
let course = "JS Course";

alert(`Hello, ${name} is working in ${course}`);

// *********************************

// C) boolean: javascript.info says:
// The boolean type has only two values: true and false.

//For instance:
let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked

// Boolean values also come as a result of comparisons:

let isGreater = 4 > 1;
alert( isGreater ); // true (the comparison result is "yes")


// *********************************

// D) null:javascript.info says:
// The special null value does not belong to any type of those described above.
let age = null; //example of null value asignation

// *********************************

// E) undefinied:  javascript.info says:
// The special value undefined stands apart. It makes a type of its own, just like null.
// The meaning of undefined is “value is not assigned”.
// If a variable is declared, but not assigned, then its value is exactly undefined:
// example:
let x;
alert(x); // shows "undefined"

// *********************************

// F) Objects and Symbols:  javascript.info says:
/* The object type is special.
  All other types are called “primitive”, because their values can contain only a single thing.

  In contrast, objects are used to store collections of data and more complex entities.
*/

// *********************************

// G) typeof operator:  javascript.info says:

/*
  The typeof operator returns the type of the argument.
  It’s useful when we want to process values of different types differently, or 
  just want to make a quick check.

  It supports two forms of syntax:

    1. As an operator: typeof x.
    2. Function style: typeof(x).

  The call to typeof x returns a string with the type name:
*/

typeof undefined // "undefined"
typeof 0 // "number"
typeof true // "boolean"
typeof "foo" // "string"
typeof Symbol("id") // "symbol"
typeof Math // "object"
typeof null // "object"

typeof alert // "function"

// checking typeof (validation example)
if (typeof 25 === 'number') {
  alert('25 is number');
}

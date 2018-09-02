"use strict"
/**
  * @autor: afelipelc
  * @date: 01/09/2018
*/

// alert(message);  // show a message dialog
// For example
alert("Hello, this is an alert message.");

//prompt: javascript.info says:
/* It shows a modal window with a text message, an input field for the visitor and buttons OK/CANCEL.
   prompt function accepts two argumens
   result = prompt(title, [default]);

   title: The text to show to the visitor.
   default: An optional second parameter, the initial value for the input field.
*/

//Example
let name = prompt('What is your name?');
let age = prompt('How old are you?', 100);
alert(`Your name is ${name} and you are ${age} years old.`);


//confirm: javascript.info says:
/*
  Function confirm shows a modal window with a question and two buttons: OK and CANCEL.
  The result is true if OK is pressed and false otherwise.

  Syntax:
  result = confirm(question);
*/
//Example
let isBoss = confirm('Are you the boss?');
alert(isBoss); // true if OK is pressed
if (isBoss) {
  alert('Welcome Boss');
}



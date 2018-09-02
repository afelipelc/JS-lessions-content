"use strict"
/**
  * @autor: afelipelc
  * @date: 01/09/2018
*/

/* After you know conditional operatorators and conditional control statement,
  is very important learn to use Ternary operator  ?

  Sometimes we need to assign a variable depending on a condition.
  for example, create vars age and accessAllowed, if age is greater than 18, set accessAllowed in true

  very likely you solve it with an if-else statement
  like example:
*/
let accessAllowed;
let age = prompt('How old are you?');
if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}

alert(accessAllowed);

// The so-called “ternary” or “question mark” operator lets us do that shorter and simpler.
// syntax is
// let result = condition ? value1 : value2
// previous if-else is equivalent to:
accessAllowed = age > 18 ? true : false;





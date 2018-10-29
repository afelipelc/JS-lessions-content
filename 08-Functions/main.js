"use strict"
/**
  * @autor: afelipelc
  * @date: 11/09/2018
*/

// greeting function definition
function greeting_() {
  alert("Hello world");
}

// execute or call greeting() function
//greeting_();


// param function
function sum(num1, num2) {
  return num1 + num2;
}

alert(sum(22, 13)); // 35

// arrow function

const greeting = () => {
  alert("Hello world");
}

// call greeting() function
greeting();

const materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

console.log(
  materials.map(function(material){
  return material.length;
  })
);

console.log(
  materials.map((material) => material.length)
);


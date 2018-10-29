"use strict"

/**
 * autor: afelipelc
 * date: 22/09/2018 for IT 7th course
 */

// unidimentional array
const frutas = ['Manzana', 'Banana'];
console.log(frutas);
console.log('\n\n\n');

//bidimentional array
const sabores = [
  ['Uva', 'Mango', 'Piña'], //primer array sabores [0]
  ['Sandía', 'Pepino', 'Melón'], //primer array sabores [0]
];

console.log(sabores);

console.log('\n\n\n');
// print first row (row 0) from sabores
console.log(sabores[0]);

console.log('\n\n\n');

// read item from row,column position 
console.log(sabores[1][1]); //Pepino
console.log('\n\n\n');


//print all items by row/column
for (let r =0; r< sabores.length; r++){
  let rowItems = '';
  for (let c =0; c< sabores[r].length; c++){
    rowItems += `${sabores[r][c]} `;
  }
  console.log(`${rowItems}\n`);
}

console.log('\n\n\n');

// print using forEach function of array object
sabores.forEach((row) => {
  let rowItems = '';
  row.forEach((item) => {
    rowItems += `${item} `;
  });
  console.log(`${rowItems}\n`);
});

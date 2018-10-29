"use strict"

function fibonacci1(serie) {
  
  let f1 = 0;
  let f2 = 1;
  let fn = 0;

  for (let i = 0; i < serie; i++){
    console.log(fn);
    fn = f1 + f2;
    f1 = f2;
    f2 = fn;
  }
}

function fibonacci(serie) {
  if (serie > 1){
    return fibonacci(serie-1) + fibonacci(serie-2);
  }
  else if (serie === 1) return 1;
  else if (serie <= 0) return 0;
  else { 
    console.log('missing value');
    return 0;
  }
}

function auxFibonacci(items, result = '') {
  if ( items === 1) return result;
  const item = fibonacci(items);
  return result.concat(`${auxFibonacci(items - 1, result)} ${item}`);
}

fibonacci1(23);
console.log("---------------");

console.log(fibonacci(4));
console.log("---------------");
console.log(auxFibonacci(23));

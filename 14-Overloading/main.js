"use strict"

/**
 * autor: afelipelc
 * date: 22/09/2018 for IT 7th course
 */

class Calculator {
  sum(val1, val2){
    return val1 + val2;
  }

  // this new sum function override previous sum function
  sum(val1, val2, val3 = 0){ // val3 with default value
  return val1 + val2 + val3;
}
}

const myCalculator = new Calculator();
console.log(myCalculator.sum(8, 5)); //does not exists function with 2 params
console.log(myCalculator.sum(8, 5, 25));

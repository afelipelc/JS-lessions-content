"use strict"
/**
  * @autor: afelipelc
  * @date: 01/09/2018
*/

/*
  To declare a constant (unchanging) variable, one can use const instead of let:
  example:
*/
const myBirthday = '18.04.1982';

myBirthday = '01.01.2001'; // error, can't reassign the constant!

// for reference, please read: https://javascript.info/variables#constants

//Uppercase constants, javascript.info says:
/*
  There is a widespread practice to use constants as aliases for difficult-to-remember values 
  that are known prior to execution.

  Like this:
  const COLOR_RED = "#F00";
  const COLOR_GREEN = "#0F0";
  const COLOR_BLUE = "#00F";
  const COLOR_ORANGE = "#FF7F00";

  // ...when we need to pick a color
  let color = COLOR_ORANGE;
  alert(color); // #FF7F00
*/

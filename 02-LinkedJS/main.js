/**
  * @autor: afelipelc
  * @date: 01/09/2018
*/

// a js file no need <script> tag
// for this example, i've pasted al script content of 01-DOM embed script, result is the same
console.log("Linked JS runing")

// DOM manipulation es posible by accessing to html elements by id assigned
// in JS we can access to elements througt document object and calling
// getElementById() function, by example: if we have a div item with id "result",
// then access to it like: document.getElementById("result")
// getElementById() result will be stored in a var, or you can manipulate element directly

var element = document.getElementById("content"); // access to element with id: content
// log element object
console.log("element:", element); // output is: null
/*
  output is null because DOM hasn't be loaded completly,
  then, we need a function that wait DOM load and then manipulate DOM

  save this basic function structure
*/
(function(window, document, undefined){
  window.onload = init;
  function init(){
    // document has been loaded and we can access to DOM nodes
    var element = document.getElementById("content");
    console.log("element:", element); // output: console.log(element);
    // now element var is an object and you can manipulate attribs or calling methods
    // ask Mr. Google for: <div id="content">Here will content appear</div>
    // set content to div element object
    //var element = document.getElementById("content"); // access to element with id: content
    element.innerHTML = "Element content from JS, result of set innerHTML attribute of this html div element";
  }
})(window, document, undefined);

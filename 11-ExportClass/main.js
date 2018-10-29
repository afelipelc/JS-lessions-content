"use strict"

//import classes
import Movie from './src/Movie.js';
import Square from './src/Square.js';


const myMovie = new Movie(1, 'Daredevil');
console.log(myMovie);
console.log(myMovie.play());

const mySquare = new Square(19);
console.log(mySquare);
console.log(mySquare.name);
console.log(mySquare.getArea());

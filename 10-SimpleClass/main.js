"use strict"

class Movie {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
  
  play() {
    return `playing movie: ${this.name}`;
  }
}

const myMovie = new Movie(1, 'Daredevil');
console.log(myMovie);
console.log(myMovie.play());


class Square {
  constructor(length){
    this.length = length;
    this.name = 'Square';
  }

  getArea() {
    return this.length * this.length;
  }
}

const mySquare = new Square(19);
console.log(mySquare);
console.log(mySquare.name);
console.log(mySquare.getArea());

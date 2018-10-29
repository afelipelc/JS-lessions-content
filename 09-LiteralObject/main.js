"use strict"

//literal object
const Movie = {
  id: 1,
  name: 'Daredevil',
  play() {
    return `playing movie: ${this.name}`;
  },
}

console.log(Movie);
console.log(Movie.play());

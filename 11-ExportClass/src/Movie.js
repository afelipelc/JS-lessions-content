class Movie {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
  
  play() {
    return `playing movie: ${this.name}`;
  }
}

export default Movie;

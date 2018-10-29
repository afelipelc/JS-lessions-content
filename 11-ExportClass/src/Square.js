class Square {
  constructor(length){
    this.length = length;
    this.name = 'Square';
  }

  getArea() {
    return this.length * this.length;
  }
}

export default Square;

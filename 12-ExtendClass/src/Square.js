import Polygon from './Polygon.js';

class Square extends Polygon {
  constructor(length){
    super(length, length); //call super constructor with params, like Polygon(height, width)
    this.name = 'Square';
  }

  getArea() {
    return this.height * this.width;
  }
}

export default Square;

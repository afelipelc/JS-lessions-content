// source: https://addyosmani.com/resources/essentialjsdesignpatterns/book/#factorypatternjavascript

class Vehicle {
  constructor(options){
    // some defaults
    this.doors = options.doors || 4;
    this.state = options.state || "brand new";
    this.color = options.color || "silver";
  }
}

class Car extends Vehicle {
  constructor(options){
    super(options);
    this.type = "Car";
  }
}
 
// A constructor for defining new trucks
class Truck extends Vehicle {
  constructor(options){
    super(options);
    this.type = "Truck";
  }
}
 
 
// Define a vehicle factory
class VehicleFactory {
  constructor() {
    this.vehicleClass = Car; // Our default vehicleClass is Car
  }

  createVehicle(options) {
    switch(options.vehicleType){
      case "car":
        this.vehicleClass = Car;
        break;
      case "truck":
        this.vehicleClass = Truck;
        break;
    }
    return new this.vehicleClass( options ); // return Vehicle from factory
  }
}


// Create an instance of our factory that makes cars
const carFactory = new VehicleFactory();
const car = carFactory.createVehicle( {
            vehicleType: "car",
            color: "yellow",
            doors: 6 } );
 
const truck = carFactory.createVehicle( {
            vehicleType: "truck",
            state: 'My new truck',
            color: "Black",
            doors: 4 } );
// Test to confirm our car was created using the vehicleClass Car
// Outputs: true
console.log("My car is a Car?: ", car instanceof Car );
 
// Outputs: Car object of color "yellow", doors: 6 in a "brand new" state
console.log( car );

// test truck
console.log("My truck is a Truck?: ", truck instanceof Truck );

console.log( truck );

// test bad vehicle type
console.log("My car is a Truck?: ", car instanceof Truck );


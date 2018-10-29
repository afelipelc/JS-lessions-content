class Vehicle {
  constructor(options){
    this.doors = options.doors;
    this.color = options.color;
    this.state = options.state;
  }
}

class Car extends Vehicle{
  constructor(options){
    super(options);
    this.type = "Car";
  }
}

class Truck extends Vehicle{
  constructor(options){
    super(options);
    this.type = "Truck";
  }
}

class VehicleFactory{
  constructor(){
    this.vehicleType = Car; 
  }

  createVehicle(options){
    //identificar que tipo de
    //vehículo se va a crear
    switch (options.type) {
      case "Car":
        this.vehicleType = Car;
        break;
      case "Truck":
        this.vehicleType = Truck;
        break;
    }

    // retornar un objeto del tipo
    // solicitado
    return new this.vehicleType(options);
  }
}

// clase Client
class Client{
  constructor(){
    this.factory = new VehicleFactory();
  }

  test() {
    // crear un Car
    const myCar = this.factory.createVehicle({
                    type: 'Car',
                    color: 'red',
                    doors: 4,
                    state: 'My new Car',
                  });

    // mostrar mi auto
    console.log(myCar);

    // crear un Truck
    const myTruck = this.factory.createVehicle({
                      type: 'Truck',
                      doors: 2,
                      color: 'black',
                      state: 'My new Cheyenne',
                    });
    // ¿y la Cheyenne apá?
    console.log(myTruck); // aquí ta!
    
    // comprobar instancias de clase
    console.log('My car is a Car?: ', myCar instanceof Car);
    console.log('My truck is a Truck?: ', myTruck instanceof Truck);

    // verificar si myCar es un Truck
    if (myCar instanceof Truck){
      console.log('Oooohhhh, my car is a Truck');
    } else {
      console.log('Not, my car is not a Truck!');
    }
  }
}

//ejecutar el programa
const miCliente = new Client();
miCliente.test();

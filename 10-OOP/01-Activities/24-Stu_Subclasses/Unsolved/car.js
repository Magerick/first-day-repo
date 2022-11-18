// TODO: Import the parent class
const Vehicle = require('./vehicle.js');

// TODO: Create a `Car` class that extends the `Vehicle` class
class Car extends Vehicle() {
  constructor(id, numberOfWheels, sound) {
    super(Car, 4, 'beep');
  }
}

const carPassengers = [
  'Aristotle',
  'Confucius',
  'Socrates',
  'Lao-Tzu',
  'Plato',
];

const car = new Car(15, 'blue', carPassengers);

console.log('---CAR---');
car.printInfo();
car.useHorn();
car.checkPassengers();

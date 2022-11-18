// TODO: Import the parent class
const Vehicle = require('./vehicle.js');

// TODO: Create a `Boat` class that extends the `Vehicle` class
class Boat extends Vehicle() {
  constructor(id, numberOfWheels, sound) {
    super(Boat, 0, 'bwom');
  }
}

const boatPassengers = [
  'Blackbeard',
  'Mary Read',
  'Henry Morgan',
  'Madame Cheng',
];

const boat = new Boat(16, 'sailboat', boatPassengers);

console.log('---BOAT---');
boat.printInfo();
boat.useHorn();
boat.crewSoundOff();

class Car {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }   
    brake(){
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }
    accelerate(){
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }
    get speedUS(){
        return this.speed / 1.6;
    }
    set speedUS(speed){
        this.speed = speed * 1.6;
    }
    
}

class ElectricCar extends Car{
    #charge = 0;
    chageBattery(chargeTo){
        this.#charge = chargeTo;
    }
    accelerate(){
        this.speed += 20;
        this.#charge--;
        console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}%`);
    }
}

const tesla = new ElectricCar('Tesla', 120, 23);
tesla.chageBattery(90);
// Why I still can access to #charge property?


// 1. Re-create Challenge #3, but this time using ES6 classes: create an 'EVCl' 
// child class of the 'CarCl' class 
// 2. Make the 'charge' property private 
// 3. Implement the ability to chain the 'accelerate' and 'chargeBattery' 
// methods of this class, and also update the 'brake' method in the 'CarCl' 
// class. Then experiment with chaining!


class Vehicle {
    constructor (name,price){
        this.name = name;
        this.price = price;
    }
    move(){
        console.log("ami cholachol kori")
    }
}

class Bus extends Vehicle {
    constructor(name,price,seat)
    {
        super(name,price);
        this.seat = seat;
    }
    route(){
        console.log("dhaka to chittagong")
    }
}
const greenLine = new Bus("GreenLine",1234,"70");
console.log(greenLine);


console.log(Bus);
console.log(Vehicle);
// console.log(Bus);


// const person = "zim";
// const newPerson = person;
//  newPerson = "yeasir";
//  console.log(newPerson);
 


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
class Teacher {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    lecture(topic) {
        console.log(`Sir is teaching ${topic}`);
    }
}

const sir = new Teacher('Tapan', 'Dhaka')

console.log(sir);
sir.lecture("Physics");


// extends class 

class vehicle {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class bus extends vehicle {
    constructor(name, price, seat) {
        super(name, price);//constructor of vehicle class 
        this.seat = seat;
    }
}
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

class pet{
    constructor(name)
    {
        this.name=name;
    }
    showinfo()
    {
        console.log(`this is my pet name is ${this.name} `);
    }
}

const cat=new pet('abc');
cat.showinfo();


class grandFather
{
    constructor(name,age)
    {
        this.gname=name;
        this.gage=age;
    }
    
}

class Father extends grandFather
{
    constructor(fname,fage,gname,gage)
    {
        super(gname,gage);
        this.fname=fname;
        this.fage=fage;
    }
    
}

class Son extends Father
{
    constructor(name,age,fname,fage,gname,gage)
    {
        super(fname,fage,gname,gage);
        this.name=name;
        this.age=age;
    }
    MyInfo() {
        console.log(`My name is ${this.name} and my age is ${this.age}`);
    }

    FatherInfo() {
        console.log(`My father name is ${this.fname} and his age is ${this.fage}`);
    }

    grandFatherInfo() {
        console.log(`My grandfather name is ${this.gname} and his age is ${this.gage}`);
    }

    showAllInfo() {
        this.MyInfo();
        this.FatherInfo();
        this.grandFatherInfo();
    }
}

const Information=new Son('Rahomotul Islam',23,'Rafiqul Islam',58,'Ishaq Ali Khan',92);
Information.showAllInfo();
class Animal {
    constructor (name){
        this.name = name;
    }
    speak(){
        console.log(`${this.name} made some noise`);
    }
}
// HERANCA

class Dog extends Animal{
    constructor(name) {
        super(name);
    }

    speak(){
        console.log(`${this.name} barkerd!`);
    }
}

const gatin = new Animal ("Mya");
const dog = new Dog ("Megan");

gatin.speak();
dog.speak();
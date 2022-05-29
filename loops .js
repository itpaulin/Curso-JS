const cars = ["Paulo", "Ricardo", "Malta","Leal"];


for (let lala of cars) { // percorre array parecido com o FOREACH do JAVA
 console.log(cars);
}

cars.forEach(function(car, index){ //conta posicao
    console.log(index);
  console.log(car);
 });

const person = {
    name: "Jane",
    age: 21,
};

for (property in person) { // FOR IN para objetos
    console.log(person[property]);
    };


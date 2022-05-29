const person = { // PARECE STRUCT tranquilo.
    firstName: "Paulo",
    lastName: "Ricardo",
    age: "19",
    hobbies: ["sexo", "estudos","programacao"],
    estado: {
        cidade: "Nova friburgo",
        bairro: "campo do coelho"
    }

};

// const firstName = person.firstName;
// const lastName = person.lastName;
// const age = person.age;
// const hobbies = person.hobbies[2];

const {firstName: primeiroNome,lastName,age,hobbies,estado} = person // mesma coisa q emcima
                // renomeando


console.log(primeiroNome);
console.log(lastName);

console.log(age);
console.log(hobbies);


console.log(estado)
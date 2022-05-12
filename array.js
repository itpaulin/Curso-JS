const names = ["Felipe", "João", "Julia", 10, false];

const joao = names [1]; // PRIMEIRO SEMPRE 'EH ZERO

names.push("haha");
names.unshift("Robeertin");

names.pop();
names.pop();
names.pop();
console.log(names);


const indexOfJoao = names.indexOf("João");

const sortedNames = names.sort();

console.log(names);

console.log(sortedNames);

const namesIsArray = Array.isArray(names);

console.log(namesIsArray)

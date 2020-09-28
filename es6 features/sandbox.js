// rest parameter
const double = (...nums) =>{
    return nums.map(num=> num*2);
}

const result = double(10,20,30,40,50,60,70);
console.log(result);

// spread syntax (arrays)
const people = ['alpha','beta','charlie'];
const members = ['deer', 'elephant', ...people];
console.log(...people);
console.log(members);

// spread system (objects) Note: Assigning person to personClone will not create a new object, instead both variable points to the same pointer as both are reference types. 
const person = {name: 'Mani', age: 28, job: 'Associate consultant'};
const personClone = {...person};

console.log(personClone);

//sets
const namesArray = ['alpha','beta','charlie','alpha','beta','charlie'];
console.log([...new Set(namesArray)]);

//symbol
const symbolOne = Symbol(); //primitive type
const symbolTwo = Symbol();

console.log(symbolOne === symbolTwo); // no 2 symbols can ever be the same. 
const calcArea = (radius) =>{
    return 3.14 * radius;
}

const area = calcArea(34);
console.log(area);

//call back function
const myFunc = (callbackFunc) =>{
    let value = 50;
    callbackFunc(value);
}

myFunc((value)=>{
    console.log(value);
});

const people = ['Mani','Pravee','Siva','Nithya','Malar'];
const people1 = Object.assign({}, people);
people1[0] = "ManiCibi";
console.log("people" , people);
console.log("people1" , people1);

const logPerson = (person, index) =>{
    console.log(`${index} - hello ${person}`);
}

people.forEach(logPerson);

const ul = document.querySelector('.people');

let html = ``;
people.forEach(function(person){
   html += `<li style="color:purple">${person}</li>`
});
console.log(html);
ul.innerHTML = html;
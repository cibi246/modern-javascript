console.log("Hello");
const scores = ['23','09','20','17','28','40'];

//filter method
const filteredScores = scores.filter((score)=>{
    return score <= 20;
});
console.log(filteredScores);

const users = [
    {name: 'Mani', authorizedUser: true},
    {name: 'Martin', authorizedUser: false},
    {name: 'Oliviya', authorizedUser: true},
    {name: 'Priya', authorizedUser: false}
];

const authorizedUsers = users.filter(user => user.authorizedUser);
console.log(authorizedUsers);

//Map method
const prices = [4000, 12000, 20000, 12500,9000, 8000];
const discountedPrices = prices.map(price=>price*0.25);
console.log(discountedPrices);

const products = [
    {name: 'iPhone', price:30000},
    {name: 'Mac', price:60000},
    {name: 'iPad', price:45000},
    {name: 'Pencil', price:15000},
];

const limitedProductSale = products.map((product) =>{
    if(product.price > 25000){
        return {name: product.name, price: product.price * 0.25};
    }else{
        return product;
    }
});
console.log(limitedProductSale);
//Reduce method
const iplScores = [10,30,50,70,90,20,40];
const result = iplScores.reduce((acc, curr)=>{
    if(curr > 50){
        acc++;
    }
    return acc;
},0);
console.log(result);

const manOftheMatch = [
    {name: 'Faf', score: 76},
    {name: 'Samson', score: 87},
    {name: 'Faf', score: 98},
    {name: 'Dhoni', score: 109},
    {name: 'ABD', score: 65},
    {name: 'Dhoni', score: 54},
    {name: 'Faf', score: 43},
];
const totalScoresByFaf = manOftheMatch.reduce((acc,curr)=>{
    if(curr.name === 'Faf'){
        acc = acc+curr.score;
    }
    return acc;
},0);
console.log(totalScoresByFaf);

//Find method
const newScores = [85,82,40,19,42,28,12,13];
const firstLowestScore = newScores.find((score)=>{
    return score < 25;
});
console.log(firstLowestScore);

//Sort method
const names = ['Kemp', 'Askhay','Rohit','Bumrah','Tiwary','Mavi','Cummins'];
names.sort();
console.log(names);

const numbers = [106, 2, 121, 3, 51, 25];
// numbers.sort();
numbers.sort((a,b)=>a-b);
console.log(numbers);

// manOftheMatch.sort((a,b)=>{
//     if(a.score > b.score){
//         return 1;
//     }else if(a.score < b.score){
//         return -1;
//     }else{
//         return 0;
//     }
// });

manOftheMatch.sort((a,b)=>a.score-b.score);
console.log(manOftheMatch);

//Chaining Array method
const shoppingCart = [
    {name: 'Pepsi', price: 30},
    {name: 'car', price: 60},
    {name: 'wire', price: 90},
    {name: 'Pan', price: 120},
    {name: 'phone', price: 150},
];

// const filtered = shoppingCart.filter(product => product.price > 20);

// const promos = filtered.map(product =>{
//     return `the ${product.name} is ${product.price / 2} pounds`;
// });

const promos = shoppingCart.
    filter(product => product.price > 20)
    .map(product => `the ${product.name} is ${product.price / 2} pounds`);

console.log(promos);
let randomNumbers = [];
let numberOfElementsinRandomNumbers = 5;
let min = 1;
let max = 100;


//alert("Memorizza i numeri: " + );

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

for (let i = 0; i < numberOfElementsinRandomNumbers; i++){
    let n = getRandomIntInclusive(min, max);
    randomNumbers.push(n);
}

console.log(randomNumbers);

alert("memorizza i 5 numeri: "+ randomNumbers);
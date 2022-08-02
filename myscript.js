let randomNumbers = [];
let numberOfElementsinRandomNumbers = 5;
let min = 1;
let max = 100;
let userNumbers = [];




for (let i = 0; i < numberOfElementsinRandomNumbers; i++){
    let n = getRandomIntInclusive(min, max);
    randomNumbers.push(n);
}

console.log(randomNumbers);

alert("memorize the following 5 numbers: "+ randomNumbers);

setTimeout(askUserNumbers(), 3000);


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function askUserNumbers(){
    number1 = prompt("enter the first number:");
    number1 = parseInt(number1);
    number2 = prompt("enter the second number:");
    number2 = parseInt(number2);
    number3 = prompt("enter the third number:");
    number3 = parseInt(number3);
    number4 =prompt("enter the fourth number:");
    number4 = parseInt(number4);
    number5 =prompt("enter the fifth number:");
    number5 = parseInt(number5);
    userNumbers.push(number1, number2, number3, number4, number5)
    console.log(userNumbers);
    return userNumbers;
}



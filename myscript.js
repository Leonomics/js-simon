let randomNumbers = [];
let numberOfElementsinRandomNumbers = 5;
let min = 1;
let max = 100;
let userNumbers = [];
let correctNumbers = 0;
let guessedNumbers = [];




generateRandomArray();

alert("memorize the following 5 numbers: "+ randomNumbers);
console.log("your numbers: "+userNumbers);

setTimeout(function(){
    number1 = prompt("enter the first number:");
    number1 = parseInt(number1);
    number2 = prompt("enter the second number:");
    number2 = parseInt(number2);
    number3 = prompt("enter the third number:");
    number3 = parseInt(number3);
    number4 = prompt("enter the fourth number:");
    number4 = parseInt(number4);
    number5 = prompt("enter the fifth number:");
    number5 = parseInt(number5);
    userNumbers.push(number1, number2, number3, number4, number5)
    console.log(userNumbers);
    
    compareAnswers(randomNumbers, userNumbers);

},30000);






//genera array random per il computer
function generateRandomArray(){
    for (let i = 0; i < numberOfElementsinRandomNumbers; i++){
        let n = getRandomIntInclusive(min, max);
        randomNumbers.push(n);
    }
}

//genera un numero random (serve per la funzione che crea l'array di random generato da computer)
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//chiede all'utente di inserire 5 numeri
function askUserNumbers(){
    number1 = prompt("enter the first number:");
    number1 = parseInt(number1);
    number2 = prompt("enter the second number:");
    number2 = parseInt(number2);
    number3 = prompt("enter the third number:");
    number3 = parseInt(number3);
    number4 = prompt("enter the fourth number:");
    number4 = parseInt(number4);
    number5 = prompt("enter the fifth number:");
    number5 = parseInt(number5);
    userNumbers.push(number1, number2, number3, number4, number5)
    console.log(userNumbers);
    return userNumbers;
}

//confronta le risposte dell'utente con i numeri generati dal computer
function compareAnswers(computerNumbers, userNumbers){
    for(let i = 0; i < numberOfElementsinRandomNumbers; i++){
        if(userNumbers.includes(computerNumbers[i])){
            correctNumbers++;
            guessedNumbers.push(computerNumbers[i]);
            //console.log("numeri corretti: "+correctNumbers);
        }
    
    }
    
    if(correctNumbers == numberOfElementsinRandomNumbers ){
        console.log("You win");
    }else{
        console.log("You guessed " + correctNumbers + " numbers");
        console.log("Numbers you guessed: " + guessedNumbers);
    }
}



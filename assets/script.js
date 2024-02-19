// Assignment code here
    var passText = {
        lower: getRandomLower,
        upper: getRandomUpper,
        number: getRandomNumber,
        symbol: getRandomSymbol,
}
function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random() * +26) + 97);
}
function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbol(){
    var symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)];
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function writePassword(){
    var password = generatePassword();
    var passLenght
    var passwordLenght = prompt("How many Characters would you like your password to contain")    
    if(passwordLenght <8 || passwordLenght >128){
            do{passLenght = prompt ("Your password should be at least 8 characters but not more than 128 characters.");
        }while (passLenght >=128 || passLenght <= 8)};

    var lowerCaseCharacters = confirm("Do you want include lower-case characters in your password?")
    var upperCaseCharacters = confirm("Do you want include upper-case characters in your password?")
    var numberCharacters = confirm("Do you want include numbers in your password?")
    var oddCharacters = confirm("Do you want include special characters in your password?");

    passText = generatePassword(lowerCaseCharacters, upperCaseCharacters, numberCharacters, oddCharacters, passwordLenght)
    }
function generatePassword(lower, upper, number, symbol, length){
    let password = '';
    let typesCount = lower + upper + number + symbol;
    // console.log('typesCount:', typesCount)

    var arrayPass = [ {lower}, {upper}, {number}, {symbol}]

    // console.log('arrayPass:', arrayPass);

        if(typesCount ===0){
        alert('You should select at least one criteria')
        return '';
        }

        for(let i = 0; i < length; i +=typesCount){
        arrayPass.forEach(type=> { 
        var funcPass = Object.keys(type)[0];
        // console.log('funcPass:', funcPass);
        password += passText[funcPass]();
        });

        }
    // console.log(password.slice(0, length));
    var passwordText = document.querySelector("#password");
    passwordText.value = password.slice(0, length);

    return '';

    }




    // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);











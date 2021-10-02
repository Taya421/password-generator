// Assignment Code
var generateBtn = document.querySelector("#generate");

// Arrays created for possible character choices
/*
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',]
var lowerCase = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',]
var special = [ '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', '[', ']', '{', '}', '~', '`', '/', '.',
];
*/

var numbers = "0123456789";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var special = "!@#$%^&*()";

var userSelection = [];
var password = [];

// Function created
function questions() {
  var isValid = false;
  do {
    var length = prompt("Choose password length between 8 and 128 characters");
    var askNumbers = confirm("Do you want your password to include numbers?");
    if(askNumbers){
      userSelection.push(...numbers);
    }
    var askLowerCase = confirm("Do you want your password to include lower case letters?");
    if(askLowerCase){
      userSelection.push(...lowerCase)
    }
    var askUpperCase = confirm("Do you want your password to include upper case letters?");
    if(askUpperCase){
      userSelection.push(... upperCase);
    }
    var askSpecial =  confirm("Do you want your password to include special characters?");
    if(askSpecial) {
      userSelection.push(...special);
    }
    console.log(userSelection);
    


    for(let i = 0; i < length; i ++){
      password.push(userSelection[Math.floor(Math.random() * userSelection.length)])
      console.log(password.join('+'))

      document.getElementById("password").value = password.join('')

    }
    var responses = {
      length: length,
      askNumbers: askNumbers,
      askLowerCase: askLowerCase,
      askUpperCase: askUpperCase,
      askSpecial: askSpecial
    }
  
  
  if ((length < 8)||(length > 128))
  alert("Choose number between 8 and 128");
  else if((!askNumbers)&&(!askLowerCase)&&(!askUpperCase)&&(!askSpecial))
  alert("Must choose at least one type.");
  else
  isValid = true;

  } while(!isValid);
  return responses;
}

//steps
// 1 chec that the answer of number of char password is valid
//2


// This function
function generatePassword() {
  let passwordOptions = questions();
  let possibleCombo = [];
  let finalPassword = "";

  //console.log('password ask numbers',responses.askNumbers)

  /*
  if (responses.askNumbers) {
    for (var i of numbers) {
      possibleCombo.push(i);
    }
  } 
  if (responses.askLowerCase) {
    for (var i of lowerCase)
      possibleCombo.push(i);
  }
  if (responses.askUpperCase) {
    for (var i of upperCase)
      possibleCombo.push(i);
  }
  if (responses.askSpecial) {
    for (var i of special)
      possibleCombo.push(i);
  }


  console.log(possibleCombo);
  */
}

//for (var i = 0; i < responses.length; i++) {
  //finalPassword += possibleCombo[Math.floor(Math.random() * possibleCombo.length)];

  //return finalPassword;

//}

//console.log(finalPassword);



// Write password to the #password input
function writePassword() {
  var password = generatePassword();

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

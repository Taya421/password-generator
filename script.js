// Assignment Code
var generateBtn = document.querySelector("#generate");

// Created Arrays of possible character choices

var numbers = "0123456789";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var special = "!@#$%^&*()";

var userSelection = [];
var password = [];

// Function created to ask user which options and made consitional statements to ensure minimum option requiements were met.
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
  
  // This function was created to ensure the criteria for a strong password.
  if ((length < 8)||(length > 128))
  alert("Choose number between 8 and 128");
  else if((!askNumbers)&&(!askLowerCase)&&(!askUpperCase)&&(!askSpecial))
  alert("Must choose at least one type.");
  else
  isValid = true;

  } while(!isValid);
  return responses;
}



// This function joins the user responses and then creates the result which is the password.
function generatePassword() {
  let passwordOptions = questions();
  let possibleCombo = [];
  let finalPassword = "";
}


function writePassword() {
  var password = generatePassword();

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

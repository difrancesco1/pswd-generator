//Set Variables as false until the EU requests them to be true when prompted
var isUppercase = false;
var isLowercase = false;
var isNumber = false;
var isSpecial = false;

var passwordLength = 0;

//Special Characters, lowercase, uppercase, and number constants
const specialChar = "!@#$%^&*()-+=<>?,./:;[]{}";
const lowercase = "qwertyuiopasdfghjklzxcvbnm";
const uppercase ="QWERTYUIOPASDFGHJKLZXCVBNM";
const numbers = "1234567890";

//Password parameters, asks the user with a series a prompts what their desired password length and parameters are (uppercase, lowercase, numbers, symbols)

function passwordReqs() {
  while(true) {
    passwordLength = prompt("How many characters would you like to be in your password? Choose between 8 and 128.");
    if ((passwordLength %1) !=0 ||passwordLength > 128||passwordLength < 8) {  //Makes sure the input is [8 <= x <= 128] (divisable by 1, not equal to 0, less than 128, greater than 8)
      alert("Please choose a number between 8 and 128"); //Prompts the user to input a number again if they chose a number outside of the parameters
    }
    else {
      break;
    }
  }

  while (isUppercase == false && isLowercase == false && isNumber ==false && isSpecial ==false) { //We already made all of the variables false, the user can now change them to true
    
    isUppercase = confirm("Do you want lowercase characters in your password?");

    isLowercase = confirm("Do you want uppercase characters in your password?");

    isNumber = confirm("Do you want numbers in your password?");

    isSpecial = confirm("Do you want special characters in your password?");

    if (isLowercase == false && isUppercase == false && isNumber ==false && isSpecial ==false) { //Have to choose at least ONE parameter
      window.alert("Choose at least one option")
    }
    else {
      break;
    }
  }
}


function confirmPassword() {  //This function will add each parameter array (lowercase, uppercase, etc) that is true/selected to the empty parameter array 
  var parameter = ""; //empty array
  var pass = ""; //empty array

  if (isLowercase) { parameter = parameter + lowercase;
  }
  if (isUppercase) { parameter = parameter + uppercase;
  }
  if (isNumber) { parameter = parameter + numbers;
  }
  if (isSpecial) { parameter = parameter + specialChar;
  }
  for (i = 0; i < passwordLength; i++) { //js random number generator that chooses a number and correlates/pulls from the array
     var newChar = Math.floor(Math.random() * parameter.length);
    pass = pass + parameter.charAt(newChar);
  }

  return pass;
}

var generateBtn = document.querySelector("#generate");
function generatePassword() {
  passwordReqs();

  var passwordComplete = confirmPassword();

  return passwordComplete;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Assignment Code

function generatePassword()

var passwordLength;
var includeLowercase;
var includeUppercase;
var includeSpecialChars;
var includeNumeric;

console.log("hello")

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Assignment Code

var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var includeLowercase;
  var includeUppercase;
  var includeSpecialChars;
  var includeNumeric;
  var passwordLength = "";

  var passwordLength = parseInt(
    prompt("Enter the password length (8 to 128 characters):")
  );
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

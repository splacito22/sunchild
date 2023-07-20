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

  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeSpecialChars = confirm("Include special characters?");
  var includeNumeric = confirm("Include numeric characters?");

  if (!passwordLength || passwordLength < 8 || passwordLength > 128)
    alert(
      "Please enter ['Please enter a valid password length between 8 and 128 characters."
    );
  return;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

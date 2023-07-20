// Assignment Code

var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var includeLowercase;
  var includeUppercase;
  var includeSpecialChars;
  var includeNumeric;

  var passwordLength = parseInt(
    prompt("Enter the password length (8 to 128 characters):")
  );
  if (!passwordLength || passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a valid password length between 8 and 128 characters.");
    return;
  }

  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeSpecialChars = confirm("Include special characters?");
  var includeNumeric = confirm("Include numeric characters?");

  if (
    !includeLowercase &&
    !includeUppercase &&
    !includeNumeric &&
    !includeSpecialChars
  ) {
    alert("Please select at least one character type.");
    return;
  }

  var password = generateRandomPassword(
    passwordLength,
    includeLowercase,
    includeUppercase,
    includeSpecialChars,
    includeNumeric
  );

  var passwordTextArea = document.querySelector("#password");
  passwordTextArea.value = password;
}

// Write password to the #password input
function generateRandomPassword(
  passwordlength,
  includeLowercase,
  includeUppercase,
  includeSpecialChars,
  includeNumeric
) {
  var charset = "";
  if (includeLowercase) charset += "abcdefghijklmnopqrstuvwxyz";
  if (includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (includeNumeric) charset += "0123456789";
  if (includeSpecialChars) charset += "!@#$%^&*()-_=+[]{}|;:,.<>?";

  if (charset.length === 0) {
    alert("Please select at least one character type.");
    return;
  }

  var password = "";
  for (var i = 0; i < passwordlength; i++) {
    // Randomly select characters from the charset to build the password
    var randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

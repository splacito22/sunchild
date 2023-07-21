// Assignment Code

// Get the "Generate Password" button element from the DOM
var generateBtn = document.querySelector("#generate");

// Function to generate a password based on user-selected criteria
function generatePassword() {
  var includeLowercase;
  var includeUppercase;
  var includeSpecialChars;
  var includeNumeric;

  // Prompt the user to enter the password length and parse the input to an integer
  var passwordLength = parseInt(
    prompt("Enter the password length (8 to 128 characters):")
  );

  // Validate the password length input
  if (!passwordLength || passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a valid password length between 8 and 128 characters.");
    return;
  }

  // Ask user to confirm whether to include lowercase, uppercase, special characters, and numeric characters
  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeSpecialChars = confirm("Include special characters?");
  var includeNumeric = confirm("Include numeric characters?");

  // Check if at least one character type is selected
  if (
    !includeLowercase &&
    !includeUppercase &&
    !includeNumeric &&
    !includeSpecialChars
  ) {
    alert("Please select at least one character type.");
    return;
  }

  // Generate a random password based on user-selected criteria
  var password = generateRandomPassword(
    passwordLength,
    includeLowercase,
    includeUppercase,
    includeSpecialChars,
    includeNumeric
  );

  // Display the generated password in the text area
  var passwordTextArea = document.querySelector("#password");
  passwordTextArea.value = password;
}

// Function to generate a random password based on the selected criteria
function generateRandomPassword(
  passwordlength,
  includeLowercase,
  includeUppercase,
  includeSpecialChars,
  includeNumeric
) {
  var charset = "";

  // Build the character set based on the user-selected criteria
  if (includeLowercase) charset += "abcdefghijklmnopqrstuvwxyz";
  if (includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (includeNumeric) charset += "0123456789";
  if (includeSpecialChars) charset += "!@#$%^&*()-_=+[]{}|;:,.<>?";

  // Check if at least one character type is selected
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

// Add event listener to generate password button
generateBtn.addEventListener("click", generatePassword);

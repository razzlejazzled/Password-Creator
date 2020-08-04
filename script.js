// Assignment Code
var generateBtn = document.querySelector("#generate");
var passWordLength = prompt("How many characters would you like your password to be?")
if (passWordLength < 8 || passWordLength > 128) {
  alert("Length must be between 8 and 128 characters")
}





if (passWordLength > 8 || passWordLength < 128) {
  var upperCase = confirm("Would you like uppercase characters in you password?")
  var lowercase = confirm("Would you like lowercase characters in you password?")
  var num3rs = confirm("Would you like numbers in your password?")
  var specialCase = confirm("Would you like special characters in your password?")
}
else if (!(upperCase || lowerCase || num3rs || specialCase)) {
  alert("You must select at least one type of character")
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Assignment Code
var generateBtn = document.querySelector("#generate")




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  function generatePassword() {
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numeric = "123456789"
    var special = "!@#$%^&*()_+-="
    var lowerCase = "qwertyuiopasdfghjklzxcvbnm"
    var options = {};


    //prompt for password length
    options.length = parseInt((prompt("How long would you like your password to be?")))

    //alert for if character value is not correct
    if (options.length < 8 || options.length > 128 || isNaN(options.length)) {
      alert("Incorrect Password Length. Password must be between 8 and 128 characters");
      return "Invalid parameters";
    }

    options.upperCase = confirm("Would you like uppercase characters in you password?");
    options.lowerCase = confirm("Would you like lowercase characters in you password?");
    options.num3rs = confirm("Would you like numbers in your password?");
    options.special = confirm("Would you like special characters in your password?");

    function getRandomValue(str) {
      return str[Math.floor(Math.random() * str.length)]
    }
    password = "";

    for (var i = 0; i < options.length; i++) {
      if (options.special) {
        password += getRandomValue(special)
      }

      if (options.num3rs) {
        password += getRandomValue(numeric)
      }

      if (options.upperCase) {
        password += getRandomValue(upperCase)
      }

      if (options.lowerCase) {
        password += getRandomValue(lowerCase)

      }


    }
    return password.substring(0, options.length);

  }
}





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)

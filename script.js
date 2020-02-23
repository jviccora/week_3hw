// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




const generatePassword = (
    passwordLength = prompt("Choose the number of characters between 8 and 128").max = "128".min = "8",
    useUpperCase = confirm("Use Upper Case?"),
    useNumbers = confirm("Use Numbers?"),
    useSpecialChars = confirm("Use Special Characters?"),
) => {
    const chars = 'abcdefghijklmnopqrstuvwxyz'
    const numberChars = '0123456789'
    const specialChars = '!"£$%^&*()'

    const usableChars = chars +
        (useUpperCase ? chars.toUpperCase() : '') +
        (useNumbers ? numberChars : '') +
        (useSpecialChars ? specialChars : '')

    let generatedPassword = ''

    for (i = 0; i <= passwordLength; i++) {
        generatedPassword += usableChars[Math.floor(Math.random() * (usableChars.length))]
    }

    return generatedPassword
}
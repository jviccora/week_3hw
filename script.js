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
    passwordLength = 8,
    useUpperCase = true,
    useNumbers = true,
    useSpecialChars = true,
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
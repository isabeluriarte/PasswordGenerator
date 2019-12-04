
//DON'T TOUCH THIS CODE! This code is adding click handlers and DOM manipulation to the page.  Edit the generatePassword function and all should work properly.
// Assignment Code
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy");

//this function will fire when you click the generate password button on the page.  I've set it to alert "You've clicked a button" and return a password of password for now. Update it to make your password

var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "[", "]", "{", "}"];
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upper = lower.map(function (x) { return x.toUpperCase() })
var passwordArr = [];
var finalPasswordArr = [];
var password = "";

alert("Welcome to the World's Best Password Generator! \nYou can customize your password by determining how long you would like it to be, and whether or not you would like to include special characters, numbers, lowercase letters, and uppecase letters.")

function generatePassword() {
    //YOUR CODE HERE
    var length = prompt("How long would you like your password to be? \n(Length must be between 8 and 128)")
    if (length > 8 && length < 128) {
        console.log(length)

        if (confirm("Would you like to use special characters?"))
            passwordArr.push(...special)

        if (confirm("Would you like to use numbers?"))
            passwordArr.push(...number)

        if (confirm("Would you like to use lowercase letters?"))
            passwordArr.push(...lower)

        if (confirm("Would you like to use uppercase letters?"))
            passwordArr.push(...upper)

        
            console.log(passwordArr.length)
        if(passwordArr.length > 0) {
            for(i = 0; i < length; i++){
                var character = passwordArr[Math.floor(Math.random() * passwordArr.length)];
                finalPasswordArr.push(character)
            }

            let finalPasswordWord = finalPasswordArr.join("");
            //password = finalPasswordArr.join("");
            writePassword(finalPasswordWord)
            //
        }
        else alert("you didn't choose anything")
    } 
    else{}

    //parseInt()
    //typeof

    // let arr1 = [1,2,3];
    // let otherArr = ["a","b","c"];

    // otherArr.push(arr1)
    //  [1,2,3,"a", "b", "c"]
    //  [1,2,3,["a","b","c"]]

    // .concat()

    alert("ive been clicked");
    return "password";
}

//generatePassword();

// Write password to the #password input
function writePassword(password) {
    //var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

    copyBtn.removeAttribute("disabled");
    copyBtn.focus();
}

function copyToClipboard() {
    // BONUS 
}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

// BONUS EVENT LISTENER
copyBtn.addEventListener("click", function(){
    var passwordText = document.querySelector("#password");
    passwordText.select();
    document.execCommand('copy')
})
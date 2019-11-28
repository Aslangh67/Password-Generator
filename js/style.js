
//DON'T TOUCH THIS CODE! This code is adding click handlers and DOM manipulation to the page.  Edit the generatePassword function and all should work properly.
// Assignment Code
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy");

//this function will fire when you click the generate password button on the page.  I've set it to alert "You've clicked a button" and return a password of password for now. Update it to make your password
function generatePassword() {
    //YOUR CODE HERE
    var string = "abcdefghijklmnopqrstuvwxyz"
    var upString = "ABCDEFGHIGKLMONPQRSTUVWXYZ"
    var num = '0123456789'
    var spec = '!@#$%^&*()_+~`|}{[]\:;?><,./-='
    var lenght = prompt("please select number of character between 8-128!")
    var result = []


    while (lenght < 8 || lenght > 128)
        lenght = prompt("please select number of character between 8-128 dumbass!!")
    console.log(lenght);


    var special = confirm("Would you like special characters?")
    var numeric = confirm("Would you like numeric characters?")
    var lowerCase = confirm("Would you like lowercase  characters?")
    var upperCase = confirm("Would you like uppercase characters?")
    while (special === false && numeric === false && lowerCase === false && upperCase === false)
    // if (special === false && numeric === false && lowerCase === false && upperCase === false)
    {
        alert("please chose at least one character!!!!!!!!!")
        var special = confirm("Would you like special characters?")
        var numeric = confirm("Would you like numeric characters?")
        var lowerCase = confirm("Would you like lowercase  characters?")
        var upperCase = confirm("Would you like uppercase characters?")

    }
    // TODO: create a variable to collect the right inputs in
    var selection = [];
    // TODO: create a function to push the selected variables to the right variable
    if (special) {
        for (let i = 0; i < spec.length; i++) {
            selection.push(spec[i])
        }
    }

    if (numeric) {
        for (let i = 0; i < num.length; i++) {
            selection.push(num[i])


        }
    }
    if (lowerCase) {
        for (let i = 0; i < string.length; i++) {
            selection.push(string[i])


        }
    }
    if (upperCase) {
        for (let i = 0; i < upString.length; i++) {
            selection.push(upString[i])
        }
        console.log(selection);
        

    }



    for (i = 0; i < lenght.valueOf(); i++) {
        result.push(selection[Math.floor(Math.random() * selection.length)])
    }





    // TODO: creat a loop to randomly select the number of variables

    // TODO: while var1 != var2 do the loop, each time doing the loop add one item to var 3


}











// TODO: insert the output to the right field

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

    copyBtn.removeAttribute("disabled");
    copyBtn.focus();
}

function copyToClipboard() {
    // BONUS 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER
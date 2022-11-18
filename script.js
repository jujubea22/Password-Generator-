  //Password Generator 
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
   var passwordText = document.querySelector("#password");

  //  Creates a variable for the password character length and window pop up 
  // for user to enter desired character length
  let length = window.prompt('Enter Password Length (8 - 128)');

// While loop to check that character  
//Also makes sure that a number is entered into the box with isNaN 
  while (isNaN(length) || length < 8 || length > 128) {
    length = window.prompt('Only enter numbers between 8 and 128!');
  }
  // sets variables for users to select for password to false to help with logic further down page
  let typesSelected = false;
  let includeUpperCase = false;
  let includeLowerCase = false;
  let includeNumerics = false;
  let includeSpecials = false;

  // while loop to with window.confirm to allow user to select yes or no for password requirements
  while (!typesSelected) {
    includeUpperCase = window.confirm(
      'Include Upper Case Characters? (OK=Yes, Cancel=No)'
    );
  
    includeLowerCase = window.confirm(
      'Include Lower Case Characters? (OK=Yes, Cancel=No)'
    );
  
    includeNumerics = window.confirm(
      'Include Numeric Characters? (OK=Yes, Cancel=No)'
    );
  
    includeSpecials = window.confirm(
      'Include Special Characters? (OK=Yes, Cancel=No)'
    );
  
// variable to declare that 'typesSelected' can be any of Uppercase, Lowercase, Numerics or Special Characters
    typesSelected =   includeUpperCase || includeLowerCase || includeNumerics || includeSpecials;
  
// If statement to have window alert show to the user if they do not select at least one of the above character types 
    if (typesSelected === false) {
      window.alert('At least one character type must be included.');
    }
  }
  
  // setting the number length to the same as the password length criteria
  let len = Number(length);
  
  // console logs for testing and debugging -- not showing on dployed site
  // console.log(len);
  // console.log(includeUpperCase);
  // console.log(includeLowerCase);
  // console.log(includeNumerics);
  // console.log(includeSpecials);
  
// declaring the 'password' variable should include all of the following that the user selected and generated using the 'generatePassword' Function
  let password = generatePassword(len, includeUpperCase, includeLowerCase, includeNumerics, includeSpecials);
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Function to generate the user's password using the selected source characters and randomizing the characters
function generatePassword(len, includeUpper, includeLower, includeNumeric, includeSpecial) {

  // variable to set source characters that the user wil choose below
  let sourceCharacters = '';

  // If statements set source characters if user selects uppercase characters for password
  if (includeUpper) {
    sourceCharacters +='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }


  // If statements set source characters if user selects lowercase characters for password
  if (includeLower) {
    sourceCharacters +='abcdefghijklmnopqrstuvwxyz';
  }


  // If statements set source characters if user selects numerica characters for password
  if (includeNumeric) {
    sourceCharacters +='01234567890';
  }


  // If statements set source characters if user selects special characters for password
  if (includeSpecial) {
    sourceCharacters +='!"#$%&*+,-./:;<=>?@[\]^_`{|}~';
  }

// variable set to return the password 
  let returnPassword = '';

// for loop set up to randomize characters that the user selects by answering the questions.  It will also set it to the requested length by the user
  for (let i = 0; i < len; i++) {

    let sourceLength = sourceCharacters.length;
    let charPos = Math.floor(Math.random() * sourceLength);
    console.log(charPos);
    let newChar = sourceCharacters.substring(charPos, charPos + 1);

    console.log(newChar);

  returnPassword += newChar;

  }
// returns password functions
  return returnPassword;

}

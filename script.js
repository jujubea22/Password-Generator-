//Assign Code

let btnGenerate = document.querySelector('button');
let result = document.querySelector('h1');

//Add Event Listtener for Button
btnGenerate.addEventListener('click', ()=> {
  result.innerText = generatePassword();
});

//Write Password
function writePassword(){
  var newPassword = generatePassword();
  
  passwordTest.value ="";
  function generatePassword(){
    var password ="";
  }
  
  return password
}

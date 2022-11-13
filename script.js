//assign code
let btnGenerate = document.querySelector('button');
let result = document.querySelector('h1');

btnGenerate.addEventListener('click', ()=> {
  result.innerText = generatePassword();
});

<body>  
<h3>Password Validation</h3>
<p>Try to submit the form.</p>

<div class="container">
    <label for="psw">Password</label>
</div>

<div id="message">
  <h3>Password must contain the following:</h3>
  <p id="letter" class="invalid">A <b>lowercase</b> letter</p>
  <p id="capital" class="invalid">A <b>capital (uppercase)</b> letter</p>
  <p id="number" class="invalid">A <b>number</b></p>
  <p id="length" class="invalid">Minimum <b>8 characters</b></p>
</div>
				

<script>
var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block"}


// When the user starts to type something inside the password field
myInput.onkeyup = function() 
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {  
    letter.classList.remove("invalid")}
    letter.classList.add("valid");
  {"}"} else
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  {"}"}
  
  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) 
    capital.classList.remove("invalid");
    capital.classList.add("valid");

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) 
    number.classList.remove("invalid");
    number.classList.add("valid");
</script>
</body>

let btnGenerate = document.querySelector('button');
let result = document.querySelector('h1');

btnGenerate.addEventListener('click', ()=> {
  result.innerText = generatePassword();
});

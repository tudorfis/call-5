/**
    Client: Fa-mi te rog butonul de login sa nu fie valabil atunci cand a pus cineva
        parola mai mica de 6 caractere.

    Tech:
    - modificam inputul de password
    - numaram numarul de caracter din input
    - comparam cu numarul minim (var )
    - cream o conditie un if/else
    - daca e mai mare sa fie enabled, altfel disabled
    - cand se apasa o tasta pe password, executam codul

    1) Modificam inputul de password
*/

const inputUserName = document.querySelector('#username');
const inputPassword = document.querySelector('#password');
const inputRepeatPassword = document.getElementById('repeat-password');
const submitBtn = document.querySelector('#submitBtn');

inputPassword.addEventListener('input', function(){
  charNumberCheck(inputPassword);
});

inputRepeatPassword.addEventListener('input', function() {
    charNumberCheck(inputRepeatPassword);
});

function  charNumberCheck(inputElement) {
    const condition = inputElement.value.length >= 6;
    if(!condition){
        submitBtn.setAttribute('disabled','true');
        console.log('TRUE');
    }else{
        submitBtn.removeAttribute('disabled');
        console.log('FALSe');
    }
}

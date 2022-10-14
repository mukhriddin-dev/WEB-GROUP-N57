"use strict";

let input = document.querySelectorAll('input');
let btn = document.querySelector('.btn-primary');
let message = document.querySelector('#message');
let eye = document.querySelector('.btn-infoo');


input[0].addEventListener('blur', () => {

   if (input[0].value.trim().length === 0) {

      input[0].style.border = "2px solid red";
      input[0].setAttribute('placeholder', 'Please fill input')

   } else {
      input[0].style.border = "2px solid green";
      input[0].setAttribute('placeholder', 'Enter your username')
   }
})


input[1].addEventListener('blur', () => {

   if (input[1].value.trim().length === 0) {

      input[1].style.border = "2px solid red";
      input[1].setAttribute('placeholder', 'Please fill input')

   } else {
      input[1].style.border = "2px solid green";
      input[1].setAttribute('placeholder', 'Enter your password')
   }
})


btn.addEventListener('click', () => {
   if (input[0].value.trim().length === 0 || input[1].value.trim().length === 0) {

      input[1].style.border = "2px solid red";
      input[0].style.border = "2px solid red";
      message.textContent = "NO SUCCESSFULL";
      message.setAttribute('class', 'text-center text-danger fs-3')

   } else {
      input[1].style.border = "2px solid green";
      input[0].style.border = "2px solid green";
      message.textContent = "SUCCESSFULL";
      message.setAttribute('class', 'text-center text-success fs-3')
   }
})


eye.addEventListener('click', () => {

   if (input[1].getAttribute('type') === 'password') {

      input[1].setAttribute('type', 'text');
      eye.innerHTML = ` <i class="bi bi-eye-slash-fill"></i>`
   } else {
      input[1].setAttribute('type', 'password');
      eye.innerHTML = ` <i class="bi bi-eye-fill"></i>`
   }

})
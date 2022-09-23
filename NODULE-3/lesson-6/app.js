"use strict";

// let h1=document.getElementsByTagName('h1');

// let h1=document.getElementById('text');

// let h1=document.getElementsByClassName('text-center');

// let h1=document.querySelectorAll('.live');



// const p = document.querySelector('.box .box-body p');
// const button = document.querySelectorAll('button');
// console.log(button);

// // p.style.backgroundColor="green";
// // p.style.margin="20px";
// // p.style.padding="20px";


// button[0].onclick = function () {
//    p.style.cssText = 'background-color:green; margin:20px; padding:20px; display:block ';
// }

// button[1].onclick = function () {
//    p.style.cssText = 'display:none';
// }

const ism = document.querySelector('input');

const sendBtn = document.querySelector('#send');

const btn = document.querySelector('button');

const h1 = document.querySelector('.text');

sendBtn.onclick = function () {
   h1.innerHTML = `<ul><li>${ism.value}</li></ul>`;
   ism.value = "";
}

btn.onclick = function () {
   ism.value = "";
   h1.innerHTML = ism.value;
}
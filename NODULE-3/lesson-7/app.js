"use strict";

let btn=document.querySelector('.send');
let box=document.querySelector('.box');
let inputText=document.querySelector('#text');
let h1=document.querySelector('h1');

console.log(h1.textContent);


// btn.onclick=function(){

//   this.style.color='red';
//   this.style.backgroundColor="green"
//   console.log("ok 1");
// }

// box.addEventListener('mouseover',()=>{
//    console.log('aqua');
//    box.style.backgroundColor="aqua";
// })


// box.addEventListener('mouseout',()=>{
//    console.log('crimson');
//    box.style.backgroundColor="crimson";
// })




// box.addEventListener('mousedown',()=>{
//    console.log('down');
//    box.style.backgroundColor="aqua";
// })


// box.addEventListener('mouseup',()=>{
//    console.log('up');
//    box.style.backgroundColor="crimson";
// })


// inputText.addEventListener('keypress', (e)=>{
//  if(e.keyCode===13){
//     console.log('bu enter');
//     box.style.backgroundColor="blue";
//  }else{
//     console.log("bu "+e.code);
//  }
// })


inputText.addEventListener('focus',()=>{
   inputText.style.border="2px solid red"
})

inputText.addEventListener('blur',()=>{
   inputText.style.border="2px solid blue"
})

inputText.addEventListener('input',(e)=>{
   console.log(e.target.value);
   h1.textContent=e.target.value;
})


const dark=document.querySelector('#dark');
const light=document.querySelector('#light');

dark.addEventListener('input',()=>{
   document.body.style.backgroundColor="#000";
})

light.addEventListener('input',()=>{
   document.body.style.backgroundColor="#fff";
})
   





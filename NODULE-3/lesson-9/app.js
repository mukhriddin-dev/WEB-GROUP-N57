"use strict";

const card = document.querySelector('.card');


const date = new Date();

let week = ['Dushanba', 'Seshanba', 'Chorshanba', 'Payshanba', 'Juma', 'Shanba', 'Yakshanba'];

let month = ["January", "February", "March", "April", "May", "June", "July",
   "August", "September", "October", "November", "December"
];

// console.log(date.getDate()); // bugungi kun
// console.log(week[date.getDay()-1]);  // hafta kunini 
// console.log(date.getFullYear()); // yil
// console.log(date.getHours())// soat
// console.log(date.getMinutes()) //daqiqa
// console.log(date.getSeconds()) // soniya;
// console.log(month[date.getMonth()]) // oy raqamini 
// console.log(date.getTimezoneOffset());
// console.log(date.getUTCDate());
// console.log(date.getTime()/1000/60/60/24/365);


// const h = document.querySelector('#hour'),
//    m = document.querySelector('#minute'),
//    s = document.querySelector('#second');



// setInterval(() => {
//    const date = new Date();
//    h.innerHTML = `${date.getHours()}`
//    m.innerHTML = `${date.getMinutes()}`
//    s.innerHTML = `${date.getSeconds()}`;

// }, 1000)


// console.log(card.classList.contains('bg-warning'));



// card.addEventListener('click', ()=>{
//    card.classList.add('rounded-pill');
//    card.classList.add('border');
//    card.classList.add('border-4');
//    card.classList.add('border-success');
//    card.classList.remove('bg-warning');
// })


// const btnPrimary = document.querySelector('.btn-primary');


// btnPrimary.addEventListener('click', () => {


//    card.classList.toggle('swiper');


//    // if (card.classList.contains('swiper')) {

//    //    card.classList.remove('swiper')

//    // } else {

//    //    card.classList.add('swiper');

//    // }
// })

const slideItem = document.querySelectorAll('.slide-item'),
   feed = document.querySelector('.feed'),
   next = document.querySelector('.next'),
   prev = document.querySelector('.prev');


let n = 0;




// function nextSlide(n){
//    n++
//    feed.style.transform=`translateX(${-n*1000})px`
// }

// function prevSlide(n){
//    n--
//    feed.style.transform=`translateX(${-n*1000})px`
// }

console.log(slideItem.length);

function slider(){
   if (n >=slideItem.length ) {
        n = 0
   }

   if (n < 0) {
      n = slideItem.length - 1
   }
   feed.style.transform = `translateX(${-n*1000}px)`
}


next.addEventListener('click', () => {
   n++
   console.log(n);
   slider()
  
})

prev.addEventListener('click', () => {
   n--
   console.log(n);
   slider()
})












// function addStyle() {
//    card.setAttribute('class', 'card bg-warning text-dark p-5');
// }

// setTimeout(() => {
//    addStyle()
//    console.log('is working');
// }, 3000)


// setTimeout(() => {
//    console.log('working ) ');
// }, 1000)




// let num = 0;

// const timer=setInterval(() => {
//    num++
//    console.log("interval" + num);

// }, 1000)


// card.addEventListener('click', ()=>{
//    clearInterval(timer)
// })
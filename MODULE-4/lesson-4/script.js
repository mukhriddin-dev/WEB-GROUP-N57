"use strict";



// function getPromise() {
//    return new Promise((resolve, reject) => {
//       setTimeout(() => {

//          let work = true;
//          if (work) {
//             resolve([work])
//          } else {
//             reject('bajarilmadi  ... ')
//          }

//       }, 2000)

//    })
// }

// // .then
// // .catch

// getPromise().then((success) => console.log(success))
//    .catch((error) => console.log(error))

// // .finally((info)=>{
// //    console.log(info);
// // })



// console.log(getPromise());


// fetch('https://jsonplaceholder.typicode.com/users')
//    .then((data) => data.json())
//    .then((result) => getdata(result))
//    .catch((err) => console.log(err))



// function getdata(data) {
//    data.forEach((i) => {
//     const card=createElement('div', 'card  my-2 p-4 mx-auto w-50 shadow', i.name);
//     $('.wrapper').appendChild(card);
//    })
// }


async function getData() {
   const response = await fetch('https://jsonplaceholder.typicode.com/users');
   const result = await response.json();
   
   setTimeout(()=>{
      $(".wrapper").innerHTML = ""
      dataRender(result)
   },3000)
}
getData()

function dataRender(data = []) {
   data.length > 0 ? data.forEach((users) => {
      const card = createElement('div', 'card  my-2 p-4 mx-auto w-50 shadow', users.name);
      $('.wrapper').appendChild(card);
   }) : $(".wrapper").innerHTML = "LOADING . . . "
}
dataRender()





















//  const sayHello = async (text)=>{
//    let msg=await text;
//    console.log(msg)
// }

// sayHello("react js 1")


// console.log("JAVASCRIPT 2");
























// const langs = ['javascript', 'nodejs', 'react', 'angular'];


// function addItem() {
//    setTimeout(() => {
//       langs.push('go lang')
//    }, 1000)
// }


// function getrender(notif) {

//    addItem()

//   setTimeout(()=>{
//    langs.forEach((lang) => {
//       const li = createElement('li', 'item', lang);
//       $('ul').appendChild(li);
//    })
//   }, 2000)


//    console.log(langs);

// }  

// console.log(langs);


// getrender('update')
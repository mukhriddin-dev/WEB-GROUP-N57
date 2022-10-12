"use strict";
let i = 0;
$a('li').forEach((item) => {
   i++;
   item.dataset.id = i;
   item.addEventListener('click', (e) => {
      e.target.style.borderRadius = "20px";
      console.log(e.target.textContent);
   })
})



window.addEventListener('click', (e) => {

   if (e.target.classList.contains('bg-danger')) {
      e.target.dataset.info = "info";
      e.target.style.borderRadius = "20px";
      alert(e.target.textContent)
   }

})

const li = createElement('li', 'p-5 bg-danger m-2 d-inline-block', 'list-item-6');
$('.list').appendChild(li);


// ============ tag template ==========///


let templates = $('#card-wrapper');
let clone = templates.content.cloneNode(true);




const array = [{
      "id": 7,
      "email": "michael.lawson@reqres.in",
      "first_name": "Michael",
      "last_name": "Lawson",
      "avatar": "https://reqres.in/img/faces/7-image.jpg"
   },
   {
      "id": 8,
      "email": "lindsay.ferguson@reqres.in",
      "first_name": "Lindsay",
      "last_name": "Ferguson",
      "avatar": "https://reqres.in/img/faces/8-image.jpg"
   },
   {
      "id": 9,
      "email": "tobias.funke@reqres.in",
      "first_name": "Tobias",
      "last_name": "Funke",
      "avatar": "https://reqres.in/img/faces/9-image.jpg"
   },
   {
      "id": 10,
      "email": "byron.fields@reqres.in",
      "first_name": "Byron",
      "last_name": "Fields",
      "avatar": "https://reqres.in/img/faces/10-image.jpg"
   },
   {
      "id": 11,
      "email": "george.edwards@reqres.in",
      "first_name": "George",
      "last_name": "Edwards",
      "avatar": "https://reqres.in/img/faces/11-image.jpg"
   },
   {
      "id": 12,
      "email": "rachel.howell@reqres.in",
      "first_name": "Rachel",
      "last_name": "Howell",
      "avatar": "https://reqres.in/img/faces/12-image.jpg"
   }
]

array.forEach((user) => {
   let templates = $('#card-wrapper');
   let clone = templates.content.cloneNode(true);

   clone.querySelector('img').src = user.avatar;
   clone.querySelector('.card-title').textContent = `${user.first_name} ${user.last_name}`;

   $('.bg-warning').appendChild(clone);
});







//let newData=data; // shalow copy

//newData.push('PHP');



// for(let i=0; i<data.length; i++){
//    //newData[i]=data[i]
//    // newData.push(data[i])
// }

// data.forEach((e)=>{
//    newData.push(e)
// })

// let newData=data.map( i => i)

// let newData=data.filter(i=> i.length>3)
// let data=['java','go','flutter','kotlin'];

// let newData=[...data]

// newData.push('PHP');



// let newData=data;

// let newData=Object.assign({}, data);



// let newData = {
//    ...data,
// }

// JSON.stringify => OBJECT TO JSON
// JSON.parse => JSON TO OBJECT

// let newData=JSON.parse(JSON.stringify(data));

// newData.key="ok"

// console.log(JSON);

// console.log(data);

// console.log(newData);




// destructuring


// let data=['java','go','flutter','kotlin'];



// let [game,backend,...mobile]=data;

// console.log(mobile);

// function job(a,b,...c){
//    console.log(a,b,c);
//    c.forEach((i)=>{
//       console.log(i);
//    })
// }

// job('frontend','backend','mobile','devops','ux&ui')


let data = {
   isname: "Tesla",
   size: 22,
   color: "yellow & black"
}


localStorage.setItem('parol','1234')
localStorage.setItem('login',"admin111111")
localStorage.setItem('data', JSON.stringify(data))

let login=localStorage.getItem('login');
let user=JSON.parse(localStorage.getItem('data'))

console.log(user);
console.log(login);

$('.btn-danger').addEventListener('click',()=>{
   localStorage.clear()
})
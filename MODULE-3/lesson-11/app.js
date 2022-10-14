"use strict";
const wrapper = document.querySelector('.wrapper'),
   dynamicSelect = document.querySelector('#filter'),
   rating=document.querySelector('#rating'),
   letter=document.querySelector('#letter');


let products = [{
      isname: "Iphone 14 pro max lux",
      brand: "apple",
      price: 2000,
      year: "2022",
      quantity: 45,
      credit: false,
      img: "https://target.scene7.com/is/image/Target/GUEST_45c95b86-6b12-4260-92cf-90cf1b53b918",
   },

   {
      isname: "Samsung galaxy S22",
      brand: "SAMSUNG",
      price: 900,
      year: "2021",
      quantity: 12,
      credit: false,
      img: "https://target.scene7.com/is/image/Target/GUEST_45c95b86-6b12-4260-92cf-90cf1b53b918",
   },

   {
      isname: "Redmi note 12 pro",
      brand: "xiomi",
      price: 400,
      year: "2022",
      quantity: 145,
      credit: true,
      img: "https://target.scene7.com/is/image/Target/GUEST_45c95b86-6b12-4260-92cf-90cf1b53b918",
   },

   {
      isname: "HTC one M8",
      brand: "HTC",
      price: 320,
      year: "2017",
      quantity: 0,
      credit: false,
      img: "https://target.scene7.com/is/image/Target/GUEST_45c95b86-6b12-4260-92cf-90cf1b53b918",
   },

   {
      isname: "Nokia 1200",
      brand: "Nokia",
      price: 5000,
      year: "2004",
      quantity: 1,
      credit: true,
      img: "https://target.scene7.com/is/image/Target/GUEST_45c95b86-6b12-4260-92cf-90cf1b53b918",
   },

   {
      isname: "Nokia 1202",
      brand: "Nokia",
      price: 4000,
      year: "2005",
      quantity: 1,
      credit: true,
      img: "https://target.scene7.com/is/image/Target/GUEST_45c95b86-6b12-4260-92cf-90cf1b53b918",
   },

   {
      isname: "Huawei P30 lite",
      brand: "Huawei",
      price: 200,
      year: "2021",
      quantity: 17,
      credit: false,
      img: "https://target.scene7.com/is/image/Target/GUEST_45c95b86-6b12-4260-92cf-90cf1b53b918",
   },
];

console.log(products);












dynamicSelect.addEventListener('change', (e) => {
   renderData(e.target.value.toLowerCase())
})


letter.addEventListener('change', (e) => {
  console.log(e.target.value);
  sortData(e.target.value.toLowerCase())
})





function sortData(sortText){

   const resultsort=products.sort((a , b)=>{
      if(sortText==='a-z'){
         return a.isname-b.isname
      }

      if(sortText==='z-a'){
         return b.isname-a.isname
      }
      
   })

 console.log(resultsort);


  
}





// dynamic options

products.forEach((e) => {
   const option = document.createElement('option');
   option.innerHTML = `${e.brand}`;
   dynamicSelect.appendChild(option);
})


// render all data



console.log([1,2,3,4,5,6,222,444].sort((a,b)=>{
   return b-a
}));



function renderData(query = 'all') {

   wrapper.innerHTML = "";

   const filterProduct = products.filter((e) => {
      if (query === 'all') {
         return e
      } else {
         return e.brand.toLowerCase() === query;
      }
   })






   console.log(filterProduct);

   filterProduct.forEach((e) => {
      const card = document.createElement("div");
      card.setAttribute("class", "card");

      card.innerHTML = `

       <img src="${e.img}" alt="${e.isname}> 
       <div class="card-body p-4">
       <h4 class="m-2"> ${e.isname}</h4>
       <h5 class="m-2"> ${e.brand}</h5>
       <ul>
       <li>${e.year}</li>
       <li>${e.price}</li>
       <li>${e.quantity}</li>
       <li><strong class="${
         e.credit
           ? "rounded-pill mt-3 d-block p-2 bg-success text-light"
           : "rounded-pill mt-3 d-block p-2 bg-danger text-light"
       }">Bo'lib to'lashga</strong></li>
    
       </ul>
       
       </div>`;




      wrapper.appendChild(card);

   });


}

renderData()






//          box=document.querySelectorAll('.box'),
//        wrapperRight = document.querySelector('.wrapper-right');

// const boxItem=document.createElement('div');
//       boxItem.setAttribute('class' ," p-4 box m-2 bg-success ");
//       boxItem.innerHTML="box item 1";

//       // wrapperRight.appendChild(boxItem);
//       wrapperRight.prepend(boxItem);
//       box[1].before(boxItem)

// let index = 0;

// for (let i = 0; i < 10; i++) {
//    index++

//    const div = document.createElement('div');
//    div.setAttribute('class', "bg-info p-2  m-3 my-5");
//    div.innerHTML = `<h1>LOREM IPSUM ${index}</h1>`;

//    wrapper.prepend(div);
// }

// console.log(div);



const array = ['js','php','nodejs','react','angular','vue'];



console.log(array.sort().reverse());

// const arrayF=array.filter((e)=>{
//    return e>10
// })

// for(let i=0; i<array.length; i++){
//    if(array[i]%8===0){
//       arrayF.push(array[i])
//    }
// }


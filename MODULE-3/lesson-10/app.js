"use strict";


let wrapper = document.querySelector('.wrapper');

// const text=document.createElement('h1');

//       text.innerHTML="LOREM LOREM LOREM";








// for (let i = 0; i <= 10; i++) {

//    const div = document.createElement('div');
//    const title = document.createElement('h1');

//    div.setAttribute('class', 'text-danger');
//    title.setAttribute('class', 'text-center bg-info my-2 p-3 uniqe');

//    div.innerHTML = `<p>LOREM IPSUM</p>`;
//    title.innerHTML = 'lorem ipsum dolor set'+i;

//    wrapper.appendChild(title);

//    console.log(div);
//    console.log(title);
// }





const news = [

   {
      img: "https://picsum.photos/id/133/320/240",
      title: 'world news lorem ipsum .. .',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto quas porro, enim libero numquam mollitia dolorem eaque non consequatur? Alias, eaque at quo eum eveniet aliquid, fugit fugiat, natus tenetur nobis porro nesciunt voluptatum! Id!',
      date: "2022.09.30"
   },
   {
      img: "https://picsum.photos/id/93/320/240",
      title: 'world news lorem ipsum .. .',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto quas porro, enim libero numquam mollitia dolorem eaque non consequatur? Alias, eaque at quo eum eveniet aliquid, fugit fugiat, natus tenetur nobis porro nesciunt voluptatum! Id!',
      date: "2022.09.30"
   },
   {
      img: "https://picsum.photos/id/13/320/240",
      title: 'world news lorem ipsum .. .',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto quas porro, enim libero numquam mollitia dolorem eaque non consequatur? Alias, eaque at quo eum eveniet aliquid, fugit fugiat, natus tenetur nobis porro nesciunt voluptatum! Id!',
      date: "2022.09.30"
   },
   {
      img: "https://picsum.photos/id/633/320/240",
      title: 'world news lorem ipsum .. .',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto quas porro, enim libero numquam mollitia dolorem eaque non consequatur? Alias, eaque at quo eum eveniet aliquid, fugit fugiat, natus tenetur nobis porro nesciunt voluptatum! Id!',
      date: "2022.09.30"
   },
   {
      img: "https://picsum.photos/id/233/320/240",
      title: 'world news lorem ipsum .. .',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto quas porro, enim libero numquam mollitia dolorem eaque non consequatur? Alias, eaque at quo eum eveniet aliquid, fugit fugiat, natus tenetur nobis porro nesciunt voluptatum! Id!',
      date: "2022.09.30"
   },
   {
      img: "https://picsum.photos/id/433/320/240",
      title: 'world news lorem ipsum .. .',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto quas porro, enim libero numquam mollitia dolorem eaque non consequatur? Alias, eaque at quo eum eveniet aliquid, fugit fugiat, natus tenetur nobis porro nesciunt voluptatum! Id!',
      date: "2022.09.30"
   },
   {
      img: "https://picsum.photos/id/123/320/240",
      title: 'world news lorem ipsum .. .',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto quas porro, enim libero numquam mollitia dolorem eaque non consequatur? Alias, eaque at quo eum eveniet aliquid, fugit fugiat, natus tenetur nobis porro nesciunt voluptatum! Id!',
      date: "2022.09.30"
   },
   {
      img: "https://picsum.photos/id/33/320/240",
      title: 'world news lorem ipsum .. .',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto quas porro, enim libero numquam mollitia dolorem eaque non consequatur? Alias, eaque at quo eum eveniet aliquid, fugit fugiat, natus tenetur nobis porro nesciunt voluptatum! Id!',
      date: "2022.09.30"
   },


   {
      img: "https://picsum.photos/id/133/320/240",
      title: 'world news lorem ipsum .. .',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto quas porro, enim libero numquam mollitia dolorem eaque non consequatur? Alias, eaque at quo eum eveniet aliquid, fugit fugiat, natus tenetur nobis porro nesciunt voluptatum! Id!',
      date: "2022.09.30"
   },
   {
      img: "https://picsum.photos/id/93/320/240",
      title: 'world news lorem ipsum .. .',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto quas porro, enim libero numquam mollitia dolorem eaque non consequatur? Alias, eaque at quo eum eveniet aliquid, fugit fugiat, natus tenetur nobis porro nesciunt voluptatum! Id!',
      date: "2022.09.30"
   },
   {
      img: "https://picsum.photos/id/13/320/240",
      title: 'world news lorem ipsum .. .',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto quas porro, enim libero numquam mollitia dolorem eaque non consequatur? Alias, eaque at quo eum eveniet aliquid, fugit fugiat, natus tenetur nobis porro nesciunt voluptatum! Id!',
      date: "2022.09.30"
   },
   {
      img: "https://picsum.photos/id/633/320/240",
      title: 'world news lorem ipsum .. .',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto quas porro, enim libero numquam mollitia dolorem eaque non consequatur? Alias, eaque at quo eum eveniet aliquid, fugit fugiat, natus tenetur nobis porro nesciunt voluptatum! Id!',
      date: "2022.09.30"
   },
   {
      img: "https://picsum.photos/id/233/320/240",
      title: 'world news lorem ipsum .. .',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto quas porro, enim libero numquam mollitia dolorem eaque non consequatur? Alias, eaque at quo eum eveniet aliquid, fugit fugiat, natus tenetur nobis porro nesciunt voluptatum! Id!',
      date: "2022.09.30"
   },
   {
      img: "https://picsum.photos/id/433/320/240",
      title: 'world news lorem ipsum .. .',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto quas porro, enim libero numquam mollitia dolorem eaque non consequatur? Alias, eaque at quo eum eveniet aliquid, fugit fugiat, natus tenetur nobis porro nesciunt voluptatum! Id!',
      date: "2022.09.30"
   },
   {
      img: "https://picsum.photos/id/123/320/240",
      title: 'world news lorem ipsum .. .',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto quas porro, enim libero numquam mollitia dolorem eaque non consequatur? Alias, eaque at quo eum eveniet aliquid, fugit fugiat, natus tenetur nobis porro nesciunt voluptatum! Id!',
      date: "2022.09.30"
   },
   {
      img: "https://picsum.photos/id/33/320/240",
      title: 'world news lorem ipsum .. .',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto quas porro, enim libero numquam mollitia dolorem eaque non consequatur? Alias, eaque at quo eum eveniet aliquid, fugit fugiat, natus tenetur nobis porro nesciunt voluptatum! Id!',
      date: "2022.09.30"
   },


];

let img = document.querySelector('#img');
let tt = document.querySelector('#tt');
let ds = document.querySelector('#ds');
let add = document.querySelector('.add');

add.addEventListener('click', () => {
   news.push({
      img: img.value,
      title: tt.value,
      description: ds.value,
      date: "2022.09.30"
   })

   console.log(news);
   for (let i = 0; i <= news.length; i++) {

      const card = document.createElement('div');

      card.setAttribute('class', 'card p-2 m-3 shadow w-25');

      card.innerHTML = `
      <img src="${news[i].img}" alt="rasm" class="w-25">
      <h2>${news[i].title}</h2>
      <p>${news[i].description}</p>
      `;
      wrapper.prepend(card);


   }
})






// for (let i = 0; i <= news.length; i++) {

//    const card = document.createElement('div');

//    card.setAttribute('class', 'card p-2 m-3 shadow w-25');

//    card.innerHTML = `
//    <img src="${news[i].img}" alt="rasm" class="w-25">
//    <h2>${news[i].title}</h2>
//    <p>${news[i].description}</p>
//    `;
//    wrapper.appendChild(card);


// }






const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const lang = ['javaScript', 'php', 'c++', 'java'];



// const data=array.filter((e,i,a)=>{
//    return e >= 6
// })

const filterLang = lang.filter((e) => {
   return e.length > 3
})

let filterlang = [];

for (let i = 0; i < lang.length; i++) {
   console.log();
   if (lang[i].length > 3) {
      filterlang.push(lang[i])
   }
}

console.log(filterlang);

// console.log(data);

console.log(filterLang);







// console.log(array);
// array.push(11);

// console.log(array);


// array.forEach(function (elements, index, array) {
//    console.log(array);
// })

// let array2=['a',"b","c","d","e"];



// // let data=array2.forEach( (elements, index, array) => {
// //   if(index%2==0){
// //     return elements
// //   }
// // })

// let data=array2.map( (elements, index, array) => {

//      return elements

//  })


// console.log(data);

// for (let i = 0; i < array.length; i++) {
//    if(i%2==0){
//       console.log(array[i]);
//    }
// }
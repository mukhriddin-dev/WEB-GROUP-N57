"use strict";

// {
//    "title": "Patton Oswalt: Annihilation",
//    "year": 2017,
//    "categories": [
//      "Uncategorized"
//    ],
//    "imdbId": "tt7026230",
//    "imdbRating": 7.4,
//    "runtime": 66,
//    "language": "English",
//    "youtubeId": "4hZi5QaMBFc",
//    "summary": "Patton Oswald, despite a personal tragedy, produces his best standup yet. Focusing on the tribulations of the Trump era and life after the loss of a loved one, Patton Oswald continues his journey to contribute joy to the world.",
//    "smallThumbnail": "http://i3.ytimg.com/vi/4hZi5QaMBFc/hqdefault.jpg",
//    "bigThumbnail": "http://i3.ytimg.com/vi/4hZi5QaMBFc/maxresdefault.jpg"
//  }

const data = movies.splice(0, 50);

const newData = data.map((item, index, array) => {
   return {
      title: item.title,
      year: item.year,
      category: item.categories,
      movieId: item.imdbId,
      rating: item.imdbRating,
      time: item.runtime,
      language: item.language,
      yotube: `https://youtube.com/embed/${item.youtubeId}`,
      description: item.summary,
      hdpic: item.smallThumbnail,
      maxpic: item.bigThumbnail,
   };
});

console.log(newData);

function renderData(data){
   newData.forEach((e) => {
      const card = createElement(
         "div",
         "card shadow box",
         `
      <img src="${e.hdpic}" alt="${e.title}" class="card-top-img">
   <div class="card-body">
   <h3>${e.title}</h3>
   <ul>
   <li>${e.year}</li>
   <li>${e.category}</li>
   <li>${e.language}</li>
   <li>${Math.floor(e.time / 60)} soat ${e.time % 60} daqiqa</li>
   </ul>
   
   <a href="${e.yotube}" class="btn-danger btn">Videoni ko'rish</a>
   </div>
      `
      );
   
      $(".wrapper").appendChild(card);
   });
   
}

renderData(data)

const categories = [];

function category() {
   newData.forEach((item) => {
      item.category.forEach((e) => {
         if(!categories.includes(e)){
            categories.push(e)
         }
      })
   })
}

category()

console.log(categories);

categories.forEach((e)=>{
   const option=createElement('option', 'option-item', e);
   $("#category").appendChild(option);
})





// const numbers=[1,2,3,4,5,6,7,7,7,8,9,9,10,1,1,1,1,1];
// const dot=[];


// numbers.forEach((item)=>{
//    if(!dot.includes(item)){
//       dot.push(item)
//    }else{
//       console.log("no");
//    }
   
// })

// console.log(dot);
const data = movies.splice(0, 1000);

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

// =============== DYNAMIC  RENDER ELEMENTS =========////

function getRenderData() {
   newData.forEach((movie) => {



      const movieCard = createElement(
         "div",
         "card shadow",
         `
   <img src=${movie.hdpic} class="card-img-top" alt=${movie.imdbId}>
   <div class="card-body">
     <h5 class="card-title">${movie.title}</h5>
     <ul>
   <li> <strong>Year : ${movie.year}</strong> </li>
   <li> <strong> Language :  ${movie.language} </strong></li>
   <li><strong>category: ${movie.category}</strong></li>
   <li><strong>Rating : ${movie.rating}</strong></li>
   <li><strong>Time : ${Math.floor(movie.time/60)} H ${(movie.time%60)}m </strong></li>
    </ul>
     <a href=${movie.yotube} class="btn btn-danger" target="_blank">Youtube watch ... </a>
   </div>
   `);



      $('.wrapper').appendChild(movieCard)
   });


}

getRenderData()

/// =============== DYNAMIC  RENDER ELEMENTS END =========





// =============== DYNAMIC  RENDER CATEGORIES =========
function dynamicCategory() {
   let option = [];
   newData.forEach((item) => {
      item.category.forEach((movies) => {
         if (!option.includes(movies)) {
            option.push(movies)
         }
      })
   })
   option.sort()
   option.forEach((item) => {
      const option = createElement('option', "item", item);
      $('#select').appendChild(option)
   })
}

dynamicCategory()

// =============== DYNAMIC  RENDER CATEGORIES end =========


//=========== FIND MOVIE START ===========
let findMovie = function (search, rating , selected) {
   console.log(selected);
   return newData.filter((item) => {
  
  let ct=item.category.filter(item=>{
     return item.toLowerCase()===selected;
  })



      return item.title.match(search) && item.rating >= rating && ct.join('').toLowerCase()===selected;  
   })


}

console.log(findMovie());


//=========== FIND MOVIE END ===========//

$('.btn-primary').addEventListener('click', () => {
   $('.wrapper').innerHTML=`<div class="text-center">
   <div class="spinner-border" role="status">
     <span class="visually-hidden">Loading...</span>
   </div>
 </div>`;
   let texts = $('#search').value.trim();
   let rating = $('#rating').value;
   let category=$('#select').value.toLowerCase();
   console.log(category);
   const regexp = new RegExp(texts, "gi");
   let result = findMovie(regexp, rating, category);

   if (result.length === 0) {
      $('#res').innerHTML = "Natija 0 ta"
   } else {
      $('#res').innerHTML = `${result.length}`
   }  

   console.log(result);
   setTimeout(()=>{
      searchRender(result)
   },100)
})

//=========== RENDER SEARCH RESULT ===========//

function searchRender(data) {
   $('.wrapper').innerHTML = "";
   data.forEach((movie) => {

      const movieCard = createElement(
         "div",
         "card shadow",
         `
   <img src=${movie.hdpic} class="card-img-top" alt=${movie.imdbId}>
   <div class="card-body">
     <h5 class="card-title">${movie.title}</h5>
     <ul>
   <li> <strong>Year : ${movie.year}</strong> </li>
   <li> <strong> Language :  ${movie.language} </strong></li>
   <li><strong>category: ${movie.category}</strong></li>
   <li><strong>Rating : ${movie.rating}</strong></li>
   <li><strong>Time : ${Math.floor(movie.time/60)} H ${(movie.time%60)}m </strong></li>
    </ul>
     <a href=${movie.yotube} class="btn btn-danger" target="_blank">Youtube watch ... </a>
   </div>
   `);



      $('.wrapper').appendChild(movieCard)

   });

}
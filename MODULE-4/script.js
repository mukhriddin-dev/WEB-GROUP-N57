"use strict";

let BASE_URL = "http://localhost:8080";

// ------------------------DATA ----------------------------------------------------------------
const getAlldata = async () => {
   const response = await fetch(`${BASE_URL}/products`);
   const data = await response.json();

   if (response) {
      $(".wrapper").innerHTML = "";
      dataRender(data);
   } else {
      $(".wrapper").innerHTML = `<h1 class="alert alert-danger">NOT FOUND 404</h1>`
   }

};

getAlldata();

// ----  render functions --------------------------------

function dataRender(data = []) {


   data.length > 0 ? data.forEach((e) => {
      const tr = createElement(
         "tr",
         "tr",
         `
      <tr class="text-center">
      <td>${e.id}</td> <td>${e.isname}</td> <td>${e.price}$</td> <td>${e.date}</td> <td>
      <button class="btn btn-primary" data-edit="${e.id}"><i class="bi bi-pencil-square"   data-edit="${e.id}" ></i></button></td>
      <td><button class="btn btn-danger" data-del="${e.id}" ><i class="bi bi-trash3-fill" data-del="${e.id}" ></i></button></td>
    </tr>
      `
      );

      $(".wrapper").appendChild(tr);
   }) : $(".table").innerHTML = "<h3 class='w-100 pt-3 alert alert-danger'>Hechqanday ma'lumot yo'q</h3>"
}

// ----  render functions  end -------------------------------

function postData() {
   $('.table').innerHTML = `<span class="loader"></span>`;

   const isName = $("#name").value.trim();
   const isPrice = $("#price").value;
   const isDate = $("#date").value;

   setTimeout(() => {

      fetch(`${BASE_URL}/products`, {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({
            isname: isName,
            price: isPrice,
            date: isDate,
         }),
      });


   }, 1000)

}

// ----  ADD NEW PRODUCT -------------------------------
$(".btn-success").addEventListener("click", (e) => {
  
   const isName = $("#name").value.trim();
   const isPrice = $("#price").value;
   const isDate = $("#date").value;

   let check = {
      inputOne: isName.length === 0,
      inputTwo: isPrice.length === 0,
      inputThree: isDate.length === 0,
   }

   console.log(check);

   if (check.inputOne || check.inputTwo || check.inputThree) {
      $('.toast-s').innerHTML=`<small>Iltimos maydonni to'ldiring</small>`
      $('.toast-s').classList.remove('show-toast');

      setTimeout(()=>{
         $('.toast-s').classList.add('show-toast');
      },1000)
   }else{
      postData();
      $('.toast-s').classList.remove('show-toast','alert-danger');
   }
      $('.toast-s').innerHTML=`<small>Succesfull aded</small>`
      $('.toast-s').classList.add('alert-success');
     
      

   
});

// ----  DELETE PRODUCTS -------------------------------
$(".wrapper").addEventListener("click", (e) => {
   if (
      e.target.classList.contains("btn-danger") ||
      e.target.classList.contains("bi-trash3-fill")
   ) {
      const id = e.target.getAttribute("data-del");

      fetch(`${BASE_URL}/products/${id}`, {
         method: "DELETE",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({}),
      });

      $('.toast-s').innerHTML=`<small>O'chirildi</small>`
      $('.toast-s').classList.remove('show-toast');

      setTimeout(()=>{
         $('.toast-s').classList.add('show-toast');
      },1000)
   }
});

// ----  DELETE PRODUCTS -------------------------------

const productItem = async function (id) {
   const response = await fetch(`${BASE_URL}/products/${id}`);
   const {
      isname,
      price,
      date
   } = await response.json();

   return {
      isname,
      price,
      date,
   };
};

$(".wrapper").addEventListener("click", (e) => {
   if (
      e.target.classList.contains("btn-primary") ||
      e.target.classList.contains("bi-pencil-square")
   ) {
      const id = e.target.getAttribute("data-edit");
      localStorage.setItem("editID", id)

      $(".modal-window").classList.remove("d-none");

      // let isName = $('#setname').value;
      // let isPrice = $('#setprice').value;
      // let isDate = $('#setdate').value;

      let result = productItem(id);

      result.then((data) => {
         console.log(data.isname);
         $("#setname").value = data.isname;
         $("#setprice").value = data.price;
         $("#setdate").value = data.date;
      });


   }
});

function editData() {
   const id = localStorage.getItem('editID');
   console.log(id);
   const isName = $("#setname").value.trim();
   const isPrice = $("#setprice").value;
   const isDate = $("#setdate").value;

   fetch(`${BASE_URL}/products/${id}`, {
      method: "PUT",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify({
         isname: isName,
         price: isPrice,
         date: isDate,
      }),
   });
}



$(".set-btn").addEventListener("click", () => {
   

   const isName = $("#setname").value.trim();
   const isPrice = $("#setprice").value;
   const isDate = $("#setdate").value;

   let check = {
      inputOne: isName.length === 0,
      inputTwo: isPrice.length === 0,
      inputThree: isDate.length === 0,
   }

   console.log(check);

   if (check.inputOne || check.inputTwo || check.inputThree) {
      alert('please fill inputs');
   }else{
         
   }


   setTimeout(() => {
      hideModal()
   }, 2000)
});



function hideModal() {
   $(".modal-window").classList.add("d-none");
}


$(".close").addEventListener("click", () => {
   hideModal();
});
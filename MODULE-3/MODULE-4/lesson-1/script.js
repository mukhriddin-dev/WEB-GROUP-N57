function getData(data = []) {
   return data
}

console.log(getData(12));
document.body.style.color = "red";
console.log(document.body.style);

for (let i = 0; i <= 20; i++) {
   let div = document.createElement('div');
   div.classList.add('card');
   div.innerHTML = "<p>lorem</p>"
   document.body.appendChild(div)
}


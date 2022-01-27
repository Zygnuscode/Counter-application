let count = 0;
let countEl = document.getElementById("count-el")
let saveEL = document.getElementById("Previous")
//increment function

function increment() {
count += 1;
countEl.innerText = count;
console.log(count);
}

//save function

function save() {
   let logStr = count + " - "
   saveEL.textContent += logStr
   countEl.innerText = 0
}


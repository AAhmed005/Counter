count = 0
countEl = document.getElementById("count-el")
entrieEl = document.getElementById("entrie-el")
entrieEl.innerText = "Previous entries:      "

function increment(){
   count += 1
   countEl.innerText = count
}

function decrement(){
   if (count <= 0){
      count = 0
      countEl.innerText = count
   } else {
      count -= 1    
      countEl.innerText = count
   }
}

function reset(){
   count = 0
   countEl.innerText = count
}

function save(){
   entrieEl.textContent += count + " - "
   count = 0
   countEl.innerText = count
}
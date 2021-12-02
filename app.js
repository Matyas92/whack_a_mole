

const table = document.querySelector("table")


const ths = document.querySelectorAll("th")
const info = document.querySelector(".info")
const timer = document.querySelector(".timer")

const result = document.querySelector(".result")
const resultText = document.querySelector(".resultText")
const restart = document.querySelector(".restart")
const zeit = 60;

var counter = 0;
info.textContent = "Your points: "+ counter;
timer.innerHTML ="Time: " + zeit

var movingMole = null

moleTorepeat()

ths.forEach(th => {
  th.addEventListener("mousedown", function () {
   
    
   if( th.classList == "mole"){
    counter++
    info.textContent = "Your points: " + counter;
    }
    })
})


function callMole(){
  ths.forEach(th => {
    th.classList.remove("mole")
  
    })
    
    ths[randomNum()].classList.add("mole")

}

function moleTorepeat(){

  movingMole = setInterval(callMole,500)
}


function randomNum(){

  var randomNum = Math.floor(Math.random() * 9)
  return randomNum
}



function CD(){

  zeit--
  timer.innerHTML ="Time: " + zeit

  if (zeit == 0){
  clearInterval(cDTimer)
  clearInterval(movingMole)
  result.style.display = "block";
  resultText.textContent = "Your points are: " + counter;

  table.style.display = "none";
  info.style.display = "none";
  timer.style.display = "none";

  }
}

restart.addEventListener("click", function(){

restartGame();

})

function restartGame(){
location.reload()

}

var cDTimer = setInterval(CD,1000)

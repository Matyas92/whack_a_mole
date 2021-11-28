

var table = document.querySelector("table")
var one = document.querySelector(".one")
var two = document.querySelector(".two")
var three = document.querySelector(".three")
var four = document.querySelector(".four")
var five = document.querySelector(".five")
var six = document.querySelector(".six")
var seven = document.querySelector(".seven")
var eight = document.querySelector(".eight")
var nine = document.querySelector(".nine")

var ths = document.querySelectorAll("th")
var info = document.querySelector(".info")
var timer = document.querySelector(".timer")

var result = document.querySelector(".result")
var resultText = document.querySelector(".resultText")
var restart = document.querySelector(".restart")
var zeit = 60;

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
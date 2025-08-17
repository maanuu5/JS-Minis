const button = document.querySelectorAll(".button")
const body = document.querySelector("body")


button.forEach((buttonselceted)=>{
buttonselceted.addEventListener('click',(event)=>{
    body.style.backgroundColor = event.target.id;
})
})



document.getElementById('buttoncall').addEventListener('click', function () {
    
const inputheight = parseInt(document.querySelector('#height').value)
const inputweight = parseInt(document.querySelector('#weight').value)
const result = document.querySelector('#result')


if (!inputheight || !inputweight || inputheight <= 0 || inputweight <= 0) {

  result.textContent = "Please enter valid height and weight.";
  
} else {
  const heightInMeters = inputheight / 100;
  const bmi = inputweight / (heightInMeters * heightInMeters);
  result.textContent = `Your BMI is ${bmi.toFixed(2)}`;
  result.style.color = "white";

  if(bmi<18){
    document.querySelector('#conclusion').innerHTML = "UNDER-WEIGHT"
  } else if(bmi>18 && bmi<25){
    document.querySelector('#conclusion').innerHTML = "NORMAL-RANGE"
  } else if(bmi>25){
    document.querySelector('#conclusion').innerHTML = "OVER-WEIGHT"
  }

}});


const clock = document.querySelector('#clock')
setInterval(()=>{
  let date = new Date;
  clock.innerHTML=date.toLocaleTimeString()
},1000)


const randomnumber = parseInt(Math.random()*100 + 1)
const submitbutton = document.querySelector('#subt')
const userinput = document.querySelector('#guess')
const previousguesses = document.querySelector('.guesses')
const remainingguesses = document.querySelector('.lastresult')
const lowORhigh = document.querySelector('.loworhigh')

const p = document.createElement('p')
let previousguessARRAY = []
let numberguessremaining = 10
let playgame = true;

if(playgame){
  submitbutton.addEventListener('click',(e)=>{
  e.preventDefault()
  const guess = parseInt(userinput.value)
  validateguess(guess)
  userinput.value = '';  
  })
}

function validateguess(userguess){
if(isNaN(userguess)){
  alert("Enter Valid NUMBER only")
}else if(userguess<1){
  alert("Enter Greater Than 1 or equal")
}else if(userguess>100){
  alert("Enter Less Than 100")
}

previousguessARRAY.push(userguess)
numberguessremaining--
displayResults(userguess)
displayMessage()

}

function displayResults(userguess) {
  if (userguess === randomnumber) {
    lowORhigh.textContent = "Congratulations! You guessed the right number!";
  } else if (userguess < randomnumber) {
    lowORhigh.textContent = "Too low!";
  } else {
    lowORhigh.textContent = "Too high!";
  }
}



function displayMessage(){

remainingguesses.textContent = `${numberguessremaining}`

previousguesses.textContent = `${previousguessARRAY.join(',')}`

if (numberguessremaining === 0) {
    lowORhigh.textContent = `Game Over! The number was ${randomnumber}`;
  }
}







const randomcolor = ()=>{
  const hex = '0123456789ABCDEF';
  let color = '#';
  for(let i = 0;i<6;i++){
    color+= hex[Math.floor(Math.random()*16)]
  }
  return color;
}

const buttonstart = document.getElementById('buttonrandomstart')

const buttonstop = document.getElementById('buttonrandomstop')


let randomegen;

buttonstart.addEventListener('click',()=>{
if(!randomegen){
   randomegen = setInterval(()=>{
    document.body.style.backgroundColor = randomcolor()
  },600)
}

})

buttonstop.addEventListener('click',()=>{
clearInterval(randomegen)
randomegen = null;
})


const names = document.querySelectorAll('.n1');
const email = document.querySelectorAll('.emails');
const images = document.querySelectorAll('.img');
buttonfetchfunctionality = document.getElementById('gofetch')



function fetchinglogic() {
  fetch("https://randomuser.me/api/?results=3")
    .then((rawdata) => {
      return rawdata.json();
    })
    .then((data) => {
      data.results.forEach((hello, index) => {
        names[index].textContent = `${hello.name.first} ${hello.name.last}`;
        email[index].textContent = `${hello.email}`;
        images[index].src = `${hello.picture.large}`;
      });
    });

}


fetchinglogic()


buttonfetchfunctionality.addEventListener('click',()=>{
  fetchinglogic()
})


const inputtodo = document.getElementById('inputtodotodo')
const buttontodo = document.getElementById('buttontodotodo')
const todolist = document.getElementById('todolist')



buttontodo.addEventListener('click',()=>{

const uservalurtodo = inputtodo.value;

const spanel = document.createElement("span")
spanel.textContent = uservalurtodo

const buttonel = document.createElement("button")
buttonel.textContent = "Delete"

const divel  = document.createElement("div")
divel.appendChild(spanel)
divel.appendChild(buttonel)
divel.classList.add("tododivclass")

buttonel.addEventListener('click', () => {
divel.remove(); 
});


document.getElementById('todolist').appendChild(divel)

inputtodo.value = "";

})






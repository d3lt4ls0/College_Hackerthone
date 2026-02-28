let challengeNumber = 1;
let timer = 60;
let started = false;
let startTime;

let codeDisplay = document.getElementById("code");
let input = document.getElementById("input");

let selected;

// ================= LOAD CHALLENGE =================
function loadNewChallenge(){

selected =
snippets[Math.floor(Math.random()*snippets.length)];

codeDisplay.innerText = selected;

input.value = "";
input.disabled = false;

document.getElementById("result")
.innerText = "Challenge " + challengeNumber;

started = false;

challengeNumber++;
}

loadNewChallenge();


// ================= TYPING EVENT =================
input.addEventListener("input", () => {

if(!started){
started = true;
startTime = new Date();
startTimer();
}

checkTyping();

});


// ================= CHECK TYPING =================
function checkTyping(){

let typed = input.value;
let correct = 0;
let html = "";

for(let i=0;i<selected.length;i++){

if(typed[i] == null){
html += selected[i];
}
else if(typed[i] === selected[i]){
html += `<span class="correct">${selected[i]}</span>`;
correct++;
}
else{
html += `<span class="wrong">${selected[i]}</span>`;
}

}

codeDisplay.innerHTML = html;

let timePassed =
(new Date() - startTime)/60000;

let wpm =
Math.round((typed.length/5)/timePassed);

document.getElementById("wpm").innerText =
"WPM: " + (wpm || 0);

}


// ================= TIMER =================
function startTimer(){

let interval = setInterval(()=>{

timer--;

document.getElementById("timer").innerText =
"Time: " + timer;

if(timer <= 0){
clearInterval(interval);
finishGame();
}

},1000);

}


// ================= SUBMIT / FINISH =================
function finishGame(){

input.disabled = true;

let typed = input.value;
let correct = 0;

for(let i=0;i<typed.length;i++){
if(typed[i] === selected[i]){
correct++;
}
}

let accuracy =
Math.floor((correct/selected.length)*100);

document.getElementById("result").innerText =
"Accuracy: " + accuracy + "% ✅";

setTimeout(()=>{
loadNewChallenge();
},1500);

}


// ================= BUTTON EVENT =================
document.getElementById("submitBtn")
.addEventListener("click", finishGame);
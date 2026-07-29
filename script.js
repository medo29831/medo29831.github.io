function searchLanguage() {

    let input = document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    if (input === "python") {
        window.location.href = "python.html";
    }

    else if (input === "c++" || input === "cpp") {
        window.location.href = "cpp.html";
    }

    else if (input === "html") {
        window.location.href = "html.html";
    }

    else if (input === "css") {
        window.location.href = "css.html";
    }

    else if (input === "javascript" || input === "js") {
        window.location.href = "javascript.html";
    }

    else {
        alert("Language not found!");
    }    
}
let slides=document.querySelectorAll(".slide");

let currentSlide=0;

function showSlide(index){

slides.forEach(slide=>slide.classList.remove("active"));

slides[index].classList.add("active");

}

document.querySelector(".next").onclick=function(){

currentSlide++;

if(currentSlide>=slides.length){

currentSlide=0;

}

showSlide(currentSlide);

}

document.querySelector(".prev").onclick=function(){

currentSlide--;

if(currentSlide<0){

currentSlide=slides.length-1;

}

showSlide(currentSlide);

}

setInterval(function(){

currentSlide++;

if(currentSlide>=slides.length){

currentSlide=0;

}

showSlide(currentSlide);

},5000);
function checkAnswer(answer){

    if(answer==="print"){

        document.getElementById("result").innerHTML="✅ Correct!";
        document.getElementById("result").style.color="lime";

    }else{

        document.getElementById("result").innerHTML="❌ Wrong! Try Again.";
        document.getElementById("result").style.color="red";

    }

}
const tips = [

"Practice coding every day.",
"Read other people's code.",
"Debug your code patiently.",
"Keep learning new technologies.",
"If you want to be happy, speak little and ignore much.",
"Never stop practicing.",
"Write clean and organized code.",
"Don't trust your memory, write everything down on paper.",
" Don't let the phone interrupt the beautiful moments of your life. It was created for your convenience, not for the convenience of the caller.",
"Never say that you do not have enough time, for all the great people had a day of 24 hours and no more.",
];

const today = new Date().getDate();

const tip = tips[today % tips.length];

document.getElementById("dailyTip").innerHTML = tip;
function copyCode(id) {
    const code = document.getElementById(id).innerText;
    navigator.clipboard.writeText(code);
    alert("Code copied!");
}

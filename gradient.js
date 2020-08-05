var css=document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body= document.querySelector("body");
var button= document.querySelector(".switch");

var right= true;
button.addEventListener("click",function(){
    right=!right;
    if(right===true){
        changeColorRight();
    }
    else if(right === false){
        changeColorBottom();
    }
});



color1.addEventListener("input", changeBackground);
color2.addEventListener("input", changeBackground);


function changeBackground(){
    if(right=== true){
        changeColorRight();
    }
    else if(right===false){
        changeColorBottom();
    }
    css.textContent = body.style.background +";";
}
function changeColorRight(){
    body.style.background="linear-gradient(to right,"+ color1.value+"," + color2.value +")";
    css.textContent = body.style.background +";";
}

function changeColorBottom(){
    body.style.background="linear-gradient(to bottom ,"+ color1.value+"," + color2.value +")"
    css.textContent = body.style.background +";";
}
console.log(body.style.background);

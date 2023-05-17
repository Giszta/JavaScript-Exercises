
/* ------------METODA 1------------ */
// let count = 0;

// const value = document.querySelector("#value");
// const increase = document.getElementById("increase");
// const reset = document.getElementById("reset");
// const decrease = document.getElementById("decrease");

// increase.addEventListener("click", function() {
//     value.textContent= ++count;
// })

// decrease.addEventListener("click", function(){
//     value.textContent = --count;
// })

// reset.addEventListener("click", function() {
//     value.textContent = count=0;
// })


/* ------------METODA 2------------ */
let count = 0

document.getElementById("increase").onclick = function(){
    document.getElementById("value").innerHTML = count +=1;
    color();
}

document.getElementById("decrease").onclick = function(){
    document.getElementById("value").innerHTML = count -=1;
    color();
}

document.getElementById("reset").onclick = function(){
    document.getElementById("value").innerHTML = count = 0;
    color();
}


function color(){
if (count > 0) {
    document.getElementById("value").style.color = "green";
} else if (count < 0) {
    document.getElementById("value").style.color = "red";
} else {
    document.getElementById("value").style.color = "black";
}}



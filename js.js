var btn = document.getElementById("night");
var body = document.getElementById("body");
// function night() {
//   if(btn.innerText === "NIGHT"){
// btn.innerText = "DAY";
// body.style.backgroundColor = "black";
// btn.style.backgroundColor = "white";
// btn.style.color = "black";
//   }
//   else{
//     btn.innerText = "NIGHT";
// body.style.backgroundColor = "white";
// btn.style.backgroundColor = "black";
// btn.style.color = "white";
//   }
// }
// initiallizing colors
body.classList.add("body-night");
btn.classList.add("day");

function night(){

    if(btn.innerText === "NIGHT"){
        btn.classList.add("night");
        btn.innerText = "DAY";
        body.classList.add("body-day");
        body.classList.remove('body-night');
        btn.classList.remove('day');

    }else{
        btn.classList.add("day");
        btn.innerText = "NIGHT";
        body.classList.add("body-night");
        body.classList.remove('body-day');
        btn.classList.remove('night');
        
    }
}
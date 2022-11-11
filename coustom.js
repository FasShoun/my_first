"use strict";
const head = document.getElementById("h1");
setInterval(()=>{
    head.style.color = "green";
    head.style.backgroundColor = "purple";
    head.style.fontSize = "3.5gitrem";
},2000);
setInterval(()=>{
    head.style.color = "purple";
    head.style.backgroundColor = "green";
    head.style.fontSize = "2rem";

},4000)
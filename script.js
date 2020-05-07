const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

//Contains the degrees for each arm
let hrPosition = 20;
let minPosition = 130;
let secPosition = 267;

//Aplying the degrees into the inline css style
HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";

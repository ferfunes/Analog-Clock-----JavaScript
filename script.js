window.setInterval(runTheClock, 1000);

//Selectors
const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

function runTheClock() {
  //Time
  //Getting actual time
  let date = new Date();
  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  //Contains the degrees for each arm
  let hrPosition = hrToDegrees(hr) + minToDegrees(min) / 12;
  let minPosition = minToDegrees(min) + secToDegrees(sec) / 60;
  let secPosition = secToDegrees(sec);

  //Converting Sec to Deg
  function secToDegrees(sec) {
    return (sec * 360) / 60;
  }

  // Converting Min to Deg
  function minToDegrees(min) {
    return (min * 360) / 60;
  }

  // Converting Hr to Deg
  function hrToDegrees(hr) {
    return (hr * 360) / 12;
  }

  //Aplying the degrees into the inline css style
  HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
  MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
  SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}

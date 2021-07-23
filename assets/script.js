console.log(window.innerWidth);

const todaysDate = moment();
document.getElementById("currentDay").innerHTML = todaysDate.format("dddd, MMMM Do");
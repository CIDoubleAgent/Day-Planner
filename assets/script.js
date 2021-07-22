console.log(window.innerWidth);
console.log(dayjs());

const todaysDate = dayjs().format("dddd, MMMM DD");

console.log(todaysDate);

document.getElementById("currentDay").innerHTML = todaysDate;
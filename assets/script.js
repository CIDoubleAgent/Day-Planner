const currentDayEl = $("#currentDay");
const currentTime = moment();

function displayTime() {
    var rightNow = moment().format('dddd, MMMM Do');
    currentDayEl.text(rightNow);
}

setInterval(displayTime, 1000);
  
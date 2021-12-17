
// let rightNow = moment().format('ddd, MMM Do');
// let timer = document.getElementById("timer");
// timer.innerHTML = rightNow

let rightNow = moment().format('ddd, MMM Do');
let timer = $('#timer');
timer.text(rightNow)

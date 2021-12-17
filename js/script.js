// var timeBLock = $('#time-block')

// let timeBlock= document.getElementById("time-block"); 
// console.log(timeBlock);

// timeBlock.textContent = "Hello Irvens";
//  body.appendChild(timeBlock);
 
// let container = $('.container');

// let timeBlock = $('#time-block'); 

// timeBlock.text('Hello Irvens'); 

// container.append(timeBlock); 

var rightNow = moment().format('ddd, MMM Do');
var timer = document.getElementById("timer");
console.log(timer);
timer.innerHTML = rightNow

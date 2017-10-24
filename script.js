// options
var blockLength = 10;
var dayLength = 24;

// how many blocks in a day (defined in options)
var totalBlocks = (dayLength * 60) / blockLength

// get the div I want to put elements into
var clock = document.getElementById('clock');

// get the time
var time = getTime();

// draw the blocks once
drawBlocks();

// update the clock every second
setInterval(function() {
  time = getTime();
  updateBlocks(time);
  console.log(time)
}, 1000)

// get the current time
function getTime() {
  var date = new Date();
  var hours = date.getHours();
  var mins = date.getMinutes();
  // work out what ten min block we're in right now
  var currentBlock = (mins + (hours * 60)) / blockLength;
  return currentBlock;
}

function drawBlocks() {
  // for each block run some code
  for (var i = 0; i < totalBlocks; i++) {
    // create a div,
    var div = document.createElement("div");
    updateBlock(div, i)
    // draw this div in the clock div
    clock.appendChild(div);
  }
}

function updateBlock(div, i) {
  if (i <= time-1) {
    div.style.opacity = "0.2";
  } else {
    div.style.opacity = "1";
  }
}

function updateBlocks(time) {
  for (var i = 0; i < totalBlocks; i++) {
    var div = clock.childNodes[i];
    updateBlock(div, i);
  }
}

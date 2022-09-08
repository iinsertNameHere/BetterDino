b = Runner.instance_.clearCanvas;
window.addEventListener("keydown", checkKeyPressed, false); function checkKeyPressed(l) { if (l.keyCode == "68" ) {drawline()}};
function drawlaser() {
   if (Runner.instance_.horizon.obstacles.length>0){
      Runner.instance_.clearCanvas=function(){};
      Runner.instance_.canvasCtx.beginPath();
      Runner.instance_.canvasCtx.moveTo(Runner.instance_.tRex.xPos+23,Runner.instance_.tRex.yPos+20);
      Runner.instance_.canvasCtx.lineTo(Runner.instance_.horizon.obstacles[0].xPos+10,Runner.instance_.horizon.obstacles[0].yPos+10);
      Runner.instance_.canvasCtx.stroke();
      setTimeout(function(){Runner.instance_.clearCanvas = b;}, 35);
      Runner.instance_.horizon.obstacles = [];
   }
}

function godmodeon(){
   Runner.prototype.gameOver = function(){};
   console.log('GodMode: On');
}

function godmodeoff(){
   Runner.prototype.gameOver = Runner.prototype.oGameOver;
   console.log('GodMode: Off');
}

function setspeed(){
   var speed = parseInt(prompt('Enter Speed Value:', '0'));
   Runner.instance_.setSpeed(speed);
   console.log('Changed Speed');
}

function resetspeed(){
   Runner.instance_.setSpeed(Runner.instance_.oSpeed);
   console.log('SetSpeed: Normal');
}

Runner.prototype.oGameOver = Runner.prototype.gameOver;
Runner.instance_.oSpeed = Runner.instance_.currentSpeed;

$('body').append("<style>#top {position: fixed;top: 0;left: 0;z-index: 999;width: 100%;height: 23px;}</style>")
$('html').append(
   "<div id='top'>" +
   "<button onClick='godmodeon()'>GodMode On</button>" +
   "<button onClick='godmodeoff()'>GodMode Off</button>" +
   "<button onClick='setspeed()'>Set Speed</button>" +
   "<button onClick='resetspeed()'>Reset Speed</button>" +
   "</div>"
);

alert('BetterDino Loaded!');

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

Runner.prototype.oGameOver = Runner.prototype.gameOver;
Runner.instance_.oSpeed = Runner.instance_.currentSpeed;

$('body').append("<p><a href='javascript:(function(){Runner.prototype.gameOver = Runner.prototype.oGameOver;console.log('GoodMode: Off');})()'>GoodMode Off</a></p>");
$('body').append("<p><a href='javascript:(function(){var speed = parseInt(prompt('Enter Speed Value:', '0'));Runner.instance_.setSpeed(speed);console.log('Changed Speed');})()'>Set Speed</a></p>");
$('body').append("<p><a href='javascript:(function(){Runner.instance_.setSpeed(Runner.instance_.oSpeed);console.log('SetSpeed: Normal');})()'>Reset Speed</a></p>");

alert('Setup Finished!');

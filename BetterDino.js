b = Runner.instance_.clearCanvas;
window.addEventListener("keydown", checkKeyPressed, false); function checkKeyPressed(l) { if (l.keyCode == "68" ) {drawlaser()}};

Runner.prototype.oGameOver = Runner.prototype.gameOver;
Runner.instance_.oSpeed = Runner.instance_.currentSpeed;

$('body').append(
"<script id='betterdino_def'>" +
"function drawlaser() {" +
"if (Runner.instance_.horizon.obstacles.length>0){" +
"Runner.instance_.clearCanvas=function(){};" +
"Runner.instance_.canvasCtx.beginPath();" +
"Runner.instance_.canvasCtx.moveTo(Runner.instance_.tRex.xPos+23,Runner.instance_.tRex.yPos+20);" +
"Runner.instance_.canvasCtx.lineTo(Runner.instance_.horizon.obstacles[0].xPos+10,Runner.instance_.horizon.obstacles[0].yPos+10);" +
"Runner.instance_.canvasCtx.stroke();" +
"setTimeout(function(){Runner.instance_.clearCanvas = b;}, 35);" +
"Runner.instance_.horizon.obstacles = [];" +
"}}" +
"</script>");

$('body').append(
"<script id='betterdino_functions'>" +
"function godmodeon(){" +
"Runner.prototype.gameOver = function(){};" +
"document.getElementById('godmodeStatus').innerText = 'On';" +
"console.log('GodMode: On');" +
"}" +
"function godmodeoff(){" +
"Runner.prototype.gameOver = Runner.prototype.oGameOver;" +
"document.getElementById('godmodeStatus').innerText = 'Off';" +
"console.log('GodMode: Off');" +
"}" +
"function setspeed(){" +
"var speed = parseInt(prompt('Enter Speed Value:', '0'));" +
"Runner.instance_.setSpeed(speed);" +
"document.getElementById('speedStatus').innerText = speed.toString();" +
"console.log('Changed Speed');" +
"}" +
"function resetspeed(){" +
"Runner.instance_.setSpeed(Runner.instance_.oSpeed);" +
"document.getElementById('speedStatus').innerText = 'Normal';" +
"console.log('SetSpeed: Normal');" +
"}" +
"</script>");

$('head').append(
"<style id='betterdino_style'>" +
"#top {" +
"position: fixed;" +
"top: 0;" +
"left: 0;" +
"z-index: 999;" +
"width: 100%;" +
"height: 23px;"+
"}\n" +
".nav-ul {" +
"list-style-type: none;"+
"margin: 0;" +
"padding: 0;" +
"overflow: hidden;" +
"background-color: #333;" +
"}\n" +
".nav-li {" +
"float: left;" +
"}\n" +
".nav-li a {" +
"display: block;" +
"color: white;" +
"text-align: center;" +
"padding: 14px 16px;" +
"text-decoration: none;" +
"}\n" +
"nav.li a:hover {" +
"background-color: #111;" +
"}" +
"</style>");

$('body').append(
"<div id='top'>" +
"<ul class='nav-ul'>" +
"<li class='nac-li'><a onclick='godmodeon()'>GodMode On</a></li>" +
"<li class='nac-li'><a onclick='godmodeoff()'>GodMode Off</a><li>" +
"<li class='nac-li'><a onclick='setspeed()'>Set Speed</a><li>" +
"<li class='nac-li'><a onclick='resetspeed()'>Reset Speed</a><li>" +
"</ul>" +
"<p>Press D to shoot lasers!</p>" +
"<p>GodMode: <span id='godmodeStatus' style='color: blue'>Off</span></p>" +
"<p>Speed: <span id='speedStatus' style='color: blue'>Normal</span></p>" +
"</div>");

alert('BetterDino Loaded!');

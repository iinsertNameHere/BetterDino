var b = Runner.instance_.clearCanvas;
window.addEventListener("keydown", checkKeyPressed, false); function checkKeyPressed(l) { if (l.keyCode == "68" ) {drawlaser()}};

Runner.prototype.oGameOver = Runner.prototype.gameOver;
Runner.instance_.oSpeed = Runner.instance_.currentSpeed;
Runner.instance_.godmode = false;

$('body').append(
"<script id='betterdino_def'>" +
"function drawlaser() {" +
"if (Runner.instance_.horizon.obstacles.length>0){" +
"Runner.instance_.clearCanvas=function(){};" +
"Runner.instance_.canvasCtx.beginPath();" +
"Runner.instance_.canvasCtx.moveTo(Runner.instance_.tRex.xPos+23,Runner.instance_.tRex.yPos+20);" +
"Runner.instance_.canvasCtx.lineTo(Runner.instance_.horizon.obstacles[0].xPos+10,Runner.instance_.horizon.obstacles[0].yPos+10);" +
"Runner.instance_.canvasCtx.strokeStyle = 'Red';" +
"Runner.instance_.canvasCtx.stroke();" +
"setTimeout(function(){Runner.instance_.clearCanvas = b;}, 35);" +
"Runner.instance_.horizon.obstacles = [];" +
"}}" +
"</script>");

$('body').append(
"<script id='betterdino_functions'>" +
"function godmode() {" +
"if (Runner.instance_.godmode) {" +
"Runner.instance_.godmode = false;" +
"_godmodeOff();" +
"document.getElementById('gms').innerText = 'Off';" +
"console.log('GodMode: Off');" +
"} else {" +
"Runner.instance_.godmode = true;" +
"_godmodeOn();" +
"document.getElementById('gms').innerText = 'On';" +
"console.log('GodMode: On');" +
"}}" +
"function _godmodeOn(){" +
"Runner.prototype.gameOver = function(){};" +
"}" +
"function _godmodeOff(){" +
"Runner.prototype.gameOver = Runner.prototype.oGameOver;" +
"}" +
"function setspeed(){" +
"var speed = parseInt(prompt('Enter Speed Value:', '0'));" +
"Runner.instance_.setSpeed(speed);" +
"console.log('SetSpeed: ' + speed.toString());" +
"}" +
"function resetplayer(){" +
"Runner.instance_.setSpeed(Runner.instance_.oSpeed);" +
"console.log('SetSpeed: Normal');" +
"}" +
"function gameover(){" +
"var gmOn = Runner.instance_.godmode;" +
"if (gmOn) {_godmodeOff();}" +
"Runner.instance_.gameOver();" +
"if (gmOn) {_godmodeOn();}"+
"console.log('GameOver');" +
"}" +
"function lightskin(){" +
"Runner.imageSprite.src = 'https://chromedino.com/assets/offline-sprite-1x.png'" +
"document.body.style.backgroundColor = '#f7f7f7';" +
"document.getElementById('d_info').style.color = '#333';" +
"}" +
"function darkskin(){" +
"Runner.imageSprite.src = 'https://chromedino.com/assets/offline-sprite-1x-black.png'" +
"document.body.style.backgroundColor = '#000';" +
"document.getElementById('d_info').style.color = 'white';" +
"}" +
"function coloredskin(){" +
"Runner.imageSprite.src = 'https://chromedino.com/assets/chromedino_coloured-1x.png'" +
"document.body.style.backgroundColor = '#f7f7f7';" +
"document.getElementById('d_info').style.color = '#333';" +
"}" +
"function marioskin(){" +
"Runner.imageSprite.src = 'https://chromedino.com/assets/offline-sprite-1x-mario.png'" +
"document.body.style.backgroundColor = '#75a5f9';" +
"document.getElementById('d_info').style.color = '#333';" +
"}" +
"function batmanskin(){" +
"Runner.imageSprite.src = 'https://chromedino.com/assets/batman1x.png';" +
"document.body.style.backgroundColor = '#000';" +
"document.getElementById('d_info').style.color = 'white';" +
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
".nav-li a:hover {" +
"background-color: #111;" +
"}\n" +
".dropbtn {" +
"background-color: #04AA6D;" +
"color: white;" +
"padding: 16px;" +
"font-size: 16px;" +
"border: none;" +
"}\n" +
".dropdown {" +
"position: relative;" +
"display: inline-block;" +
"}\n" +
".dropdown-content {" +
"display: none;" +
"position: absolute;" +
"background-color: #f1f1f1;" +
"min-width: 160px;" +
"box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);" +
"z-index: 1;" +
"}\n" +
".dropdown-content a {" +
"color: black;" +
"padding: 12px 16px;" +
"text-decoration: none;" +
"display: block;" +
"}\n" +
".dropdown-content a:hover {background-color: #ddd;}\n" +
".dropdown:hover .dropdown-content {display: block;}\n" +
".dropdown:hover .dropbtn {background-color: #3e8e41;}\n" +
"</style>");

$('body').append(
"<div id='top'>" +
"<ul class='nav-ul'>" +
"<li class='nav-li'><a onclick='godmode()'>GodMode <span id='gms' style='color: #04AA6D'>Off</span></a></li>" +
"<li class='nav-li'><a onclick='setspeed()'>Set Speed</a><li>" +
"<li class='nav-li'><a onclick='resetplayer()'>Reset Player</a><li>" +
"<li class='nav-li'><a onclick='gameover()'>GameOver</a><li>" +
"</ul>" +
"<p id='d_info'>Press <span id='gms' style='color: #04AA6D'>D</span> to shoot lasers!</p>" +
"<div class='dropdown'>" +
"<button class='dropbtn'>Change Skin</button>" +
"<div class='dropdown-content'>" +
"<a onclick='lightskin()'>Light (Normal)</a>" +
"<a onclick='darkskin()'>Dark</a>" +
"<a onclick='coloredskin()'>Colored</a>" +
"<a onclick='marioskin()'>Mario</a>" +
"<a onclick='batmanskin()'>Batman</a>" +
"</div></div>" +
"</div>");

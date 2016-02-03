var baseURL = window.location.href.substring(0, window.location.href.length-9);
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var fonts = ["30px Raleway", "center"];
var playerHP = 100;
var computerHP = 100;
var kali, kimbo, brian;
var player, playerX, playerY;
var computer, computerX, computerY;
var damageLevel, levelName;
var level = 1;
var moves = [];

function uploadStore() {
	var data = level.toString();
	$.post(baseURL+"save.php", {"RAW_DATA": data});
}

function fetchStore() {
	$.get(baseURL+"fetch.php", function(data) {
		if(data != "") level = parseInt(data);
	});
}

function clearScreen() {
	context.clearRect(0, 0, canvas.width, canvas.height);
}

function playerWins() {
	alert("You won! The enemy was vanquished.");
	if(level == 1) startLevel2();
	else if(level == 2) startLevel3();
	else if(level == 3) {
		level = 1;
		uploadStore();
		location.reload();
	}
}

function computerWins() {
	level = 1;
	uploadStore();
	alert("You were vanquished. Try again next time!");
	location.reload();
}

function createPlayers() {
	kali = new Image();
	kali.src = "images/kali.png";

	kimbo = new Image();
	kimbo.src = "images/kimbo.png";

	brian = new Image();
	brian.src = "images/brian.png";
}

function startGame() {
	createPlayers();
	context.font = fonts[0];
	context.textAlign = fonts[1];
	context.fillText("Choose Your Hokeymon!", canvas.width/2, canvas.height/4);
	fetchStore();

	kali.onload = function() {
		context.drawImage(kali, canvas.width/4-kali.width/2-15, canvas.height/3);
	};
	kimbo.onload = function() {
		context.drawImage(kimbo, canvas.width/2-kimbo.width/2, canvas.height/3);
	};
	brian.onload = function() {
		context.drawImage(brian, 3*canvas.width/4-brian.width/2+15, canvas.height/3);
	};

	document.getElementById("kaliButton").style.display = "inline";
	document.getElementById("kimboButton").style.display = "inline";
	document.getElementById("brianButton").style.display = "inline";
}
startGame();

function selectKali() {
	clearScreen();
	document.getElementById("kaliButton").style.display = "none";
	document.getElementById("kimboButton").style.display = "none";
	document.getElementById("brianButton").style.display = "none";
	moves[0] = ["Headbutt", 10, 90];
	moves[1] = ["Tuna Slap", 30, 70];
	moves[2] = ["Muscle Up", 70, 40];
	player = kali;
	if(level == 1) startLevel1();
	else if(level == 2) startLevel2();
	else if(level == 3) startLevel3();
}

function selectKimbo() {
	clearScreen();
	document.getElementById("kaliButton").style.display = "none";
	document.getElementById("kimboButton").style.display = "none";
	document.getElementById("brianButton").style.display = "none";
	moves[0] = ["Kick", 20, 90];
	moves[1] = ["Jumbo Slap", 60, 30];
	moves[2] = ["Demolition", 100, 5];
	player = kimbo;
	if(level == 1) startLevel1();
	else if(level == 2) startLevel2();
	else if(level == 3) startLevel3();
}

function selectBrian() {
	clearScreen();
	document.getElementById("kaliButton").style.display = "none";
	document.getElementById("kimboButton").style.display = "none";
	document.getElementById("brianButton").style.display = "none";
	moves[0] = ["Punch", 10, 100];
	moves[1] = ["Fifty-Fifty", 50, 50];
	moves[2] = ["Wedgie", 80, 10];
	player = brian;
	if(level == 1) startLevel1();
	else if(level == 2) startLevel2();
	else if(level == 3) startLevel3();
}

function startLevel1() {
	clearScreen();
	context.font = fonts[0];
	context.textAlign = fonts[1];
	level = 1;
	uploadStore();
	levelName = "Level 1: The Grouchy Shogun";
	damageLevel = 40;
	context.fillText(levelName, canvas.width/2, canvas.height/4-50);
	
	context.font = fonts[0];
	context.textAlign = fonts[1];
	context.fillText(playerHP, canvas.width/2-200, canvas.height/4);
	context.fillText(computerHP, canvas.width/2+200, canvas.height/4);
	context.drawImage(player, canvas.width/2-player.width/2-200, canvas.height/3);

	computer = new Image();
	computer.src = "images/shogun.png";
	computer.onload = function() {
		context.drawImage(computer, canvas.width/2-computer.width/2+200, canvas.height/3-20);
	};

	document.getElementById("attack1").innerHTML = moves[0][0] + " (Damage: " + moves[0][1] + ", Accuracy: " + moves[0][2] + "%)";
	document.getElementById("attack1").style.display = "inline";
	document.getElementById("attack2").innerHTML = moves[1][0] + " (Damage: " + moves[1][1] + ", Accuracy: " + moves[1][2] + "%)";
	document.getElementById("attack2").style.display = "inline";
	document.getElementById("attack3").innerHTML = moves[2][0] + " (Damage: " + moves[2][1] + ", Accuracy: " + moves[2][2] + "%)";
	document.getElementById("attack3").style.display = "inline";
}

function startLevel2() {
	clearScreen();
	context.font = fonts[0];
	context.textAlign = fonts[1];
	level = 2;
	uploadStore();
	levelName = "Level 2: The Bodacious Bull";
	damageLevel = 60;
	context.fillText(levelName, canvas.width/2, canvas.height/4-50);
	playerHP = computerHP = 100;
	
	context.font = fonts[0];
	context.textAlign = fonts[1];
	context.fillText(playerHP, canvas.width/2-200, canvas.height/4);
	context.fillText(computerHP, canvas.width/2+200, canvas.height/4);
	context.drawImage(player, canvas.width/2-player.width/2-200, canvas.height/3);

	computer = new Image();
	computer.src = "images/bull.png";
	computer.onload = function() {
		context.drawImage(computer, canvas.width/2-computer.width/2+200, canvas.height/3-20);
	};

	document.getElementById("attack1").innerHTML = moves[0][0] + " (Damage: " + moves[0][1] + ", Accuracy: " + moves[0][2] + "%)";
	document.getElementById("attack1").style.display = "inline";
	document.getElementById("attack2").innerHTML = moves[1][0] + " (Damage: " + moves[1][1] + ", Accuracy: " + moves[1][2] + "%)";
	document.getElementById("attack2").style.display = "inline";
	document.getElementById("attack3").innerHTML = moves[2][0] + " (Damage: " + moves[2][1] + ", Accuracy: " + moves[2][2] + "%)";
	document.getElementById("attack3").style.display = "inline";
}

function startLevel3() {
	clearScreen();
	context.font = fonts[0];
	context.textAlign = fonts[1];
	level = 3;
	uploadStore();
	levelName = "Level 3: The Cunning Cthulu (Final Boss)";
	damageLevel = 75;
	context.fillText(levelName, canvas.width/2, canvas.height/4-50);
	playerHP = computerHP = 100;
	
	context.font = fonts[0];
	context.textAlign = fonts[1];
	context.fillText(playerHP, canvas.width/2-200, canvas.height/4);
	context.fillText(computerHP, canvas.width/2+200, canvas.height/4);
	context.drawImage(player, canvas.width/2-player.width/2-200, canvas.height/3);

	computer = new Image();
	computer.src = "images/boss.png";
	computer.onload = function() {
		context.drawImage(computer, canvas.width/2-computer.width/2+200, canvas.height/3-20);
	};

	document.getElementById("attack1").innerHTML = moves[0][0] + " (Damage: " + moves[0][1] + ", Accuracy: " + moves[0][2] + "%)";
	document.getElementById("attack1").style.display = "inline";
	document.getElementById("attack2").innerHTML = moves[1][0] + " (Damage: " + moves[1][1] + ", Accuracy: " + moves[1][2] + "%)";
	document.getElementById("attack2").style.display = "inline";
	document.getElementById("attack3").innerHTML = moves[2][0] + " (Damage: " + moves[2][1] + ", Accuracy: " + moves[2][2] + "%)";
	document.getElementById("attack3").style.display = "inline";
}

function attack(move) {
	playerX = canvas.width/2 - player.width/2 - 200;
	playerY = canvas.height/3;
	computerX = canvas.width/2-computer.width/2+200;
	computerY = canvas.height/3-20;

	context.clearRect(playerX, playerY, player.width, player.height);
	playerX += 100;
	playerY -= 100;
	context.drawImage(player, playerX, playerY);
	setTimeout(alert("You jumped into the air!"), 1000);
	context.clearRect(playerX, playerY, player.width, player.height);
	playerX += 150;
	playerY += 100;
	context.drawImage(player, playerX, playerY);
	setTimeout(alert("And strike with a " + moves[move][0].toLowerCase() + "!"), 1000);

	if(Math.random() < moves[move][2]/100) {
		computerHP -= moves[move][1];
		setTimeout(alert("Your attack hits!"), 1000);
	} else {
		setTimeout(alert("You missed!"), 1000);
	}

	clearScreen();
	playerX -= 250;

	context.drawImage(player, playerX, playerY);
	context.drawImage(computer, computerX, computerY);
	context.font = fonts[0];
	context.textAlign = fonts[1];
	context.fillText(levelName, canvas.width/2, canvas.height/4-50);
	context.font = fonts[0];
	context.textAlign = fonts[1];
	context.fillText(playerHP, canvas.width/2-200, canvas.height/4);
	context.fillText(computerHP, canvas.width/2+200, canvas.height/4);

	setTimeout(alert("The enemy prepares for an attack!"), 1000);
	context.clearRect(computerX, computerY, computer.width, computer.height);
	computerX = computerX - 250;
	context.drawImage(computer, computerX, computerY);
	if(Math.random() < damageLevel/100+0.1) {
		setTimeout(alert("The enemy's attack hits!"), 1000);
		playerHP -= parseInt(Math.random()*damageLevel);
	} else {
		setTimeout(alert("The enemy's attack missed!"), 1000);
	}

	clearScreen();
	computerX += 250;
	context.drawImage(player, playerX, playerY);
	context.drawImage(computer, computerX, computerY);
	context.font = fonts[0];
	context.textAlign = fonts[1];
	context.fillText(levelName, canvas.width/2, canvas.height/4-50);
	context.font = fonts[0];
	context.textAlign = fonts[1];
	context.fillText(playerHP, canvas.width/2-200, canvas.height/4);
	context.fillText(computerHP, canvas.width/2+200, canvas.height/4);

	if(computerHP <= 0) playerWins();
	else if(playerHP <= 0) computerWins();
}

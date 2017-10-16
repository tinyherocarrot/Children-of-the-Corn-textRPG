// INSTRUCTIONS: Build a command-line based zombie fighting game. 
// =========================================================================================================

// In this game, you and a zombie will each be given a certain amount of health. (Perhaps: You 70, Zombie 15).

// For each round, you will be asked to guess a random number between 1 and 5.
// If your guess matches the random number of the Zombie -- you inflict a random amount of damage between 1 and 5. 
// If you guess does not match the random number of the Zombie -- the Zombie inflicts a random amount of damage to you between 1 and 5.
// Each round the zombie is given a new random number and you must guess again. 

// The game ends when you or the zombie gets to 0 health. 

// Note: You should use the inquirer package to take in user commands.
// Major Warning: inquirer's prompt function is "asynchronous", which means that the majority of your game logic will need to be inside the .then() function for your propmt. 

// ===========================================================================================================
var inquirer = require("inquirer");

//zombie constructor
function Child(name, attack, health) {
	this.name = name;
	this.attack = attack;
	this.health = health;
}
var child1 = new Child("Jib", 0, 10);
var child2 = new Child("Jab", 0, 20);

var userName = "";
var userHealth = 15;

inquirer
	.prompt([
		{
			type: "input",
			message: "Children of the Corn RPG \n======================\n\nEnter your name: ",
			name: "userName"
		},
		{
			type: "list",
			message: "You come across a small boy with a small shiv. You notice that the shiv handle is wrapped in a corn husk. \nYou back away but he draws near, and you see only his pupils, bright like shined shoes, and murderous. \n\nChoose a number to defend yourself.",
			choices: ['1','2','3','4','5'],
			name: "userNum"
		}
	])
	.then(function(response0) {
		// save user's chosen name to a global var
		userName = response0.userName;

		var userNum = parseInt(response0.userNum)

		console.log("YOU'RE DEAD, OUTLANDER the small boy screams as he rushes towards you, shiv held high");
		var childNum = Math.floor(Math.random()*5)+1;
		console.log(userNum, childNum);

		if (userNum === childNum) {
			child1.health -= userNum;
			console.log("You snap back into conciousness as your knee collides with the small boy's chin. ");
			console.log(`${userName} HP: ${userHealth} |  ${child1.name} HP: ${child1.health}`);
		} else {
			userHealth -= childNum;
			console.log("You have no time to react and the shiv sinks itself in and through your helpless outstretched palm.")
			console.log(`${userName} HP: ${userHealth} |  ${child1.name} HP: ${child1.health}`);
		}

		while ((userHealth > 0) || (enemy1.health > 0)) {
			inquirer
				.prompt([
					{
						type: list,
						message: "The boy climbs up your legs like some freakish spider \nand clamps his legs around your torso, poised to strike. \nChoose a number to defend yourself.",
						choices: ['1','2','3','4','5'],
						name: "userNum"
					}
				])
				.then(function(response1) {
					console.log("IT'S OVER the small boy screams and he grips your hair, shiv held high, he screams IN THE NAME OF THE LORD");
					var userNum = parseInt(response1.userNum)
					var childNum = Math.floor(Math.random()*5)+1;
					console.log(response1.userNum, childNum);

					if (userNum === childNum) {
						enemy1.health -= response1.userNum;
						console.log("You manage to throw him to the ground. ");
						console.log(`${userName} HP: ${userNum} |  ${child1.name} HP: ${childNum}`);
					} else {
						userHealth -= childNum;
						console.log("The boy hits you repeatedly in the face with a tight fist.")
						console.log(`${userName} HP: ${userNum} |  ${child1.name} HP: ${childNum}`);
					}
				})
		}

		if (userHealth <= 0) {
			console.log("YOU HAVE DIED");
		}
		else if (enemy1.health <= 0) {
			console.log("You have slain the boy.");
		}
	});
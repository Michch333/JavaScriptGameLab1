/* What does the application do?
1. The user is prompted to play a game. If the user chooses yes, the user is prompted to
enter his or her name, and the battle begins. Otherwise, nothing else happens.
2. The game will use a while loop to simulate a turn-based fight between the user and
Grant.
3. The user starts with 40 “health points.” Grant starts with 10 “health points.”
4. Each iteration of the while loop will remove random numbers of health points (either 1
or 2) from both the user and Grant.
5. Each time Grant’s health points hit 0, he is “defeated” and the user gains 1 “win.” But
Grant’s health points are reset to 10. Note: the user’s health points never reset.
6. The game ends when either a) Grant has been defeated three times (i.e.,, the user has
three wins) or b) the user has been defeated (hit 0 health points).
7. When the game is over, the application logs the winner.
Build Specifications:
1. The application must prompt the user for his or her name and use it throughout the
game.
2. The application logs the progress of the fight after each iteration of the loop.
3. Hint: Save asking the user if they want to play for the last part of the code */

let random;
let grantHealth = 10;
let myHealth = 40;
let userWins = 0;
let usersName;
let play;
let attack;

// function list

function startGame () {
    play = prompt("Would you like to play? yes / no");
    if (play === "yes" || play === "Yes") {
        usersName = prompt("What is your name?");
        console.log(`New game, ${usersName} has ${myHealth} and Grant health is ${grantHealth}`)
        startCombat();
    }
    else {
        alert("Sorry, select yes to play. Please refresh and try again.");
    }
}

function resetHealth(){
    grantHealth = 10;
}

function getDamage(){
    random = Math.floor(Math.random() * 5) + 1; // This returns a random number between 1 and 5.
    // console.log(random); Used for Debugging
}

function removeHealth(){
    getDamage();
    grantHealth = (grantHealth - random);
    getDamage();
    myHealth = (myHealth - random);
    console.log(`${usersName}'s health is at ${myHealth} and Grant's health is at ${grantHealth}`);
}

function startCombat (){
    attack = prompt("Would you like to attack?", "Yes / No");
    if (attack === "yes" || attack === "Yes") {
        if (grantHealth > 0 && myHealth > 0) {
            removeHealth();
        }
        if (grantHealth <= 0){
            userWins ++;
            console.log(`${usersName} has ${userWins} wins!`);
            resetHealth();
        }
        if (myHealth <= 0){
            console.log(`I'm sorry ${usersName}, Grant has defeated you!`);
            return;

        }
        if (userWins < 3){
            startCombat();
        } else {
            console.log(`Congrats ${usersName}! You have won with ${myHealth} health remaining!`);
        }
    }
    else {
        console.log(`${usersName} has decided to quit the game`);
        return;
    }
}
// Here's the code that runss
startGame();
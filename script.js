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

console.log("Hello");
let random;
let grantHealth = 10;
let myHealth = 40;
let userWins = 0;
let wantToPlay = true;
let usersName = prompt("What is your name?");
// getRandomNumber();
playGame();
function resetHealth(){
    grantHealth = 10;
}

function getRandomNumber(){
    random = Math.floor(Math.random() * 2) + 1; // This returns a random number between 1 and 2.
}

function removeHealth(){
    getRandomNumber();
    grantHealth = (grantHealth - random);
    getRandomNumber();
    myHealth = (myHealth - random);
    console.log(`${usersName}'s health is at ${myHealth} and Grant's health is at ${grantHealth}`);
}

function playGame (){
    console.log(`New game, ${usersName} has ${myHealth} and Grant health is ${grantHealth}`)
    while (grantHealth > 0 && myHealth > 0) {
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
        playGame();
    } else {
        console.log(`Congrats ${usersName}! You have won!`);
    }
}

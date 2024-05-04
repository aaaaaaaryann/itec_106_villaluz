const minNum = 1;
const maxNum = 50;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;
let running = true;

while(running){

    guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`)
    guess = Number(guess);
    
    if(isNaN(guess)){
        window.alert("Please enter a valid number");
    }
    else if (guess < minNum || guess > maxNum){
        window.alert(`Input number between ${minNum} - ${maxNum}`);
    }
    else{
        attempts++;
        if(guess< answer){
            window.alert("Too low. Try Again");
        }else if (guess > answer){
            window.alert("Too high. Try Again");
        } else{
            window.alert(`Congratulations! the answer was ${answer}. it took you ${attempts} attempts`);
            running = false;
        }
    } 
}
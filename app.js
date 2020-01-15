const compareNumbers = (guess, correctNumber) => {
    if (guess === correctNumber){
        return 0;
    } else if (guess < correctNumber){
        return -1;
    }
    else if (guess > correctNumber){
        return 1;
    }
};

const playGame = () => {
    const paragraph = document.getElementById('results');
    
    console.log(number);
    const userGuess = document.getElementById('the-number');

    const value = compareNumbers(userGuess.value, number);
    if (value === 0){
        paragraph.textContent = 'Congrats! You win!';
        imgOne.src = 'https://i.pinimg.com/564x/e3/a7/dd/e3a7dd179b47f62dfc26c9cd17af796b.jpg';
    }
    if (value < 0){
        paragraph.textContent = 'Too Low!!';
    }
    if (value > 0){
        paragraph.textContent = 'Too High!!';
    

       
        
     
    }
};

const turnLevel = document.getElementById('turn-level');
turnLevel.textContent = 0;
let turn = 0;
const number = Math.floor(Math.random() * 10).toString();
const button = document.getElementById('guess-button');


button.addEventListener(`click`, playGame);
//GAME
button.addEventListener('click', () => {
    turn = turn + 1;
    turnLevel.textContent = turn;
    if (turn >= 4) {
        imgOne.src = 'https://i.pinimg.com/564x/34/74/d7/3474d7dcb1b56b373516205302bac6ed.jpg';}  
});




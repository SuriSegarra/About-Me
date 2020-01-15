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
    const number = Math.floor(Math.random() * 10).toString();
    console.log(number)
    const userGuess = document.getElementById('the-number');
    const value = compareNumbers(userGuess.value, number);
    if (value === 0){
        paragraph.textContent = 'Congrats! You win!';
    }
    if (value < 0){
        paragraph.textContent = 'Too Low!!';
    }
    if (value > 0){
        paragraph.textContent = 'Too High!!';
    }
};



const button = document.getElementById('guess-button');

button.addEventListener(`click`, playGame);
//GAME



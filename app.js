import isYes from './isYes.js'
const button = document.getElementById('quizbutton');
const total = document.getElementById('total');


button.addEventListener('click', () => {
console.log(`it's working!!`); 

const theName = prompt (`What\'s your name?`);
const confirmation = prompt (`${theName}, Are you sure you want to take the test?`);

if(confirmation === false) return;

const answer1 = prompt(`Is My Favorite Color  Listed Below`);
const answer2 = prompt (`Is My Favorite Animal In This List`);
const answer3 = prompt (`Have I  Been In Any Of This Countries?`);
let count = 0


if(isYes(answer1)) count+=1;
if(!isYes(answer2)) count+=1;
if(isYes(answer3)) count+=1;

total.textContent=`${theName}, You got ${count} correct`;
});

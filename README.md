# TriviaGame
The URL --------> https://aaio0413.github.io/TriviaGame/

・Description: 
TriviaGame! This is a quiz game with timer function implemented. There are total 5 questions about Tokyo. The questions' level is pretty hard. I didn't make score function at the end of game, so, you can only play and learn the answer. 

・Technical note: 
The technical difficulties I faced are, position of items (each question and radio button), shuffle question, and after shuffling questions and eveluate the correct answer.

//////shuffle Array///////

const shuffleArray = function(array) {
    const newArray = array.slice(0);
    for (let i = newArray.length -1; i > 0; i--) {
        const j = Math.floor(Math.random()* (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}



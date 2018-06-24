var questions = [];
questions[0] = {
    question: 'Tokyo was called \'EDO\' before. How many years ago did the city became TOKYO?',
    answers: ['400 years ago.', '800 years ago.', '200 years ago.', '100 years ago.']
}
questions[1] = {
    question: 'How many people live in Tokyo?',
    answers: ['9.2 million.', '8.2 million', '5.2 million.', '15.2 million.']
}
questions[2] = {
    question: 'What rank is Tokyo in terms of GDP in the cities of the world?',
    answers: ['1st.', '2nd', '3rd.', '4th.']
}
questions[3] = {
    question: 'The area of Tokyo is?',
    answers: ['845 miles square.', '745 miles square.', '645 miles square.', '545 miles square.']
}
questions[4] = {
    question: 'How many stations Tokyo has?',
    answers: ['654.', '854.', '454.', '1054.']
}


var clockRunning = false;
var time = 30;
var interval;
var questionCount = 0;
var currentQuestion = [];


$(document).ready(function() {
    $('#start-button').on('click', function() {
        $('.hm-body').css('background-image', 'url(assets/images/FUGOKU.jpg)');
        $('.start-button-wrapper').toggle();
        $('#game').toggle();
        start();
        currentQuestion = shuffleArray(questions);
        console.log(questionCount)
        console.log(currentQuestion)
        console.log(questions)

    })
});

var shuffleArray = function(array) {
    var newArray = array.slice(0);
    for (let i = newArray.length -1; i > 0; i--) {
        const j = Math.floor(Math.random()* (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}



var start = function() {
    if (!clockRunning) {
        interval = setInterval(timeCount, 1000);
        clockRunning = true;
    }
   // $('.hm-body').css('background-image', 'url(assets/images/FUGOKU.jpg)');
    displayQuestion();
    console.log(questionCount)
};

var timeCount = function() {
    time--;
    if (time < 0) {
        stop();
        jumpToNext();
    } else {
        var convertedTime = timeConverter(time);
        $('#time-display').text(convertedTime);
    }

    
};

var stop = function() {
    clearInterval(interval);
    clockRunning = false;
}

var timeConverter = function(t) {
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);
    if (seconds < 10) {
      seconds = "0" + seconds;
    } if (minutes === 0) {
      minutes = "00";
    } else if (minutes < 10) {
      minutes = "0" + minutes;
    };
    return minutes + ":" + seconds;
};

var displayQuestion = function() {
    if(questionCount === questions.length) {
        endOfTheGame();
        console.log('END THE GAME')
    } else {
        $('#question').html(questions[questionCount].question);
        randomOrderAnswers = shuffleArray(questions[questionCount].answers);

        for (i=0; i<randomOrderAnswers.length; i++) {
            var answer1 = $('<input class=\'answer\' name=\'answers\' type=\'radio\' value>');
            answer1.text(randomOrderAnswers[i]);
            answer1.attr('value', randomOrderAnswers[i]);
            
            var answer1P = $('<span>'+ randomOrderAnswers[i] + '</span>')
            $('#answer'+i).append(answer1);
            $('#answer'+i).append(answer1P);
        }
    }
    
};


var jumpToNext = function() {
    $('#board').toggle();
    $('#the-answer-wrapper').toggle();
    let selectedAnswer = $('input[name="answers"]:checked').val();
    console.log(selectedAnswer);
    $('#the-answer').text(questions[questionCount].answers[0]);
    if(selectedAnswer === questions[questionCount].answers[0]) {
        $('#the-answer').append('<p>Your answer was correct. God Job!!')
        console.log('YOUR ANSWER IS CORRECT')
    } else {
        $('#the-answer').append('<p>Too bad!')
        console.log('YOUR ANSWER IS NOT CORRECT')
    }

}

$('#submit-button').on('click', function() {
    jumpToNext();
    stop();
});


$('#next-button').on('click', function() {
    $('#board').toggle();
    $('#the-answer-wrapper').toggle();
    displayQuestion();
    cleanQuestions();
    time = 30;
    start();
    console.log(questionCount)
})

var cleanQuestions = function() {
    var originalQuestionsTgs = '<p id=\'answer0\'>1.</p><p id=\'answer1\'>2.</p><p id=\'answer2\'>3.</p><p id=\'answer3\'>4.</p>'
    $('#answers-wrapper').html(originalQuestionsTgs);
    questionCount++;
}

var endOfTheGame = function() {
    stop();
    $('.start-button-wrapper').toggle();
    // $('.start-button-wrapper').empty();
    $('.hm-body').css('background-image', 'url(assets/images/garden_renge.jpg)');
    $('#game').toggle();
    var endGreeting = $('<h1>Thank you for playing!</h1>');
    $('#title').html(endGreeting)
    $('#subTitle').empty();
    
}

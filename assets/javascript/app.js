var questions = [];
questions[0] = {
    question: 'Tokyo was called \'EDO\' before. How many years ago did the city became TOKYO?',
    answers: ['400 years ago.', '800 years ago.', '200 years ago.', '100 years ago.']
}
questions[1] = {
    question: 'Q2',
    answers: ['400 years ago.', '800 years ago.', '200 years ago.', '100 years ago.']
}
questions[2] = {
    question: 'Q3',
    answers: ['400 years ago.', '800 years ago.', '200 years ago.', '100 years ago.']
}
questions[3] = {
    question: 'Q4',
    answers: ['400 years ago.', '800 years ago.', '200 years ago.', '100 years ago.']
}
questions[4] = {
    question: 'Q5',
    answers: ['400 years ago.', '800 years ago.', '200 years ago.', '100 years ago.']
}


var clockRunning = false;
var time = 30;
var interval;
var questionCount = 0;


$(document).ready(function() {
    $('#start-button').on('click', function() {
        $('.hm-body').css('background-image', 'url(assets/images/FUGOKU.jpg)');
        $('.start-button-wrapper').hide();
        $('#game').toggle();
        shuffleArray(questions);
        start();

    })
});

var shuffleArray = function(array) {
    for (let i = array.length -1; i >0; i--) {
        const j = Math.floor(Math.random()* (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}



var start = function() {
    if (!clockRunning) {
        interval = setInterval(timeCount, 1000);
        clockRunning = true;
    }
   // $('.hm-body').css('background-image', 'url(assets/images/FUGOKU.jpg)');
    displayQuestion();
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
    if(questionCount === questions.length-1) {
        console.log('END THE GAME')
    } else {
        $('#question').html(questions[questionCount].question);

        for (i=0; i<questions[questionCount].answers.length; i++) {
            var answer1 = $('<input class=\'answer\' name=\'answers\' type=\'radio\' value>');
            answer1.text(questions[questionCount].answers[i]);
            answer1.attr('value', questions[questionCount].answers[i]);
            
            var answer1P = $('<span>'+ questions[questionCount].answers[i] + '</span>')
            $('#answer'+i).append(answer1);
            $('#answer'+i).append(answer1P);
        }
        questionCount++;
    }
    
};


var jumpToNext = function() {
    $('#board').toggle();
    $('#the-answer-wrapper').toggle();
    let selectedAnswer = $('input[name="answers"]:checked').val();
    console.log(selectedAnswer);
    $('#the-answer').text(questions[questionCount].answers[0]);
    if(selectedAnswer === questions[questionCount].answers[0]) {
        console.log('YOUR ANSWER IS CORRECT')
    } else {
        console.log('YOUR ANSWER IS NOT CORRECT')
    }

}

$('#submit-button').on('click', function() {
    jumpToNext();
    stop();
});
// $('#submit-button').on('click', function() {
//     $('#board').toggle();
//     $('#the-answer-wrapper').toggle();
//     $('#question').text(questions[questionCount].answers[0]);
// })

$('#next-button').on('click', function() {
    $('#board').toggle();
    $('#the-answer-wrapper').toggle();
    displayQuestion();
    cleanQuestions();
    time = 30;
    start();
})

var cleanQuestions = function() {
    var originalQuestionsTgs = '<p id=\'answer0\'>1.</p><p id=\'answer1\'>2.</p><p id=\'answer2\'>3.</p><p id=\'answer3\'>4.</p>'
    $('#answers-wrapper').replaceWith(originalQuestionsTgs);

}

var questions = [];
questions[0] = {
    question: 'Tokyo was called \'EDO\' before. How many years ago did the city became TOKYO?',
    answers: ['400 years ago.', '800 years ago.', '200 years ago.', '100 years ago.']
}

var clockRunning = false;
var time = 30;
var interval;
var questionNum = 0;

$(document).ready(function() {
    $('#start-button').on('click', function() {
        $('.hm-body').css('background-image', 'url(assets/images/FUGOKU.jpg)');
        $('.start-button-wrapper').hide();
        $('#game').toggle();
        start();

    })
});




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
    var convertedTime = timeConverter(time);
    $('#time-display').text(convertedTime);
    
};

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
    // var qDiv = $('<div>'+ question[0].q+ '</div>');
    // qDiv.addClass('question')
    $('#question').html(questions[0].question);
    // for(i=0; i < questions[0].answers.length; i++) {
    //     var answer = 
    // }
    for (i=0; i<questions[questionNum].answers.length; i++) {
        var answer1 = $('<input class=\'answer\' name=\'answers\' type=\'radio\' value>');
        answer1.text(questions[questionNum].answers[i]);
        answer1.attr('value', questions[questionNum].answers[i]);
        
        var answer1P = $('<span>'+ questions[questionNum].answers[i] + '</span>')
        $('#answer'+i).append(answer1);
        $('#answer'+i).append(answer1P);
    }

    // var answer1 = $('<input class=\'answer\' name=\'answers\' type=\'radio\' value>');
    // answer1.text(questions[0].answers[0]);
    // answer1.attr('value', questions[0].answers[0]);
    
    // var answer1P = $('<span>'+ questions[0].answers[0] + '</span>')
    // $('#answer1').append(answer1);
    // $('#answer1').append(answer1P);



    // $('#answer1').html(questions[0].answers[0]);
    // $('#answer2').html(questions[0].answers[1]);
    // $('#answer3').html(questions[0].answers[2]);
    // $('#answer4').html(questions[0].answers[3]);

    // var questionDiv
};

$('#submit-button').on('click', function() {
    let selectedAnswer = $('input[name="answers"]:checked').val();
    console.log(selectedAnswer);
})

var jumpToNextPage = function() {
    
}

$('#submit-button').on('click', function() {
    $('#board').toggle();
    $('#the-answer-wrapper').toggle();
    $('#question').html(questions[questionNum].answers[0]);
})


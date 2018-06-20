var questions = [];
question[0] = {
    q: 'Tokyo was called \'EDO\' before. How many years ago did the city became TOKYO?',
    a1: '800 years ago.',
    a2: '400 years ago.',
    a3: '200 years ago.',
    a4: '100 years ago.'
}

var clockRunning = false;
var time = 30;
var interval;
window.onload = function() {

    if (!clockRunning) {
        interval = setInterval(timeCount, 1000);
        clockRunning = true;
    }
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
    }

    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }
    return minutes + ":" + seconds;
};

var displayQuestion = function() {
    // var qDiv = $('<div>'+ question[0].q+ '</div>');
    // qDiv.addClass('question')
    $('#question').html(question[0].q);
};
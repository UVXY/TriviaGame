var answers = ["dog", "cat", "bird"];

var correcto = 0;
var wrong = 0;

function start() {
    $("#starting").hide();
    $("#outcome").hide();
    $("#display").text("02:00");
};

start();

$("#start").click(function () {
    $("#starting").show();
    $("#start").hide();
    wrong === 0;
    correcto == 0;
});

$("#submit").click(function () {

})

$("#retake").click(function () {
    $("#start").show();
    start();
})

function correct(){
    correcto++;
    $("#correct").text(correcto);
}

function incorrect(){
    wrong++;
    $("#incorrect").text(wrong)
}

function submit() {
    $('#submit').click(function () {
        $("#starting").hide();
        $("#outcome").show();
        var isChecked = $('#rdSelect').prop('checked');
        
        if (isChecked == true) {
            correct();
        }
        else {
            incorrect();
        }
    });
};
submit();

// function checkScore () {
//     if 
// }
// buttons that show/hide in order to prevent test taking prior to start
// timer starts when startButton pushed
// when timer ends moves to outcome div
// check score of right/wrong/unanswered questions
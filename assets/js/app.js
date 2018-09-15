var answers = ["dog", "cat", "bird"];

var wins = 0;
var lost = 0;

function start() {
    $("#starting").hide();
    $("#outcome").hide();
    $("#display").text("02:00");
};

start();

$("#start").click(function () {
    $("#starting").show();
    $("#start").hide();
});

$("#submit").click(function () {
    $("#starting").hide();
    $("#outcome").show();
})

$("#retake").click(function() {
    $("#start").show();
    start();
})

// function checkScore () {
//     if 
// }
// buttons that show/hide in order to prevent test taking prior to start
// timer starts when startButton pushed
// when timer ends moves to outcome div
// check score of right/wrong/unanswered questions
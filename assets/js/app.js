var answers = ["dog", "cat", "bird"];

var wins = 0;
var lost = 0;

function start() {
    $("#starting").hide();
    $("#outcome").hide();
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

function checkScore () {

}
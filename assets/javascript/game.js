


$(document).ready(function () {

    var wins = 0;
    var losses = 0;
    var userscore = 0;
    var randnum = Math.floor(Math.random() * 109) + 12;




    console.log(randnum);
    $("#random-number").text(randnum);
    $("#wins-text").text(wins);
    $("#losses-text").text(losses);
    $("#score-text").text(userscore);

    $("#pink")
    $("#green")
    $("#blue")
    $("#yellow")

    var crystalOne = Math.floor(Math.random() * 12 + 1);
    var crystalTwo = Math.floor(Math.random() * 12 + 1);
    var crystalThree = Math.floor(Math.random() * 12 +1);
    var crystalFour = Math.floor(Math.random() * 12 +1);

    $("#blue").on("click", function() {
    console.log(crystalOne);
    
    });

    $("#green").on("click", function() {
    console.log(crystalTwo);
    });

    $("#pink").on("click", function() {
    console.log(crystalThree);
    });

    $("#yellow").on("click", function() {
    console.log(crystalFour);
    });

});

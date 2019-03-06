


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

    // $("#pink")
    // $("#green")
    // $("#blue")
    // $("#yellow")

    var crystalOne = Math.floor(Math.random() * 12 + 1);
    var crystalTwo = Math.floor(Math.random() * 12 + 1);
    var crystalThree = Math.floor(Math.random() * 12 +1);
    var crystalFour = Math.floor(Math.random() * 12 +1);

    function reset() {
        var randnum = Math.floor(Math.random() * 109) + 12;
        $("#random-number").text(randnum);
        userscore = 0;
        $("#score-text").text(userscore);
        var crystalOne = Math.floor(Math.random() * 12 + 1);
        var crystalTwo = Math.floor(Math.random() * 12 + 1);
        var crystalThree = Math.floor(Math.random() * 12 +1);
        var crystalFour = Math.floor(Math.random() * 12 +1);
   
   }


    $("#blue").on("click", function() {
    console.log(crystalOne);
    userscore = crystalOne + userscore;
    $("#score-text").text(userscore);

    if(userscore === randnum) {
        wins++;
        $("#wins-text").text(wins);
        reset();
    }
    else if(userscore > randnum) {
        losses++;
        $("#losses-text").text(losses);
        reset();
    }
    });

    $("#green").on("click", function() {
    console.log(crystalTwo);
    userscore = crystalTwo + userscore;
    $("#score-text").text(userscore);

    if(userscore === randnum) {
        wins++;
        $("#wins-text").text(wins);
        reset();
    }
    else if(userscore > randnum) {
        losses++;
        $("#losses-text").text(losses);
        reset();
    }
    });

    $("#pink").on("click", function() {
    console.log(crystalThree);
    userscore = crystalThree + userscore;
    $("#score-text").text(userscore);

    if(userscore === randnum) {
        wins++;
        $("#wins-text").text(wins);
        reset();
    }
    else if(userscore > randnum) {
        losses++;
        $("#losses-text").text(losses);
        reset();
    }
    });

    $("#yellow").on("click", function() {
    console.log(crystalFour);
    userscore = crystalFour + userscore;
    $("#score-text").text(userscore);

    if(userscore === randnum) {
        wins++;
        $("#wins-text").text(wins);
        reset();
    }
    else if(userscore > randnum) {
        losses++;
        $("#losses-text").text(losses);
        reset();
    }
    });

     

});

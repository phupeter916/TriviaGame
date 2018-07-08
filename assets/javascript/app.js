$(document).ready(function(){


    var timer = 30;

    var correct = 0;

    var incorrect = 0;

    var endGame = false;

    //capturing responses from user input

    var question1Capture =  $("input[name='question1']:checked").val();
    var question2Capture =  $("input[name='question2']:checked").val();
    var question3Capture =  $("input[name='question3']:checked").val();
    var question4Capture =  $("input[name='question4']:checked").val();
    var question5Capture =  $("input[name='question5']:checked").val();
    var question6Capture =  $("input[name='question6']:checked").val();
    var question7Capture =  $("input[name='question7']:checked").val();
    


    setTimeout(timerCountDown, 1000 * 5);

    //functions

    function timerCountDown() {

        timer--;

        $(".timer").text("Time Left: " + timer + " seconds");

        if (timer === 0) {

            endGame === true;
        }
        
        console.log(timer);

    };

    function startScreen() {

        $(".banner").show();

       $(".start").show();

        $(".questions").hide();

        $(".gameResults").hide();

        $(".timer").hide();

    };

    function gameStart() {

        $(".banner").show();

        $(".start").hide();

        $(".questions").show();

        $(".gameResults").hide();

        $(".timer").show();

        timerCountDown();

   };

   function gameEnd() {
        $(".gameResults").show();
    ;}


    function checkAnswers() {

        if (question1Capture === 1) {
            

            console.log("correct");
            correct++;
            $(".correct").append("Correct Answers: " + correctCount);

        }
        else {

            console.log("incorrect");
            incorrect++;
            $("#wrongCountDiv").text("Wrong Answers: " + wrongCount);
        }

        if (question2Capture === 2) {
            

            console.log("correct");
            correct++;
            $(".correct").text("Correct Answers: " + correctCount);

        }
        else {

            console.log("incorrect");
            incorrect++;
            $(".correct").text("Correct Answers: " + correctCount);
        }

        if (question3Capture === 1) {
            

            console.log("correct");
            correct++;
            $(".correct").text("Correct Answers: " + correctCount);

        }
        else {

            console.log("incorrect");
            incorrect++;
            $(".correct").text("Correct Answers: " + correctCount);
        }

        if (question4Capture === 2) {
            

            console.log("correct");
            correct++;
            $(".correct").text("Correct Answers: " + correctCount);

        }
        else {

            console.log("incorrect");
            incorrect++;
            $(".correct").text("Correct Answers: " + correctCount);
        }

        if (question5Capture === 1) {
            

            console.log("correct");
            correct++;
            $(".correct").text("Correct Answers: " + correctCount);

        }
        else {

            console.log("incorrect");
            incorrect++;
            $(".correct").text("Correct Answers: " + correctCount);
        }

        if (question6Capture === 3) {
            

            console.log("correct");
            correct++;
            $(".correct").text("Correct Answers: " + correctCount);

        }
        else {

            console.log("incorrect");
            incorrect++;
            $(".correct").text("Correct Answers: " + correctCount);
        }

        if (question7Capture === 2) {
            

            console.log("correct");
            correct++;
            $(".correct").text("Correct Answers: " + correctCount);

        }
        else {

            console.log("incorrect");
            incorrect++;
            $(".correct").text("Correct Answers: " + correctCount);
        }


    
    
}

    
    startScreen();


    $(".start").on("click", function() {
        console.log("Clicked");
        gameStart();
        



    });

    $("#submitButton").on("click", function() {
        onsole.log("Clicked");
        gameEnd();
        

    });






























});
"use strict";

(function(){

    var answers = {
        'q1': 2,
        'q2': 1,
        'q3': 1
    };

    function bindEvents(questionSet){
        document.getElementById('form' + questionSet).addEventListener("submit", function(e) {
            e.preventDefault();
            manageQuestionAndAnswer(questionSet);
        });
    }

    function checkAnswers(question, selectedAnswer){
        return answers[question] == selectedAnswer;
    }

    function getUserAnswer(questionSet){
        var formElements = document.getElementsByName(questionSet);
        var selectedValue;

        if(formElements.length > 1){
            for(var i = 0; i < formElements.length; i++) {

                if(formElements[i].checked){
                    if(selectedValue !== undefined){
                        selectedValue = selectedValue+','+i;
                    } else {
                        selectedValue = i;
                    }
                }
            }
        } else {
            selectedValue = formElements[0].value;
        }

        return selectedValue;
    }

    function showAnswerStatus(questionSetID, isCorrect){
        var correct = questionSetID + "correct";
        var incorrect = questionSetID + "incorrect";

        resetQuiz(questionSetID);

        if(isCorrect) {
            document.getElementById(correct).style.display = 'block';
        } else {
            document.getElementById(incorrect).style.display = 'block';
        }
    }

    function resetQuiz(questionSetID){
        var correct = questionSetID + "correct";
        var incorrect = questionSetID + "incorrect";

        document.getElementById(correct).style.display = 'none';
        document.getElementById(incorrect).style.display = 'none';
    }

    function manageQuestionAndAnswer(questionSet){
        var questionSetID = questionSet;

        var usersInput = getUserAnswer(questionSetID);
        var isCorrect = checkAnswers(questionSetID, usersInput);

        showAnswerStatus(questionSetID, isCorrect);
    }


    function quizInit(){
        for (var key in answers) {
            if (!answers.hasOwnProperty(key)) continue;

            var obj = answers[key];

            resetQuiz(key);
            bindEvents(key);
        }
    }

    quizInit();

}());

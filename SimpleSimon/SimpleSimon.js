'use strict';
(function ($) {
    $(document).ready(function () {

        var squares = ['red', 'green', 'blue', 'yellow']
        var simonsArray = []
        var playersArray = []
        var stageCounter = 0
        var stage = 0

//Starts the Game

        window.onload = function () {
            document.getElementById('start-btn').addEventListener('click', randomColor)
        }

//Simon chooses a random color and stores it in simonsArray followed by the display of his choice
        function randomColor() {
            playSound()
            var randomColor = squares[Math.floor(Math.random() * squares.length)];
            simonsArray.push(randomColor);
            showPattern(simonsArray)
            $('#pressStart').hide()
            $('#start-btn').hide()
            nextStage()
            playersArray = [];
        }

//Displays the passed Array
        function showPattern() {
            for (var i = 0; i <= simonsArray.length - 1; i++) {
                var buttonToFade = document.getElementById(simonsArray[i])
                setTimeout(flashOn, 750 * i, buttonToFade)
            }
        }

        function flashOn(buttonToFade) {
            buttonToFade.style.opacity = 1
            setTimeout(flashOff, 250, buttonToFade)
        }

        function flashOff(buttonToFade) {
            buttonToFade.style.opacity = .5
        }

//Turns the players choice into a number and pushes it to playersArray
        $(document).ready(function () {
            $('.colorButton').click(function () {
                var playerClick = $(this).attr("id");
                switch (playerClick) {
                    case "red":
                        playersArray.push("red");
                        break;
                    case "green":
                        playersArray.push("green");
                        break;
                    case "blue":
                        playersArray.push("blue");
                        break;
                    case "yellow":
                        playersArray.push("yellow");
                        break;
                }
                setTimeout(compareSequence, 500)
            })
        })

//need to compare playersArray and simonsArray to determine outcome
        function compareSequence() {
            if (playersArray.length === simonsArray.length) {
                if (JSON.stringify(playersArray) === JSON.stringify(simonsArray)) {
                    randomColor()
                } else {
                    if (confirm('Game Over. Would you like to try again?')) {
                        simonsArray = []
                        playersArray = []
                        stageCounter = 0
                        randomColor()
                    } else {
                        close()
                    }
                }
            } else if (playersArray.length > simonsArray.length) {
                if (confirm('Game Over. Would you like to try again?')) {
                    simonsArray = []
                    playersArray = []
                    stageCounter = 0
                    randomColor()
                } else {
                    close()
                }
            }
        }

        function playSound() {
            var sound = document.getElementById("player");
            sound.play();
        }

        playSound()


        function nextStage() {
            stageCounter++;
            var counterDisplay = document.getElementById('stage-counter')
            counterDisplay.innerHTML = 'Stage: ' + stageCounter
        };
    })

})(jQuery);


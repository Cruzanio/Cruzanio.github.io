(function () {
    "use strict";
    $().ready(function () {
        function fizzbuzz(num) {
            $('#output').html('')
            for (var i = 1; i <= num; i++) {
                if (i % 15 === 0) {
                    $('#output').append('<li>' + i + ': Fizzbuzz' + '</li>')
                } else if (i % 3 === 0) {
                    $('#output').append('<li>' + i + ': Fizz' + '</li>')
                } else if (i % 5 === 0) {
                    $('#output').append('<li>' + i + ': Buzz' + '</li>')
                } else if (isNaN($('#userInput').val())) {
                    $('#output').html('Please enter a valid number')
                } else {
                    $('#output').append('<li>' + i + '</li>')
                }
            }
        }

        $('#run').click(function () {
            fizzbuzz($('#userInput').val())
        })
    });

})();

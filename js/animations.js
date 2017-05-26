$(document).ready(function () {
    $('.tweet-compose').on('click', function () {
        $(this).css('height', '5em');
        $('#char-count').css('visibility', 'visible');
        $('.button').css('visibility', 'visible');
    })
    $('.tweet-compose').keyup(function () {
        var length = $(this).val().length;
        $('#char-count').text(140 - length);
        if (length >= 130) {
            $('#char-count').css('color', 'red');
        } else if (length <= 130) {
            $('#char-count').css('color', '#999');
        } if (length > 140) {
            $('#tweet-submit').prop('disabled', true);
        } else if (length < 140) {
            $('#tweet-submit').prop('disabled', false);
        }
    })
 
 /*
var submitIt = function () {
        $('#tweet-submit').on('click', function (e) {
            //stores what the user wrote
            var newTweet = $('#tweet-content .tweet-compose').val();
            //copies first tweet
            $('.tweet:first').clone().prependTo('#stream');
            //copies the profile pic over
            $('.avatar:eq(1)').attr('src', 'http://coppermind.net/w/images/Iron.svg');
            //copies name over
            $('.fullname:first').text('Elend Venture');
            $('.username:first').text('@TheLastEmperor');
            //copies text over
            $('.tweet-text:first').text(newTweet);
            $('.reply .tweet-compose:first').attr("placeholder", "reply to @TheLastEmperor");
            //resets to original input
            initialTweet();
            e.preventDefault();
            $('#tweet-content .tweet-compose').val('');
            $('#char-count').text('140');
            //enables tweet info reveal
            toggleTweet();
        });
        */



})



























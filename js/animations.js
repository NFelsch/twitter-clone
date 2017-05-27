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
        } else if (length < 141) {
            $('#tweet-submit').prop('disabled', false);
        }
    })

    $('.button').on('click', function () {          //Your text won't return, so its really long.
        var newTweet = $('#tweet-content .tweet-compose').val();
        $('.tweet:first').clone().prependTo('#stream');
        $('.avatar:eq(1)').attr('src', 'img/alagoon.jpg');
        $('.fullname:first').text('Elend Venture');
        $('.username:first').text('@TheLastEmperor');
        $('.tweet-text:first').text(newTweet);
        $('.reply .tweet-compose:first').attr("placeholder", "reply to @TheLastEmperor");
        $('#tweet-content .tweet-compose').val('');
        $('#char-count').text('140');
        tweetHover();
        statsClick();
    })
    function tweetHover() {
        $('.tweet').hover(
            function () {
                $(this).find('.tweet-actions').addClass('tweet-show-actions');
            }, function () {
                $(this).find('.tweet-actions').removeClass('tweet-show-actions');
            }
        );
    }

    tweetHover();

    $('.stats').hide();
    function statsClick() {
        $('.tweet').click(function () {
            $(this).find('.stats').toggle('collapse');
        })
    }

})



























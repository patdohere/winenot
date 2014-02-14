//when the trigger is clicked we check to see if the popout is currently hidden
//based on the hidden we choose the correct animation
$('#trigger').click( function() {
    if ($('#popout').hasClass('hidden')) {
        $('#popout').removeClass('hidden');
        showPopout();
    }
    else {
        $('#popout').addClass('hidden');
        hidePopout();
    }
});

function showPopout() {
    $('#popout').animate({
        left: 0
    }, 'slow', function () {
        $('#trigger span').html('Close');  //change the trigger text at end of animation
    });
}

function hidePopout() {
    $('#popout').animate({
        left: -40
    }, 'slow', function () {
        $('#trigger span').html('Show');  //change the trigger text at end of animation
    });
}
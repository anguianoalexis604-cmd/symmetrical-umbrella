$(document).ready(function() {
    var $thumbnails = $('#thumbs img');
    var $largeImage = $('#lgPic');
    var $caption = $('#lgTitle');

    // 1. Add a hover effect to each of the smaller images
    $thumbnails.hover(
        function() {
            // Mouse enter: add thin dark green border and box shadow
            $(this).css ({
                'border': '2px solid darkgreen',
                'box-shadow': '0px 4px 8px rgba(0, 0, 0, 0.5)'
            });
        },
        function() {
            // Mouse leave: remove border and box shadow
            $(this).css({
                'border': 'none',
                'box-shadow':'none'
            });
        }
    );

    // 2. Add a click event to each of the smaller images
    $thumbnails.click(function() {
        // Get the src and alt attributes from the clicked thumbnail
        var newSrc = $(this).attr('src');
        var newAlt = $(this).attr('alt');

        // Replace the src of the larger image and update the text below it
        $largeImage.attr('src', newSrc);
        $caption.text(newAlt);
    });

    //3. Add a click event to the larger image to open it in a new window
    $largeImage.click(function() {
        var currentSrc = $(this).attr('src');
        window.open(currentSrc, '_blank');
    });
});
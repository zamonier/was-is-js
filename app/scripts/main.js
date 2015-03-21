$(function(){

    var previousDelta = true;
    var beforeURL = '/images/1915.jpg';
    var afterURL = '/images/2013.jpg';
    var w = 848;
    var h = 561;

    var draw = function(delta){
        var ctx = document.getElementById('canvas').getContext('2d');
        if(previousDelta || previousDelta > delta){
            var beforeImage = new Image();
            beforeImage.src = beforeURL;
            ctx.drawImage(beforeImage, 0, 0, w, h, 0, 0, w, h);
        }
        var afterImage = new Image();
        afterImage.src = afterURL;
        ctx.drawImage(afterImage, 0, 0, w * delta, h, 0, 0, w * delta, h);
        previousDelta = delta;
    }(0.5);

    var position = $('canvas').position();
    $('canvas').on("mousemove", function( event ) {
        draw((event.pageX - position.left) / w);
    });

});

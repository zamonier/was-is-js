$(function(){

    var previousDelta = true;
    var beforeURL = '/images/1915.jpg';
    var afterURL = '/images/2013.jpg';
    var w = 848;
    var h = 561;

    var drawAfterImage2 = function(ctx, afterImage, delta){
        ctx.drawImage(afterImage, 0, 0, w * delta, h * delta, 0, 0, w * delta, h * delta);
    };

    var drawAfterImage1 = function(ctx, afterImage, delta){
        ctx.drawImage(afterImage, 0, 0, w * delta, h, 0, 0, w * delta, h);
    };

    var draw = function(delta){
        var ctx = document.getElementById('canvas').getContext('2d');
        if(previousDelta || previousDelta > delta){
            var beforeImage = new Image();
            beforeImage.src = beforeURL;
            ctx.drawImage(beforeImage, 0, 0, w, h, 0, 0, w, h);
        }
        var afterImage = new Image();
        afterImage.src = afterURL;
        drawAfterImage2(ctx, afterImage, delta);
        previousDelta = delta;
    };

    var position = $('canvas').position();
    $('canvas').on("mousemove", function( event ) {
        draw((event.pageX - position.left) / w);
    });

    draw(0.5);
});

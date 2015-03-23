$(function(){

    var previousDelta = true;
    var beforeURL = '/images/1915.jpg';
    var afterURL = '/images/2013.jpg';
    var w = 848;
    var h = 561;

    var drawAfterImage1 = function(ctx, afterImage, delta){
        ctx.drawImage(afterImage, 0, 0, w * delta, h, 0, 0, w * delta, h);
    };

    var drawAfterImage2 = function(ctx, afterImage, delta){
        ctx.drawImage(afterImage, 0, 0, w * delta, h * delta, 0, 0, w * delta, h * delta);
    };

    var drawAfterImage3 = function(ctx, afterImage, delta){
        var h1 = delta * h * 1.1;
        var drawSquare = function(x, y, h1) {
            ctx.drawImage(afterImage, x - 0.5 * h1, y - 0.5 * h1, h1, h1, x - 0.5 * h1, y - 0.5 * h1, h1, h1);
        };
        drawSquare(0, 0.5 * h, h1);
        drawSquare(0.5 * w, 0.5 * h, h1);
        drawSquare(w, 0.5 * h, h1);
    };

    var drawAfterImage4 = function(ctx, afterImage, delta){
        var canvas = document.createElement('canvas');
        canvas.width = afterImage.width;
        canvas.height = afterImage.height;

        var ctx3 = canvas.getContext('2d');
        ctx3.drawImage(afterImage, 0, 0);
        var imageData = ctx3.getImageData(0, 0, canvas.width, canvas.height);
        var data = imageData.data;
        for (var i = 0; i < data.length; i += 4) {
            data[i]     = data[i];
            data[i + 1] = data[i + 1];
            data[i + 2] = data[i + 2];
            data[i + 3] = delta * 255;
        }

        ctx3.putImageData(imageData, 0,0);
        ctx.drawImage(canvas, 0, 0);
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
        drawAfterImage4(ctx, afterImage, delta);
        previousDelta = delta;
    };

    var position = $('canvas').position();
    $('canvas').on('mousemove', function( event ) {
        draw((event.pageX - position.left) / w);
    });

    draw(0.5);
});

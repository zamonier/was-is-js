$(function(){

    var draw = function(delta){
      var c = document.getElementById('canvas');
      var ctx = c.getContext('2d');
      var img1 = new Image();
      img1.src = '/images/1915.jpg';
      ctx.drawImage(img1, 0, 0, 848, 561, 0, 0, 848, 561);
      var img = new Image();
      img.src = '/images/2013.jpg';
      ctx.drawImage(img, 0, 0, 848 * (delta), 561, 0, 0, 848 * ( delta), 561);
    };

    draw(0);

    var position = $('canvas').position();
    $('canvas').on("mousemove", function( event ) {
          draw((event.pageX - position.left) / 848);
    });
});

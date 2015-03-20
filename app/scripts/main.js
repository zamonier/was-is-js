$(function(){
    var c = document.getElementById('canvas');
    console.log(c);
    var ctx = c.getContext('2d');
    var img = new Image();
    img.src = '/images/2013.jpg';
    ctx.drawImage(img, 0, 0, 300, 561, 0, 0, 300, 561);
});

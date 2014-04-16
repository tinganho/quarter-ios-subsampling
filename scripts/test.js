
var $image = document.querySelector('.js-image-raw')
  , $canvas = document.querySelector('.js-quarter-canvas');

$image.src = '/images/sample.jpg';
$image.onload = function() {
  $canvas.width = $image.naturalWidth / 4;
  $canvas.height = $image.naturalHeight / 4;
  var context = $canvas.getContext('2d');
  context.drawImage($image, 0, 0);
}


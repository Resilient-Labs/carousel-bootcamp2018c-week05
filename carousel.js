document.getElementById('previous').onclick = previous;
document.getElementById('next').onclick = next;

var carousel = ['alaska.jpeg','fall.jpg','fog.jpeg','mothernature.jpeg','mountains.jpeg','rain.jpeg','traintrack.jpg']
var image = document.getElementById('image')
var i = 0;

function previous(){
  i--
  if (i < 0 ) {
    i = carousel.length - 1
  }
  image.src = carousel[i]
  console.log(carousel[i]);
}

function next(){
i++
if (i == carousel.length) {
  i = 0
}
image.src = carousel[i]
console.log(carousel[i]);
}

//creating a carousel


document.getElementById('previous').onclick =previous;
document.getElementById('next').onclick =next;

var carousel = ['wolves/img0.jpg','wolves/img1.jpg','wolves/img2.jpeg','wolves/img3.jpg','wolves/img4.jpg'];
var img = document.getElementById('img');
var i= 0;
function previous(){
i--;
if(i< 0){
i = carousel.length-1;
}
img.src=carousel[i];
 console.log(carousel[i]);
}

function next(){
i++;
if(i === carousel.length){
i = 0
}
img.src = carousel[i];
console.log(carousel[i]);
}

// var pictures = [CP.jpg, D2.jpg, DS.jpg, GT.jpeg, JF.jpg, m1.gif, S2.jpg]
var myImage = documentgetElementByClass('p1');
var imageArray =  [CP.jpg, D2.jpg, DS.jpg, GT.jpeg, JF.jpg, m1.gif, S2.jpg];
var imageIndex = 1;

function changeImage(){
  myImage.setAttribute("src", imageArray[image.index]);
  imageIndex++;
  If (imageIndex  >  3 ) {imageIndex =0;}
}

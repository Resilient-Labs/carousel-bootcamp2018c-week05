// var pictures = [CP.jpg, D2.jpg, DS.jpg, GT.jpeg, JF.jpg, m1.gif, S2.jpg]
//create variable for img to be called on by index value
let myImage = document.getElementsByTagName('img')[0];
//slideId  variable created to hold all images
let slideId = ["image/CP.jpg", "image/D2.jpg", "image/DS.jpg", "image/GT.jpeg", "image/JF.jpg", "image/mn.gif", "image/S2.jpg"]
let index = 0
document.getElementById('next').onclick = nextImage
document.getElementById('back').onclick = backImage

function nextImage(){
  index += 1
  if (slideId.length==index){
    index = 0;
  }
  console.log(slideId[index])
  myImage.src = slideId[index]
}

function backImage(){
  index -= 1
  if(0 > index){
    index = slideId.length - 1;
  }
  console.log(slideId[index])
  myImage.src = slideId[index]
}

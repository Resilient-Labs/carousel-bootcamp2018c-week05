// addeventlistener when click on button (next or previous), kick off function
document.getElementById('previous').onclick = backwards;
document.getElementById('next').onclick = forwards;

// make an array of images src
var plantArr = ["images/plant1.jpeg", "images/plant2.jpeg", "images/plant3.jpeg", "images/plant4.jpeg", "images/plant5.jpeg", "images/plant6.jpeg", "images/plant.jpeg", ];
var length = plantArr.length;
// html img element by ID
var img = document.getElementById("current");
// curent state of gallery
var i = 0

// write two funtions that iterates through each element in plantArr and adds it to html
// when click go to the next image which starts in array
function backwards() {
  // if array reaches 0 start at array end
  if(i === 0){
    i = length-1;
  }
  // each click shows new image, and updates i
  else{
    img.src = plantArr[i]
    i = i-1;
  }
}

function forwards() {
  // if the array reaches the end, start the array over
  if(i === length-1){
    i = 0;
  }
  // each click shows new image, and updates i
  else{
    img.src = plantArr[i]
    i = i+1;
  }
}

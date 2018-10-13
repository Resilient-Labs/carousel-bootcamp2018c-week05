// addeventlistener when click on button (next or previous), kick off function
document.getElementById('devolve').onclick = backwards;
document.getElementById('evolve').onclick = forwards;

// make an array of images src
var evoLine = ["images/0.gif",
"images/1.gif",
"images/2.gif",
"images/3.gif",
"images/4.gif",
"images/5.gif",
"images/6.png"];
var length = evoLine.length;
// html img element by ID
var img = document.getElementById('source');
// curent state of gallery
var i = 0;

// write two funtions that iterates through each element in plantArr and adds it to html
// when click go to the next image which starts in array
function backwards() {
 // if array reaches 0 start at array end
 i--
 if(i < 0){
  i = evoLine.length - 1;
 }
 // each click shows new image, and updates i
  img.src = evoLine[i]
}

function forwards() {
  i++
 // if the array reaches the end, start the array over
 if(i === evoLine.length){
  i = 0;
 }
 // each click shows new image, and updates i
  img.src = evoLine[i]
}
//addeventlistener for keys being pressed
document.onkeydown = zebra //onkeydown is the universal term used for keyboards 
function zebra(e){ // zebra is calling on two prior functions
  if(e.keyCode===39){
    forwards()
  }
  if(e.keyCode===37){
    backwards()
  }
}

// Waits until document loads to execute functions
$(document).ready(function(){
  // Initlaize array with list of image sources
  var imgArray = ["apple.jpg","banana.png","broccoli.png","carrot.png","grape.png","lettuce.png","melon.png"];
  var index = 0;
  // Calls change image fucntion
  changeImg(index);

  // Behavior for when next button clicked
  $('#nextButton').on('click', function(){
    // Increase index by 1
    index++;
    // If at last image in the array set index to 0
    if (index > (imgArray.length)-1) {
      index = 0;
    }
    changeImg(index);
  });

  // Behavior for when back button clicked
  $('#backButton').on('click', function(){
    // Decrease index by 1
    index--;
    // If at first image in the array set index to last array index
    if (index < 0 ){
      index = imgArray.length-1;
    }
    changeImg(index);
  });
  // Changes image displayed and also applies formatting
  function changeImg(idx){
    $('#content').css('background','url("img/' + imgArray[idx] + '")');
    $('#content').css('background-size','contain');
    $('#content').css('background-position','center');
    $('#content').css('background-repeat','no-repeat');
    // Displays image array index in console
    console.log(imgArray[idx]);
  }


});

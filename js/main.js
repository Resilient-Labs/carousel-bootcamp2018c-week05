// Waits until document loads to execute functions
$(document).ready(function(){
  var imgArray = ["apple.jpg","banana.png","broccoli.png","carrot.png","grape.png","lettuce.png","melon.png"];
  var index = 0;
  changeImg(index);

  // Behavior for when next button clicked
  $('#nextButton').on('click', function(){
    index++;
    if (index > (imgArray.length)-1) {
      index = 0;
    }
    changeImg(index);
  });

  // Behavior for when back button clicked
  $('#backButton').on('click', function(){
    index--;
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
    console.log(imgArray[idx]);
  }


});

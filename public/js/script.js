$(function(){
  console.log("running script file")

  // fullpage.js
  $('#fullpage').fullpage({
    anchors:['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fivePage']
  });

  function play(){
    const audio = document.getElementById('audio')
    audio.play()
  }

  $('#pageOnearrowdown').on('click', function(){
    play()
  })




})

$(function(){
  console.log("running script file")

  // fullpage.js
  $('#fullpage').fullpage({
    anchors:['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fivePage']
  });

  // mobile autoplay audio on clickevent
  function play(){
    const audio = document.getElementById('audio')
    audio.play()
  }
  $('#pageOnearrowdown').on('click', function(){
    play()
  })

  // animate.css
  $(window).load(function(){
    $('#fadeInDown').addClass("animated fadeInDown infinite")
    $('#fadeInUp').addClass("animated fadeInUp infinite")
    $('#lightSpeedIn').addClass("animated lightSpeedIn infinite")

    $('#zoomIn').addClass("animated zoomIn infinite");

  });

  // $('#zoomIn').on("pageload", function(){
  //   console.log("loading zoomin")
  //   if($(this).hasClass("no")){
  //     console.log("no class")
  //   }
  //     $(this).addClass("animated zoomIn")
  // });

})

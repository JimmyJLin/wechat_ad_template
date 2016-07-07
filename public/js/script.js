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

  $('#pageFirstarrowdown').on('click', function(){
    play()
  })

  // animate.css
  $(window).load(function(){
    const fadeInDown = "animated fadeInDown infinite";
    const fadeInUp = "animated fadeInUp infinite";
    const fadeInLeft = "animated fadeInLeft infinite";
    const fadeInRight = "animated fadeInRight infinite";
    const zoomIn = "animated zoomIn infinite";
    const lightSpeedIn = "animated lightSpeedIn infinite";

    // First Page
    $('#fadeInDownFirstPage').addClass(fadeInDown)
    $('#fadeInUpFirstPage').addClass(fadeInUp)
    $('#lightSpeedInFirstPage').addClass(lightSpeedIn)

    // Second Page
    $('#fadeInDownSecondPageTitle').addClass(fadeInDown);
    $('#zoomInSecondPage').addClass(zoomIn);
    $('#fadeInLeftSecondPage').addClass(fadeInLeft);
    $('#fadeInRightSecondPage').addClass(fadeInRight);

    // Third Page
    $('#pageTitleThirdPage').addClass(fadeInDown);
    $('#zoomInThirdPage').addClass(zoomIn);
    $('#fadeInLeftThirdPageRowOne').addClass(fadeInLeft);
    $('#fadeInRightThirdPageRowOne').addClass(fadeInRight);
    $('#fadeInLeftThirdPageRowTwo').addClass(fadeInLeft);
    $('#fadeInRightThirdPageRowTwo').addClass(fadeInRight);
    $('#fadeInLeftThirdPageRowThree').addClass(fadeInLeft);
    $('#fadeInRightThirdPageRowThree').addClass(fadeInRight);
    
    // Fourth Page
    $('#fadeInDownFourthPage').addClass(fadeInDown);
    $('#zoomInFourthPage').addClass(zoomIn);
    $('#fadeInLeftFourthPageRowOne').addClass(fadeInLeft);
    $('#fadeInRightFourthPageRowOne').addClass(fadeInRight);
    $('#fadeInLeftFourthPageRowTwo').addClass(fadeInLeft);
    $('#fadeInRightFourthPageRowTwo').addClass(fadeInRight);
    $('#fadeInLeftFourthPageRowThree').addClass(fadeInLeft);
    $('#fadeInRightFourthPageRowThree').addClass(fadeInRight);

    // Last Page

  });

  // $('#zoomIn').on("pageload", function(){
  //   console.log("loading zoomin")
  //   if($(this).hasClass("no")){
  //     console.log("no class")
  //   }
  //     $(this).addClass("animated zoomIn")
  // });

})

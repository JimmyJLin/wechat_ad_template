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

    // First Page
    $('#fadeInDownFirstPage').addClass("animated fadeInDown infinite")
    $('#fadeInUpFirstPage').addClass("animated fadeInUp infinite")
    $('#lightSpeedInFirstPage').addClass("animated lightSpeedIn infinite")

    // Second Page
    $('#fadeInDownSecondPageTitle').addClass("animated fadeInDown infinite");
    $('#zoomInSecondPage').addClass("animated zoomIn infinite");
    $('#fadeInLeftSecondPage').addClass("animated fadeInLeft infinite");
    $('#fadeInRightSecondPage').addClass("animated fadeInRight infinite");

    // Third Page
    $('#pageTitleThirdPage').addClass("animated fadeInDown infinite");
    $('#zoomInThirdPage').addClass("animated zoomIn infinite");
    $('#fadeInLeftThirdPageRowOne').addClass("animated fadeInLeft infinite");
    $('#fadeInRightThirdPageRowOne').addClass("animated fadeInRight infinite");
    $('#fadeInLeftThirdPageRowTwo').addClass("animated fadeInLeft infinite");
    $('#fadeInRightThirdPageRowTwo').addClass("animated fadeInRight infinite");

    // Fourth Page
    $('#fadeInDownFourthPage').addClass("animated fadeInDown infinite");
    $('#zoomInFourthPage').addClass("animated zoomIn infinite");
    $('#fadeInLeftFourthPageRowOne').addClass("animated fadeInLeft infinite");
    $('#fadeInRightFourthPageRowOne').addClass("animated fadeInRight infinite");
    $('#fadeInLeftFourthPageRowTwo').addClass("animated fadeInLeft infinite");
    $('#fadeInRightFourthPageRowTwo').addClass("animated fadeInRight infinite");
    $('#fadeInLeftFourthPageRowThree').addClass("animated fadeInLeft infinite");
    $('#fadeInRightFourthPageRowThree').addClass("animated fadeInRight infinite");
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

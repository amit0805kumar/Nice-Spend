$(document).ready(() => {
  //Sidebar functioning

  var ham = $(".nav .ham");
  var sideBar = $(".sideBar");
  ham.click(() => {
    sideBar.removeClass("sideBar_closed");
  });
  $(".swipearea").click(() => {
    sideBar.toggleClass("sideBar_closed");
  });

  $(".swipearea,.sideBar").swipe({
    swipeStatus: function (
      event,
      phase,
      direction,
      distance,
      duration,
      fingers
    ) {
      if (phase == "move" && direction == "right") {
        sideBar.removeClass("sideBar_closed");
        return false;
      }
      if (phase == "move" && direction == "left") {
        sideBar.addClass("sideBar_closed");
        return false;
      }
    },
  });

  //   $(window).scroll(function (e) {
  //     var $el = $(".nav");
  //     var isPositionFixed = $el.css("position") == "fixed";
  //     if ($(this).scrollTop() > 2 && !isPositionFixed) {
  //       $el.css({ position: "fixed", top: "0px" });
  //     }
  //     if ($(this).scrollTop() < 2 && isPositionFixed) {
  //       $el.css({ position: "relative", top: "0px" });
  //     }
  //   });
});

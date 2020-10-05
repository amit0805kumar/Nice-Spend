$(document).ready(() => {
  //Sidebar functioning

  var ham = $(".nav .ham");
  var sideBar = $(".sideBar");
  ham.click(() => {
    sideBar.removeClass("sideBar_closed");
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
});

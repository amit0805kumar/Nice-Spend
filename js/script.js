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

  //Slider control

  var sliderBtn = $(".c_btn");
  var sliderPd = $(".pd_sl");
  var hideSl = () => {
    sliderPd.hide();
    sliderPd.each(function () {
      if ($(this).attr("data-id") === `sl1`) {
        $(this).show();
      }
    });
  };
  setTimeout(hideSl, 2000);
  sliderBtn.on("click", function () {
    var id = $(this).attr("data-id");
    sliderBtn.removeClass("active");
    $(this).addClass("active");

    sliderPd.hide();
    sliderPd.each(function () {
      if ($(this).attr("data-id") === `sl${id}`) {
        $(this).show();
      }
    });
  });
});

var sliderBtn = $(".c_btn");
var sliderPd = $(".pd_sl");
var hideSl = () => {
  sliderPd.hide();
  sliderPd.each(function () {
    if ($(this).attr("data-id") === `sl1`) {
      $(this).show();
    }
  });
};
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

  //Input field increment
  var qtyInput = $("#qtyInput");
  var qtyUp = $(".qty #up");
  var qtyDown = $(".qty #down");
  qtyDown.click(() => {
    var val = qtyInput.val();
    if (val > 0) {
      qtyInput.val(val - 1);
    }
  });
  qtyUp.click(() => {
    var val = qtyInput.val();
    qtyInput.val(parseInt(val) + 1);
  });

  //Cart Counter controller

  var cartItem = $(".items_wrapper .item");
  var finalTotal = 0;
  var finalTotalHolder = $(".static_wrapper span");

  var upadteTotal = () => {
    cartItem.each(function (item, obj) {
      var price = parseInt($(obj).find(".each_price").text().replace(",", ""));
      var count = parseInt($(obj).find("input").val());
      var total = $(obj).find(".total_price");
      total.text(price * count);
      finalTotal += parseInt(total.text());
      finalTotalHolder.text(finalTotal);
    });
  };

  cartItem.each(function (item, obj) {
    var price = parseInt($(obj).find(".each_price").text().replace(",", ""));
    var count = parseInt($(obj).find("input").val());
    var total = $(obj).find(".total_price");
    total.text(price * count);

    var qtyIn = $(obj).find("#qtyInputM");
    var up = $(obj).find("#upM");
    var down = $(obj).find("#downM");
    down.click(() => {
      var val = qtyIn.val();
      if (val > 0) {
        qtyIn.val(val - 1);
      }

      price = parseInt($(obj).find(".each_price").text().replace(",", ""));
      count = parseInt($(obj).find("input").val());
      total = $(obj).find(".total_price");
      total.text(price * count);
      finalTotal = 0;
      upadteTotal();
    });
    up.click(() => {
      var val = qtyIn.val();
      qtyIn.val(parseInt(val) + 1);

      price = parseInt($(obj).find(".each_price").text().replace(",", ""));
      count = parseInt($(obj).find("input").val());
      total = $(obj).find(".total_price");
      total.text(price * count);
      finalTotal = 0;
      upadteTotal();
    });
  });

  upadteTotal();
});

$(function () {
  
  
  //region side-bar
  
  let $SideBar = $(".side-bar");
  let $SubTitle = $(".sub-title");
  let $CloseSideBar = $(".times");
  let $OpenSideBar = $(".menu");
  let $LineSideBar = $(".line");
  
  
  
  $("a").click(function (e) {
    e.preventDefault();
    $("html , body").animate({
      
      scrollTop: $("#" + $(this).data("scroll")).offset().top + 1,
    }, 1000);
    
  });
  
  
  $(".icon").on("click", function () {
    let top = $(window).scrollTop();
    if (top > 10) {
      $("html ,body").animate({scrollTop: 0}, 800);
    }
  });
  
  
  $(".links-menu").on("click",function (e) {
    e.stopPropagation();
  });
  
  
  $(".link-img").on("click",function (e) {
    e.stopPropagation();
    $SideBar.toggleClass("grow");
    $SubTitle.toggleClass("opacity")
  });
  
  
  

  $(document).on("click", function () {
    $SideBar.removeClass("grow active");
    $SubTitle.removeClass("opacity");
    $CloseSideBar.fadeOut(100, function () {
      $LineSideBar.css("color", "#109397").fadeIn(50, function () {
        $(this).delay(350).fadeOut(100, function () {
          $OpenSideBar.fadeIn(200);
        });
      });

    });


  });
  
 

  //endregion side-bar


  //region side-bar-in-small-screen

  $OpenSideBar.on("click", function () {
    $(this).toggleClass("open");
    $SideBar.addClass("active");
    $(this).fadeOut(100, function () {
      $LineSideBar.fadeIn(50, function () {
        $(this).css("color", "#424446").delay(350).fadeOut(100, function () {
          $CloseSideBar.fadeIn(200);
        });
      });

    });


  });

  $CloseSideBar.on("click", function () {
    $SideBar.removeClass("active");
    $(this).fadeOut(100, function () {
      $LineSideBar.css("color", "#109397").fadeIn(50, function () {
        $(this).delay(350).fadeOut(100, function () {
          $OpenSideBar.fadeIn(200);
        });
      });

    });
  });

  $LineSideBar.on("click", function () {
    $SideBar.removeClass("active");
    $(this).css("color", "#109397").fadeOut(100, function () {
      $CloseSideBar.css("display", "none");
      $OpenSideBar.fadeIn(200);


    });
  });


  $(".img-and-link").on("click", function () {
    $SideBar.removeClass("active");
    $(".times").fadeOut(100, function () {
      $(".line").css("color", "#109397").fadeIn(50, function () {
        $(this).delay(350).fadeOut(100, function () {
          $(".menu").fadeIn(200);
        });
      });

    });


  });


  //endregion side-bar-in-small-screen


  // region scroll to fade loge
  
  $(window).scroll(function () {
    let scrollTop = $(this).scrollTop();
    let serviceBox = $(".service-box").offset().top;
    let one = $(".one").offset().top;
    let two = $(".two").offset().top;
    let three = $(".three").offset().top;
    let firstLogo = $("#gnp");
    let secondLogo = $("#gpi");
    let thirdLogo = $("#gap");
    let lastLogo = $("#last-gnp");
    
    if (scrollTop >= serviceBox) {
      firstLogo.css("transform", "translateX(100%)");
    } else {
      firstLogo.css("transform", "translateX(-100%)");
    }
    if (scrollTop >= one) {
      secondLogo.css("transform", "translateX(100%)");
    } else {
      secondLogo.css("transform", "translateX(-100%)");
    }
    if (scrollTop >= two) {
      thirdLogo.css("transform", "translateX(100%)");
    } else {
      thirdLogo.css("transform", "translateX(-100%)");
    }
    if (scrollTop >= three) {
      lastLogo.css("transform", "translateX(100%)");
    }
    else {
      lastLogo.css("transform", "translateX(-100%)");
    }
    
    
    
    
  });
  //endregion scroll to fade loge
  
  
  // region footer
  
  let $form = $(".form");
  $form.not(":first").hide();
  
  $(".tap-content").on("click", function () {
    let index = $(this).addClass("tap-active").siblings().removeClass("tap-active").end().data("form-index");
    $form.hide().eq(index).fadeIn();
  });
  
 
  
  //endregion footer
  
  
});


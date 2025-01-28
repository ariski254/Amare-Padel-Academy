// toggle
$(document).ready(function () {
  $(".search-toggle").click(function () {
    $(".search-wrapper").toggleClass("show");
  });

  $(".modal-toggle").click(function () {
    $(".modalBox").toggleClass("show");
  });

  $(".modalBox").click(function () {
    $(this).removeClass("show");
  });

  $(".spinner").click(function () {
    $(".theme-selector").toggleClass("show");
  });
  $(".light").click(function () {
    $("body").addClass("light-theme");
    $("body").removeClass("dark-theme");
  });
  $(".dark").click(function () {
    $("body").toggleClass("dark-theme");
    $("body").removeClass("light-theme");
  });
});

// smooth scroll
$("a.nav-link, .smooth-scroll").click(function (e) {
  if (
    location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") &&
    location.hostname === this.hostname
  ) {
    var target = $(this.hash);
    target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
    if (target.length) {
      e.preventDefault();
      $("html, body").animate(
        {
          scrollTop: target.offset().top,
        },
        1000,
        function () {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) {
            return false;
          } else {
            $target.attr("tabindex", "-1");
            $target.focus();
          }
        }
      );
    }
  }
});

// JavaScript to handle scroll-triggered animation
document.addEventListener("DOMContentLoaded", function () {
  const aboutSection = document.getElementById("about-us");
  const aboutContent = aboutSection.querySelector(".about-content");

  window.addEventListener("scroll", function () {
    const sectionPosition = aboutSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionPosition < windowHeight) {
      aboutContent.classList.add("visible");
    }
  });
});

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

// Program
// Wait until the DOM is fully loaded before executing the script
document.addEventListener("DOMContentLoaded", function () {
  // Get all tab links
  const tabLinks = document.querySelectorAll("#program-tabs .nav-link");

  // Function to handle the tab switching
  tabLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default behavior of the link (no page jump)

      // Remove 'active' class from all tab links
      tabLinks.forEach((link) => link.classList.remove("active"));

      // Add 'active' class to the clicked tab link
      link.classList.add("active");

      // Hide all tab content
      const tabContents = document.querySelectorAll(".tab-pane");
      tabContents.forEach((content) =>
        content.classList.remove("show", "active")
      );

      // Show the corresponding tab content
      const targetTabContent = document.querySelector(
        `#${link.id.replace("program-tab", "program-tab-content")}`
      );
      targetTabContent.classList.add("show", "active");
    });
  });
});

// Sponsor
var copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logos").appendChild(copy);

// coach
var swiper = new Swiper(".swiper-container", {
  slidesPerView: 1, // Menampilkan 4 slide pada layar besar
  spaceBetween: 20, // Jarak antar slide (pastikan cukup agar tidak terpotong)
  loop: true, // Mengaktifkan loop agar carousel berputar tanpa henti
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1024: {
      slidesPerView: 3, // 4 slide pada layar besar
    },
    768: {
      slidesPerView: 2, // 2 slide pada tablet
    },
    480: {
      slidesPerView: 1, // 1 slide pada layar kecil
    },
  },
  centeredSlides: false, // Menjaga agar slide tidak tersusun secara melengkung
  watchOverflow: true, // Memastikan jika ada lebih dari 4 slide, sisanya disembunyikan
});

// Portfolio
$(document).ready(function () {
  // Initialize the Magnific Popup on elements with the class "image-popup"
  $(".image-popup").magnificPopup({
    type: "image",
    gallery: {
      enabled: true, // Enables gallery navigation through images
    },
    removalDelay: 300, // Delay before closing the popup
    mainClass: "mfp-fade", // Fade effect
  });
});

// Page_navbar
// $(window).scroll(function () {
//   var scroll = $(window).scrollTop();
//   if (scroll >= 100) {
//     $(".page-navbar").addClass("sticky");
//   } else {
//     $(".page-navbar").removeClass("sticky");
//   }
// });

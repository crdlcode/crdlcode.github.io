import swal from "sweetalert2";

// Handle contact form submission listener
const formSubmit = () => {
  $("form").on("submit", function(event) {
    // send info to focuspocus
    $.post($(this).attr("action"), $(this).serialize(), "json");
    // prevent focus pocus popup and page reload
    event.preventDefault();
    // sweet alert to let user know all is well
    swal({
      type: "success",
      title: "Message Sent!",
      text: "Thank you for your message. I will get back to you shortly."
    });
    $("form")[0].reset();
  });
};

// Smooth scroll listener
const smoothScroll = () => {
  $(document).on("click", 'a[href^="#"]', function(event) {
    event.preventDefault();

    $("html, body").animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top
      },
      900,
      "swing"
    );
  });
};

// Hamburger menu listener
const hamburgerToggle = () => {
  $(".hamburger").on("click", function(e) {
    $(".hamburger").toggleClass("is-active");
    $(".nav-sections").toggleClass("toggle");
  });
};

// Reveal animations
const reveal = () => {
  ScrollReveal().reveal(".nav-bar", { delay: 50 });
  ScrollReveal().reveal(".landing-page-body", { reset: true, delay: 50 });
  ScrollReveal().reveal(".get-started", { reset: true, delay: 50 });
  ScrollReveal().reveal(".bio", { reset: true });
  ScrollReveal().reveal(".skills", { reset: true });
  ScrollReveal().reveal(".project", { reset: true });
};

// Init function for all listeners
const init = () => {
  hamburgerToggle();
  smoothScroll();
  formSubmit();
  reveal();
};

// Can also be included with a regular script tag
import Typed from 'typed.js';

var options = {
  strings: ["<i>First</i> sentence.", "&amp; a second sentence."],
  typeSpeed: 40
}

var typed = new Typed(".element", options);

// Doc ready
$(function() {
  init();
});

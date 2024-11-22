$(document).ready(function () {
    // Scrollspy to highlight active section in navbar
    $('body').scrollspy({ target: '.navbar', offset: 100 });
  
    // Smooth scrolling when clicking on navbar links
    $('.nav-link').on('click', function (event) {
      var target = $(this).attr('href');
      $('html, body').animate({
        scrollTop: $(target).offset().top - 50
      }, 1000);
      event.preventDefault();
    });
  });
  
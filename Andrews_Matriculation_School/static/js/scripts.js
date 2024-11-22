$(document).ready(function () {
    // Smooth scrolling for internal links
    $('a.nav-link, .btn-primary').on('click', function (e) {
      if (this.hash !== "") {
        e.preventDefault();
        const hash = this.hash;
  
        $('html, body').animate(
          {
            scrollTop: $(hash).offset().top,
          },
          800,
          function () {
            window.location.hash = hash;
          }
        );
      }
    });
  });
  
  $(document).ready(function () {
    // Smooth scrolling for hero section buttons
    $('a.btn').on('click', function (e) {
      if (this.hash !== "") {
        e.preventDefault();
        const hash = this.hash;
  
        $('html, body').animate(
          {
            scrollTop: $(hash).offset().top,
          },
          800,
          function () {
            window.location.hash = hash;
          }
        );
      }
    });
  });
  

  $(document).ready(function () {
    // Example: Add animations when the section is scrolled into view (optional)
    $(window).on('scroll', function () {
      const aboutOffset = $('.about-us').offset().top - $(window).height();
      if ($(window).scrollTop() > aboutOffset) {
        $('.about-us img').addClass('animate-img');
      }
    });
  });
  

  $(document).ready(function () {
    // Example: Add animations for cards on scroll (optional)
    $(window).on('scroll', function () {
      $('.card').each(function () {
        const cardOffset = $(this).offset().top - $(window).height();
        if ($(window).scrollTop() > cardOffset) {
          $(this).addClass('fade-in');
        }
      });
    });
  });

  
  $(document).ready(function () {
    // Example: Add animations when cards come into view (optional)
    $(window).on('scroll', function () {
      $('.card').each(function () {
        const cardOffset = $(this).offset().top - $(window).height();
        if ($(window).scrollTop() > cardOffset) {
          $(this).addClass('fade-in');
        }
      });
    });
  });
  

  $(document).ready(function () {
    // Set up modal to display the clicked image
    $('#imageModal').on('show.bs.modal', function (event) {
      var button = $(event.relatedTarget); // The button that triggered the modal
      var imgSrc = button.data('img'); // Extract the image source from data-img attribute
      var modalImage = $('#modalImage'); // The modal image element
      modalImage.attr('src', imgSrc); // Set the image source to the clicked image
    });
  });
  

  $(document).ready(function () {
    // Initialize carousel
    $('#testimonialsCarousel').carousel({
      interval: 5000 // auto-slide every 5 seconds
    });
  
    // Optional: Add fade transition to carousel items
    $('.carousel').on('slid.bs.carousel', function () {
      $('.carousel-item').css('opacity', '0');
      $('.carousel-item.active').css('opacity', '1');
    });
  });
  

  $(document).ready(function () {
    // Handle form submission
    $('#admissionForm').on('submit', function (event) {
      event.preventDefault(); // Prevent the default form submission
  
      // Show success message
      $('#formMessage').fadeIn();
  
      // Clear form fields after submission
      $('#admissionForm')[0].reset();
    });
  });
  
  $(document).ready(function () {
    // Handle form submission
    $('#contactForm').on('submit', function (event) {
      event.preventDefault(); // Prevent the default form submission
  
      // Show success message
      $('#formMessage').fadeIn();
  
      // Clear form fields after submission
      $('#contactForm')[0].reset();
    });
  });
  
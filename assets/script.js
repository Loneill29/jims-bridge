
// fix sidebar to window on scroll
var Sticky = (function() {
  var CSS_ACTIVE = 'is-fixed';

  var Sticky = {
    element: null,
    position: 0,
    addEvents: function() {
      window.addEventListener('scroll', this.onScroll.bind(this));
    },

    init: function(element) {
      this.element = element;
      this.addEvents();
      this.position = element.offsetTop ;
      this.onScroll();
    },

    aboveScroll: function() {
      return this.position < window.scrollY;
    },

    onScroll: function(event) {
      if (this.aboveScroll()) {
        this.setFixed();
      } else {
        this.setAbsolute();
      }
    },
//fix sidebar in place after scroll
    setFixed: function() {
      this.element.classList.add(CSS_ACTIVE);
      this.element.style.position = 'fixed';
      this.element.style.top = 0;
    },
//scroll to sidebar from top of page
    setAbsolute: function() {
      this.element.classList.remove(CSS_ACTIVE);
      this.element.style.position = 'absolute';
      this.element.style.top = 'auto';
    }
  };

  return Sticky;

})();

// init sticky
var sticky = document.querySelector('.sticky');
if (sticky)
  Sticky.init(sticky);



// sidebar image slideshow
  var slideIndex = 0;
  carousel();

  function carousel() {
      var i;
      var x = document.getElementsByClassName("slides"); // grabs images with classname "slides"
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > x.length) {slideIndex = 1}
      x[slideIndex-1].style.display = "block";
      setTimeout(carousel, 5000); // image changes every 5 seconds
  }

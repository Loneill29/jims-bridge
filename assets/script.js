// scroll photos on Event page

$(document).on("click", '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});

// hide top of navbar on scroll

var prevScrollPosition = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPosition = window.pageYOffset;
  if (prevScrollPosition > currentScrollPosition) {
    document.getElementById("nav").style.top = "0";
  } else {
    document.getElementById("nav").style.top = "-80px";
  }
  prevScrollPosition = currentScrollPosition;
}

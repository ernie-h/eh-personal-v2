window.addEventListener('scroll', function (e) {
  if (window.scrollY >= document.querySelector(".Hero").scrollHeight) {
    document.querySelector("nav").classList.add('HeaderNav--fixed');
    // document.querySelector("nav div").classList.add('visible-logo');
    document.querySelector(".HeaderNav-Placeholder").classList.add("displayPlaceholder");
    document.querySelector(".HeaderNav-Logo").classList.add("random-test");
    // document.querySelector(".HeaderNav-Logo svg").style.transform = "scale(0.3)"
  }
  else {
    document.querySelector("nav").classList.remove('HeaderNav--fixed');
    // document.querySelector("nav div").classList.remove('visible-logo');
    document.querySelector(".HeaderNav-Placeholder").classList.remove("displayPlaceholder");

  }
});
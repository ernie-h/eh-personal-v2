window.addEventListener('scroll', function (e) {
  if (window.scrollY >= document.querySelector(".Hero").scrollHeight) {
    document.querySelector("nav").classList.add('HeaderNav--fixed');
    // document.querySelector("nav div").classList.add('visible-logo');
    this.document.querySelector(".HeaderNav-Placeholder").classList.add("displayPlaceholder");
  }
  else {
    document.querySelector("nav").classList.remove('HeaderNav--fixed');
    // document.querySelector("nav div").classList.remove('visible-logo');
    this.document.querySelector(".HeaderNav-Placeholder").classList.remove("displayPlaceholder");

  }
});
document.addEventListener("DOMContentLoaded", function () {
  var headings = document.getElementsByTagName("h1");
  for (var i = 0; i < headings.length; i++) {
    headings[i].addEventListener("click", function () {
      window.location.href = "/index.html"; // Replace with your desired index page URL
    });
  }
});

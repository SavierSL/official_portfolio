window.addEventListener("DOMMouseScroll", handleScroll);
window.addEventListener("mousewheel", handleScroll);

function wheelDistance(e) {
  console.log(e);
  if (!e) {
    e = window.event;
  }
  var w = e.wheelDelta,
    d = e.detail;
  if (d) {
    return -d / 3; // Firefox;
  }

  // IE, Safari, Chrome & other browsers
  return w / 120;
}

function handleScroll(e) {
  var delta = wheelDistance(e);
  console.log(delta);
  var time = 1000;
  var distance = 200;

  $("html, body")
    .stop()
    .animate(
      {
        scrollTop: $(window).scrollTop() - distance * delta,
      },
      time
    );
}

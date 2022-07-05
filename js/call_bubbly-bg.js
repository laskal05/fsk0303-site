const ua = window.navigator.userAgent;
const isIE =
  ua.indexOf("MSIE") !== -1 || ua.indexOf("Trident") !== -1 ? true : false;
bubbly({
  blur: (Math.random() * 360) / 8, // default is 4
  bubbleFunc: function() {
    const rand = Math.random() * 0.25;
    return "hsla(50, 50%, 100%," + rand + ")";
  },
  bubbles: 60, // default is Math.floor((canvas.width + canvas.height) * 0.02);
  canvas: document.getElementById("#home"), // default is created and attached
  colorStart: "#006677", // default is blue-ish
  colorStop: "#0066aa", // default is blue-ish
  compose: "lighter", // default is "lighter"
  shadowColor: "#000", // default is #fff
  angleFunc: function() {
    return Math.random() * Math.PI * 2; // default is this
  },
  velocityFunc: function() {
    if (isIE) return 1.0 + Math.random() * 1; // default is this
    return 0.1 + Math.random() * 1; // default is this
  },
  radiusFunc: function() {
    return 4 + Math.random() * 15;
  } // default is 4 + Math.random() * width / 25
});

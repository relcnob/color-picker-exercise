"uses strict";
// showColor();
document.querySelector("input").addEventListener("input", showColor);

showColor();

function showColor() {
  // HEX
  let hexValue = document.querySelector("input").value;
  //   console.log(hexValue.slice(1));
  document.querySelector("#hex-value").textContent =
    "HEX: " + hexValue.toUpperCase();
  document.querySelector(".colorbox").style.backgroundColor = hexValue;

  // RGB
  let r = parseInt(hexValue.slice(1).substring(0, 2), 16);
  let g = parseInt(hexValue.slice(1).substring(2, 4), 16);
  let b = parseInt(hexValue.slice(1).substring(4, 6), 16);
  //   console.log(`RGB: ${r} ${g} ${b}`);

  document.querySelector("#rgb-value").textContent = `RGB: ${r} ${g} 	${b}`;

  // HSL

  r /= 255;
  g /= 255;
  b /= 255;

  let h, s, l;

  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);

  if (max === min) {
    h = 0;
  } else if (max === r) {
    h = 60 * (0 + (g - b) / (max - min));
  } else if (max === g) {
    h = 60 * (2 + (b - r) / (max - min));
  } else if (max === b) {
    h = 60 * (4 + (r - g) / (max - min));
  }

  if (h < 0) {
    h = h + 360;
  }

  l = (min + max) / 2;

  if (max === 0 || min === 1) {
    s = 0;
  } else {
    9;
    s = (max - l) / Math.min(l, 1 - l);
  }
  // multiply s and l by 100 to get the value in percent, rather than [0,1]
  s *= 100;
  l *= 100;

  document.querySelector("#hsl-value").textContent = `HSL: ${Math.round(
    h
  )}, ${Math.round(s)}%, ${Math.round(l)}%`;

  //   console.log("hsl(%f,%f%,%f%)", h, s, l);
}

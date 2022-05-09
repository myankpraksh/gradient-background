var colorOne = document.querySelectorAll("input")[0];
var colorTwo = document.querySelectorAll("input")[1];
var colorThree = document.querySelectorAll("input")[2];
var angle = document.querySelectorAll("input")[3];
var body = document.querySelector("body");
var plus = document.querySelectorAll("button")[1];
var generate = document.querySelectorAll("button")[2];
var noColor = 2;
var string = document.getElementById("gradientString");
var colorThreeInput = document.getElementById("colorThreeInput");
var randomColor = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return "#" + n.slice(0, 6);
};

//function to copy text to clipboard
const copyToClipboard = (str) => {
  const el = document.createElement("textarea");
  el.value = str;
  el.setAttribute("readonly", "");
  el.style.position = "absolute";
  el.style.left = "-9999px";
  document.body.appendChild(el);
  const selected =
    document.getSelection().rangeCount > 0
      ? document.getSelection().getRangeAt(0)
      : false;
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
  if (selected) {
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(selected);
  }
};
//A function to set all colors and angle value to a random value
var generateFunction = () => {
  let colorCode = randomColor();
  colorOne.value = colorCode;
  colorCode = randomColor();
  colorTwo.value = colorCode;
  colorCode = randomColor();
  colorThree.value = colorCode;
  angle.value = Math.floor(Math.random() * 360 + 0);
};
//Setting Initial input values
generateFunction();
//template array for two colors
var gradientArray = [
  `linear-gradient(${angle.value}deg`,
  `${colorOne.value}`,
  `${colorTwo.value}`,
];
//template array for 3 colors
var gradientArray3 = [
  `linear-gradient(${angle.value}deg`,
  `${colorOne.value}`,
  `${colorTwo.value}`,
  `${colorThree.value}`,
];
//setting initial value of gradient string
var gradientString = ``;
//function to create gradient string for two colors
var setGradientString2 = () => {
  gradientString = ``;
  gradientArray = [
    `linear-gradient(${angle.value}deg`,
    `${colorOne.value}`,
    `${colorTwo.value}`,
  ];
  gradientArray.forEach((str, i) => {
    if (i == gradientArray.length - 1)
      gradientString = gradientString.concat(str) + `)`;
    else gradientString = gradientString.concat(str) + `,`;
  });
  string.textContent = gradientString;
};
//function to create gradient string for 3 colors
var setGradientString3 = () => {
  gradientString = ``;
  gradientArray3 = [
    `linear-gradient(${angle.value}deg`,
    `${colorOne.value}`,
    `${colorTwo.value}`,
    `${colorThree.value}`,
  ];
  gradientArray3.forEach((str, i) => {
    if (i == gradientArray3.length - 1)
      gradientString = gradientString.concat(str) + `)`;
    else gradientString = gradientString.concat(str) + `,`;
  });
  string.textContent = gradientString;
};
//function to set gradient string
var setGradientString = () => {
  if (noColor == 2) setGradientString2();
  else setGradientString3();
};
//setting initial background
setGradientString();
body.style.background = gradientString;
//updating background using input
colorOne.addEventListener("input", () => {
  setGradientString();
  body.style.background = gradientString;
});
colorTwo.addEventListener("input", () => {
  setGradientString();
  body.style.background = gradientString;
});
colorThree.addEventListener("input", () => {
  setGradientString();
  body.style.background = gradientString;
});
angle.addEventListener("input", () => {
  setGradientString();
  body.style.background = gradientString;
});
//generating random background
generate.addEventListener("click", () => {
  generateFunction();
  setGradientString();
  body.style.background = gradientString;
});
//adding removing third color
plus.addEventListener("click", () => {
  if (noColor == 2) {
    noColor++;
    colorThreeInput.style.display = "block";
    plus.textContent = "Remove third color!";
  } else {
    noColor--;
    colorThreeInput.style.display = "none";
    plus.textContent = "Add a third color!";
  }
  setGradientString();
  body.style.background = gradientString;
});
//event listener to copy css code to clipboard
string.addEventListener("click", () => {
  copyToClipboard(gradientString);
});

const images = [
    "다운로드 (2).jpeg",
    "다운로드 (3).jpeg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

// console.log(bgImage);

document.body.appendChild(bgImage);
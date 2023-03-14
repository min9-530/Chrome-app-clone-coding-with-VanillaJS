const images = [
    "images.jpeg",
    "stars-2616537.jpg",
    "다운로드 (1).jpeg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

console.log(bgImage);

document.body.appendChild(bgImage);
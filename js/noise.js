// const canvas = document.getElementById("noise");
// const ctx = canvas.getContext("2d");

// function resizeCanvas() {
//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;
//   generateNoise();
// }

// function generateNoise() {
//   const imageData = ctx.createImageData(canvas.width, canvas.height);
//   const data = imageData.data;

//   for (let i = 0; i < data.length; i += 4) {
//     const value = Math.random() * 255;
//     data[i] = value;     // R
//     data[i + 1] = value; // G
//     data[i + 2] = value; // B
//     data[i + 3] = 255;   // Alpha
//   }

//   ctx.putImageData(imageData, 0, 0);
// }

// window.addEventListener("resize", resizeCanvas);
// resizeCanvas();

const canvas = document.getElementById("noise");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

function generateNoise() {
  const imageData = ctx.createImageData(canvas.width, canvas.height);
  const data = imageData.data;

  for (let i = 0; i < data.length; i += 4) {
    const value = Math.random() * 255;
    data[i] = value;       // R
    data[i + 1] = value;   // G
    data[i + 2] = value;   // B
    data[i + 3] = 255;     // Alpha
  }

  ctx.putImageData(imageData, 0, 0);
}

// Animación infinita
function animateNoise() {
  generateNoise();
  requestAnimationFrame(animateNoise);
}

animateNoise();


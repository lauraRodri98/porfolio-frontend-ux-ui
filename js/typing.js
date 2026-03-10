const text = "user-friendly interfaces. Experience working with modern web technologies.";
const element = document.getElementById("typing");

let index = 0;

function typeWriter() {

  if (index < text.length) {
    element.textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, 40); // velocidad de escritura
  }

}

typeWriter();
document.addEventListener("DOMContentLoaded", () => {

  /* ----------------------------- */
  /* ANIMACIONES DE SCROLL (REVEAL) */
  /* ----------------------------- */

  const elements = document.querySelectorAll(
    ".marquee, .content__project-profesional, .content__project-personal, .title-experience, .experience__one, .experience__two, .title-working-stack, .working-stack__section"
  );

  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      entry.target.classList.toggle("show", entry.isIntersecting);
    });
  },{ threshold:0.25 });

  elements.forEach(el => observer.observe(el));


  /* ----------------------------- */
  /* CIRCULOS BACKGROUND */
  /* ----------------------------- */

  const circles = document.querySelectorAll(".circle");

  const circleObserver = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add("show");
      }else{
        entry.target.classList.remove("show");
      }
    });
  },{threshold:0.1});

  circles.forEach(circle=>{
    circleObserver.observe(circle);
  });


  /* ----------------------------- */
  /* MENU CAMBIO COLOR */
  /* ----------------------------- */

  const menu = document.querySelector(".menu");

  window.addEventListener("scroll", () => {

    const triggerHeight = window.innerHeight;

    if(window.scrollY > triggerHeight){
        menu.classList.add("white-icons");
    } else{
        menu.classList.remove("white-icons");
    }

  });

});
'use strict'
import ScrollOut from '/resources/js/scroll-out.js';
/*Al usar funciones externas del index.js, se importa cada una de esta manera:
import { ScrollOut } from '/resources/js/scroll-out.js';, o de lo contrario, 
se importa como comúnmente se hace, y en la clase exportada, colocar al final:
export default ScrollOut, como en este caso*/
document.addEventListener('DOMContentLoaded', event => {
  const typed5 = new Typed('#typedJS', {
    strings: [`<span style="--i:1;">W</span><span
                style="--i:1.5;">e</span><span style="--i:2;">b</span><span style="--i:3;">&nbsp</span><span
                style="--i:3.5;">d</span><span style="--i:4;">e</span><span style="--i:4.5;">v</span><span style="--i:5;">e</span><span style="--i:5.5;">l</span><span style="--i:6;">o</span><span style="--i:6.5;">p</span><span style="--i:7;">e</span><span style="--i:7.5;">r</span>`, `<span style="--i:1;">W</span><span
                style="--i:1.5;">e</span><span style="--i:2;">b</span><span style="--i:2.5;">&nbsp</span><span
                style="--i:3;">d</span><span style="--i:3.5;">e</span><span style="--i:4;">s</span><span style="--i:4.5;">i</span><span style="--i:5;">g</span><span style="--i:5.5;">n</span><span style="--i:6;">e</span><span style="--i:6.5;">r</span>`, `<span style="--i:1;">S</span><span
                style="--i:1.5;">o</span><span style="--i:2;">f</span><span style="--i:2.5;">t</span><span style="--i:3;">w</span><span style="--i:3.5;">a</span><span style="--i:4;">r</span><span style="--i:4.5;">e</span><span style="--i:5;">&nbsp</span><span
                style="--i:5.5;">e</span><span style="--i:6;">n</span><span style="--i:6.5;">g</span><span style="--i:7;">i</span><span style="--i:7.5;">n</span><span style="--i:8;">e</span><span style="--i:8.5;">e</span><span style="--i:9;">r</span>`],
    typeSpeed: 60,
    backSpeed: 0,

    cursorChar: '_',
    shuffle: false,
    loop: true,
    smartBackspace: false,
  });

  ScrollOut({
    targets: '.animate__animated'
  }); /*Esta función añade un atributo personalizado al html: [data-scroll="in"], y se añade al lado de la clase de css que se
  quiera condicionar, y cada vez que esté en "in", se activará dicha clase*/

  //-----------------Dinamic Menu---------------------
  const body = document.querySelector("#body");
  const divmenu = document.querySelector("#div-menu");
  const nav = document.querySelector("#navbar");
  const logo = document.querySelector(".logo");
  const imglogo = document.querySelector("#img-logo");
  const logobtn = document.querySelector("#logo-btn");
  const ulli = document.querySelector("#ulli");
  const btnburguer = document.querySelector(".menu-btn__burger");
  const menuBtn = document.querySelector('.menu-btn');
  const li_a = document.querySelectorAll('.li-a');

  window.addEventListener("load", function () {
    divmenu.classList.toggle("menu", divmenu.dataset.scroll == 'in');
    nav.classList.toggle("nav-v", divmenu.dataset.scroll == 'in');
    nav.classList.toggle("nav-h", divmenu.dataset.scroll == 'out');
    logo.classList.toggle("hidden", divmenu.dataset.scroll == 'in');
    btnburguer.classList.toggle("hidden", divmenu.dataset.scroll == 'in');
    ulli.classList.toggle("li-h", divmenu.dataset["scroll"] == 'out'); //another way of dataset
    ulli.classList.toggle("li-v", divmenu.dataset.scroll == 'in');
    logobtn.classList.add("flex", divmenu.dataset.scroll == 'out');
    logobtn.classList.remove("hidden", divmenu.dataset.scroll == 'out');
  });

  window.addEventListener("scroll", function () {
    divmenu.classList.toggle("p-sticky", divmenu.dataset.scroll == 'out');
    divmenu.classList.toggle("menu", divmenu.dataset.scroll == 'in');
    nav.classList.toggle("nav-v", divmenu.dataset.scroll == 'in');
    nav.classList.toggle("nav-h", divmenu.dataset.scroll == 'out');
    nav.classList.toggle("hidden", divmenu.dataset.scroll == 'out');
    logo.classList.toggle("hidden", divmenu.dataset.scroll == 'in');
    btnburguer.classList.toggle("hidden", divmenu.dataset.scroll == 'in');
    ulli.classList.toggle("li-v", divmenu.dataset.scroll == 'in');
    ulli.classList.toggle("li-h", divmenu.dataset["scroll"] == 'out'); //another way of dataset
    ulli.classList.toggle("hidden", divmenu.getAttribute("data-scroll") == 'out'); //another way
    ulli.classList.remove("flex", divmenu.dataset.scroll == 'out');
  });/*Se relaciona el método toggle con el evento scroll para que funcione, y se accionará cuando el atributo
  data-scroll esté out, (data-atributo = atributo personalizado del html), es más poderoso con css puro*/

  let menuOpen = false;
  menuBtn.addEventListener('click', () => {
    menuOpen = !menuOpen;
    menuBtn.classList.toggle("open");
    logobtn.classList.toggle("h-screen");
    logobtn.classList.toggle("h-full");
    body.classList.toggle("overflow-hidden");
    nav.classList.toggle("hidden", divmenu.dataset.scroll == 'out');
    divmenu.classList.toggle("open-p-sticky", menuOpen == true);
    logobtn.classList.toggle("items-center", menuOpen == false);
    logobtn.classList.toggle("items-start", menuOpen == true);
    logo.classList.toggle("hidden", menuOpen == true);
    imglogo.classList.toggle("hidden", menuOpen == false);
    ulli.classList.toggle("li-absolute", menuOpen == true);
    ulli.classList.toggle("li-h", menuOpen == false);
    nav.classList.toggle("nav-h", menuOpen == true);
  });

  li_a.forEach(li_a => li_a.addEventListener("click", () => {
    if (menuOpen) {
      menuOpen = !menuOpen;
      menuBtn.classList.toggle("open");
      logobtn.classList.toggle("h-screen");
      logobtn.classList.toggle("h-full");
      body.classList.toggle("overflow-hidden");
      nav.classList.toggle("hidden", divmenu.dataset.scroll == 'out');
      divmenu.classList.toggle("open-p-sticky", menuOpen == true);
      logobtn.classList.toggle("items-center", menuOpen == false);
      logobtn.classList.toggle("items-start", menuOpen == true);
      logo.classList.toggle("hidden", menuOpen == true);
      imglogo.classList.toggle("hidden", menuOpen == false);
      ulli.classList.toggle("li-absolute", menuOpen == true);
      ulli.classList.toggle("li-h", menuOpen == false);
      nav.classList.toggle("nav-h", menuOpen == true);
    }
  }));

  //---------------------Parallax------------------------
  var rellax = new Rellax('.rellax');

  //-----------------About Me Divition-------------------
  const aboutmePath = {
    values: [
      { x: -5 },
      { x: -20 },
      { x: -50 },
      { x: -100 },
      { x: -700 },
      { x: -800 },
      { x: -900 },

    ]
  };
  const aboutme2Path = {
    values: [
      { x: 5 },
      { x: 20 },
      { x: 50 },
      { x: 100 },
      { x: 700 },
      { x: 800 },
      { x: 900 },
    ]
  };

  const tween = new TimelineLite();
  tween.add(
    TweenLite.to('.aboutme', 0.1, {
      bezier: aboutmePath,
      ease: Power1.easeinOut
    }),
  );
  const tween2 = new TimelineLite();
  tween2.add(
    TweenLite.to('.aboutme2', 5, {
      bezier: aboutme2Path,
      ease: Power1.easeinOut
    })
  );
  const controller = new ScrollMagic.Controller();
  const scene = new ScrollMagic.Scene({ triggerElement: "#art-about", duration: 700, triggerHook: 0, offset: 150 })
    .setPin("#art-about")
    .setTween(tween)
    .addIndicators() // add indicators (requires plugin GSAP)
    .addTo(controller);
  const scene2 = new ScrollMagic.Scene({ triggerElement: "#art-about", duration: 700, triggerHook: 0, offset: 150 })
    .setTween(tween2)
    .addIndicators() // add indicators (requires plugin GSAP)
    .addTo(controller);

  //-------------------Carousel GlideJS--------------------

  let glide = new Glide('.glide', {
    type: "carousel",
    startAt: 0,
    focusAt: 'center',
    animationTimingFunc: "ease-in-out",
    gap: 280,
    perView: 2,
    breakpoints: {
      1200: {
        perView: 2,
        gap: 200,
      },
      1000: {
        perView: 2,
        gap: 150,
      },
      868: {
        perView: 2,
        gap: 80,
      },
      768: {
        perView: 1,
      }
    }
  })

  glide.mount()

  //-------------------- Rotation 3D ----------------------

  let rotated = false;
  const info = document.querySelectorAll('.info');

  info.forEach(info => info.addEventListener("click", () => {
    let parent = info.parentElement.parentElement.parentElement;
    rotated = !rotated;
    parent.classList.add("rotate", rotated === true)
  }));

  const face = document.querySelectorAll('.back-face');

  face.forEach(face => face.addEventListener("click", () => {
    let parent = face.parentElement;
    console.log(parent);
    parent.classList.remove("rotate", rotated === true)
    rotated = !rotated;
  }));

});
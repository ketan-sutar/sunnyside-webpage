const lenis = new Lenis();

lenis.on("scroll", (e) => {
  // console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

document.addEventListener("DOMContentLoaded", function () {
  const menuOpenIcon = document.querySelector(".menu-open");
  const menuCloseIcon = document.querySelector(".menu-close");
  const rightNav = document.querySelector(".right-nav");

  menuOpenIcon.addEventListener("click", function () {
    rightNav.style.display = "flex";
    menuOpenIcon.style.display = "none";
    menuCloseIcon.style.display = "block";
  });

  menuCloseIcon.addEventListener("click", function () {
    rightNav.style.display = "none";
    menuOpenIcon.style.display = "block";
    menuCloseIcon.style.display = "none";
  });
});

Shery.textAnimate("#text-head", {
  style: 2,
  x: -10,
  delay: 0.1,
  duration: 1,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});

const icons = document.querySelectorAll("#icon");
icons.forEach((icon) => {
  icon.addEventListener("mouseover", () => {
    icon.querySelector("path").setAttribute("fill", "#FFFFFF");
  });

  icon.addEventListener("mouseout", () => {
    icon.querySelector("path").setAttribute("fill", "#2C7566");
  });
});

const tl1 = gsap.timeline();

tl1.from("nav,.right-nav ul li a", {
  y: -30,
  opacity: 0,
  delay: 0.3,
  duration: 0.4,
  stagger: 0.1,
});

tl1.from("#text1", {
  y: 10,
  opacity: 0,
  duration: 0.1,
});

gsap.from(".text-part-1 h1,.text-part-1 p,.text-part-1 h5", {
  x: -100,
  opacity: 0,
  duration: 0.3,
  trigger: ".part2",
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".text-part-1 h1",
    scroller: "body",
    start: "top 90%",
    end: "+=200",
    // markers: true,
    toggleActions: "play  resume reverse",
  },
});
gsap.from(".right-side-2 .text-part-2 h1,.text-part-2 p,.text-part-2 h5", {
  x: 100,
  opacity: 0,
  duration: 0.3,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".text-part-2 h1",
    scroller: "body",

    start: "top 90%",
    end: "+=200",
    toggleActions: "play  resume reverse",
  },
});

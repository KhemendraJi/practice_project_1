/* ---------- Locomotive ---------- */
const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});






/* ---------- Cursor ---------- */
const crsr = document.querySelector(".cursor");
const crsrBlur = document.querySelector(".cursor-blur");
const hero = document.querySelector("#hero");
// // update every frame with requestAnimationFrame

function updateCursor(e, xscale, yscale) {
  const x = e.clientX;
  const y = e.clientY;
  crsr.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) scale(${xscale}, ${yscale})`;
  crsrBlur.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
}


function cursorSqueeze(e){
  let xscale = 1;
  let yscale = 1;
  let timer = null;

  let xprev = 0;
  let yprev = 0;

  window.addEventListener("mousemove", (e) => {
    xscale = gsap.utils.clamp(.8, 1.2, e.clientX - xprev)
    yscale = gsap.utils.clamp(.8, 1.2, e.clientY - yprev)
    xprev = e.clientX;
    yprev = e.clientY;

    updateCursor(e, xscale, yscale)

    // Clear the timer
    clearTimeout(timer);

    // Set a new timer to reset the scale after 100ms
    timer = setTimeout(() => {
      xscale = 1;
      yscale = 1;
      updateCursor(e, xscale, yscale)
    }, 100);
  })
}

cursorSqueeze()

window.addEventListener("mousemove", (e) =>
  requestAnimationFrame(() => updateCursor(e))
);


/* ---------- blur on hero ---------- */
hero.addEventListener("mouseenter", () => (crsrBlur.style.opacity = 0.1));
hero.addEventListener("mouseleave", () => (crsrBlur.style.opacity = 0));
crsrBlur.style.opacity = 0; // default



let tl = gsap.timeline();

tl.from("nav", {
  y: "10%",
  duration: 1.2,
  opacity: 0,
  ease: Expo.easeInOut,
});
tl.from(".bounding h1, .bounding h5, .blocktest h5",{
  y: "100%",
  duration: 1.3,
  opacity: 0,
  ease: Expo.easeInOut,
  stagger: 0.2,
  delay: -1
})
tl.from("#small-heading h5, #hero-footer h5, .work-icons",{
  y: "100%",
  duration: 1,
  opacity: 0,
  ease: Expo.easeInOut,
  stagger: 0.2,
  delay: -1.1
})



let crsrh2 = document.querySelector(".cursor h2");
document.querySelectorAll(".elem").forEach(function(elem){
  let rotate = 0;
  let diffrot = 0;
  let timer = null;

  elem.addEventListener("mouseenter", function(dets){
    crsr.style.width = "60px";
    crsr.style.height = "60px";
    crsr.style.mixBlendMode = "normal";
    crsrh2.style.opacity = 1;
  })
  elem.addEventListener("mouseleave", function(dets){
    gsap.to(elem.querySelector("img"),{
      opacity: 0,
      ease: Power1,
    })
    crsr.style.width = "15px";
    crsr.style.height = "15px";
    crsr.style.mixBlendMode = "difference";
    crsrh2.style.opacity = 0;
  })
  elem.addEventListener("mousemove", function(dets){
    
    diffrot = dets.clientX - rotate;
    rotate = dets.clientX;
    gsap.to(elem.querySelector("img"),{
      opacity: 1,
      ease: Power1,
      top: dets.clientY - elem.getBoundingClientRect().top,
      left: dets.clientX,
      transform: `rotate(${gsap.utils.clamp(-20, 20, diffrot)}deg) translate(-50%, -50%)`,
    })
    clearTimeout(timer);
    timer = setTimeout(() => {
      gsap.to(elem.querySelector("img"),{
        ease: Power1,
        transform:`rotate(0deg) translate(-50%, -50%)`,
      })
    },200)
  })
})

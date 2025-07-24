/* ---------- Cursor ---------- */
// const crsr = document.querySelector(".cursor");
// const crsrBlur = document.querySelector(".cursor-blur");
// const hero = document.querySelector("#hero");

// // update every frame with requestAnimationFrame

// function updateCursor(e, xscale, yscale) {
//   const x = e.clientX;
//   const y = e.clientY;
//   crsr.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) scale(${xscale}, ${yscale})`;
//   crsrBlur.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
// }


// function cursorSqueeze(e){
//   let xscale = 1;
//   let yscale = 1;
//   let timer = null;

//   let xprev = 0;
//   let yprev = 0;

//   window.addEventListener("mousemove", (e) => {
//     xscale = gsap.utils.clamp(.8, 1.2, e.clientX - xprev)
//     yscale = gsap.utils.clamp(.8, 1.2, e.clientY - yprev)
//     xprev = e.clientX;
//     yprev = e.clientY;

//     updateCursor(e, xscale, yscale)

//     // Clear the timer
//     clearTimeout(timer);

//     // Set a new timer to reset the scale after 100ms
//     timer = setTimeout(() => {
//       xscale = 1;
//       yscale = 1;
//       updateCursor(e, xscale, yscale)
//     }, 100);
//   })
// }

// cursorSqueeze()

// window.addEventListener("mousemove", (e) =>
//   requestAnimationFrame(() => updateCursor(e))
// );


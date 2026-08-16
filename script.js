const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");
const cursorText = document.querySelector(".cursor-text");

// 1. Cursor Movement Logic
window.addEventListener("mousemove", function (e) {
  const posX = e.clientX;
  const posY = e.clientY;

  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;

  cursorOutline.animate({
    left: `${posX}px`,
    top: `${posY}px`
  }, { duration: 150, fill: "forwards" });
});

// 2. Cursor Zoom & Text Display (Sabhi data-cursor-text tags ke liye)
document.addEventListener("mouseover", function (e) {
  const target = e.target.closest("[data-cursor-text]");
  if (target) {
    cursorOutline.classList.add("cursor-hover");
    cursorText.innerText = target.getAttribute("data-cursor-text");
  }
});

document.addEventListener("mouseout", function (e) {
  const target = e.target.closest("[data-cursor-text]");
  if (target) {
    cursorOutline.classList.remove("cursor-hover");
    cursorText.innerText = "";
  }
});

// 3. Magnetic Effect (Enroll Now + Start Learning + What's Here teeno buttons par chalega)
document.addEventListener("mousemove", function (e) {
  const btn = e.target.closest(".btn-enroll, .btn-primary, .btn-secondary");
  
  if (btn) {
    const pos = btn.getBoundingClientRect();
    const x = e.clientX - pos.left - pos.width / 2;
    const y = e.clientY - pos.top - pos.height / 2;

    btn.style.transform = `translate(${x * 0.35}px, ${y * 0.35}px)`;
  }
});

document.addEventListener("mouseout", function (e) {
  const btn = e.target.closest(".btn-enroll, .btn-primary, .btn-secondary");
  if (btn) {
    btn.style.transform = "translate(0px, 0px)";
  }
});

// const cards = document.querySelectorAll('.vfx-card');

// cards.forEach((card) => {
//   const badge = card.querySelector('.vfx-hover-badge');

//   card.addEventListener('mousemove', (e) => {
//     // 1. Mouse Position inside Card (Isse background shade button ke exact piche chalega)
//     const rect = card.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;

//     card.style.setProperty('--mouse-x', `${x}px`);
//     card.style.setProperty('--mouse-y', `${y}px`);

//     // 2. Chota Floating Badge Button movement
//     badge.style.left = `${e.clientX}px`;
//     badge.style.top = `${e.clientY}px`;
//   });
// });

const cursor = document.getElementById('fc-cursor');
const cards = document.querySelectorAll('.fc-card');

// Mouse position update for dynamic smooth movement
document.addEventListener('mousemove', (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

cards.forEach(card => {
  // Glow Light Follow Logic inside Card
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  });

  // Cursor Show and Custom Text Logic (EXPLORE / VIEW / SOON)
  card.addEventListener('mouseenter', () => {
    const text = card.getAttribute('data-text');
    cursor.innerText = text;
    cursor.classList.add('active');
  });

  // Cursor Hide Logic
  card.addEventListener('mouseleave', () => {
    cursor.classList.remove('active');
  });
});
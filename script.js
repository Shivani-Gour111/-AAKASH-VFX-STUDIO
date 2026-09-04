// const cursorDot = document.querySelector(".cursor-dot");
// const cursorOutline = document.querySelector(".cursor-outline");
// const cursorText = document.querySelector(".cursor-text");

// // 1. Cursor Movement Logic
// window.addEventListener("mousemove", function (e) {
//   const posX = e.clientX;
//   const posY = e.clientY;

//   cursorDot.style.left = `${posX}px`;
//   cursorDot.style.top = `${posY}px`;

//   cursorOutline.animate({
//     left: `${posX}px`,
//     top: `${posY}px`
//   }, { duration: 150, fill: "forwards" });
// });

// // 2. Cursor Zoom & Text Display (Sabhi data-cursor-text tags ke liye)
// document.addEventListener("mouseover", function (e) {
//   const target = e.target.closest("[data-cursor-text]");
//   if (target) {
//     cursorOutline.classList.add("cursor-hover");
//     cursorText.innerText = target.getAttribute("data-cursor-text");
//   }
// });

// document.addEventListener("mouseout", function (e) {
//   const target = e.target.closest("[data-cursor-text]");
//   if (target) {
//     cursorOutline.classList.remove("cursor-hover");
//     cursorText.innerText = "";
//   }
// });

// // 3. Magnetic Effect (Enroll Now + Start Learning + What's Here teeno buttons par chalega)
// document.addEventListener("mousemove", function (e) {
//   const btn = e.target.closest(".btn-enroll, .btn-primary, .btn-secondary");
  
//   if (btn) {
//     const pos = btn.getBoundingClientRect();
//     const x = e.clientX - pos.left - pos.width / 2;
//     const y = e.clientY - pos.top - pos.height / 2;

//     btn.style.transform = `translate(${x * 0.35}px, ${y * 0.35}px)`;
//   }
// });

// document.addEventListener("mouseout", function (e) {
//   const btn = e.target.closest(".btn-enroll, .btn-primary, .btn-secondary");
//   if (btn) {
//     btn.style.transform = "translate(0px, 0px)";
//   }
// });

// // const cards = document.querySelectorAll('.vfx-card');

// // cards.forEach((card) => {
// //   const badge = card.querySelector('.vfx-hover-badge');

// //   card.addEventListener('mousemove', (e) => {
// //     // 1. Mouse Position inside Card (Isse background shade button ke exact piche chalega)
// //     const rect = card.getBoundingClientRect();
// //     const x = e.clientX - rect.left;
// //     const y = e.clientY - rect.top;

// //     card.style.setProperty('--mouse-x', `${x}px`);
// //     card.style.setProperty('--mouse-y', `${y}px`);

// //     // 2. Chota Floating Badge Button movement
// //     badge.style.left = `${e.clientX}px`;
// //     badge.style.top = `${e.clientY}px`;
// //   });
// // });

// const cursor = document.getElementById('fc-cursor');
// const cards = document.querySelectorAll('.fc-card');

// // Mouse position update for dynamic smooth movement
// document.addEventListener('mousemove', (e) => {
//   cursor.style.left = `${e.clientX}px`;
//   cursor.style.top = `${e.clientY}px`;
// });

// cards.forEach(card => {
//   // Glow Light Follow Logic inside Card
//   card.addEventListener('mousemove', (e) => {
//     const rect = card.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;

//     card.style.setProperty('--mouse-x', `${x}px`);
//     card.style.setProperty('--mouse-y', `${y}px`);
//   });

//   // Cursor Show and Custom Text Logic (EXPLORE / VIEW / SOON)
//   card.addEventListener('mouseenter', () => {
//     const text = card.getAttribute('data-text');
//     cursor.innerText = text;
//     cursor.classList.add('active');
//   });

//   // Cursor Hide Logic
//   card.addEventListener('mouseleave', () => {
//     cursor.classList.remove('active');
//   });
// });

// // Select magnetic button
// const magneticBtn = document.querySelector('.btn-gradient');

// if (magneticBtn) {
//   magneticBtn.addEventListener('mousemove', function(e) {
//     const position = magneticBtn.getBoundingClientRect();
    
//     // Calculate cursor position relative to the center of the button
//     const x = e.clientX - position.left - position.width / 2;
//     const y = e.clientY - position.top - position.height / 2;
    
//     // Magnetic intensity factor (0.3 matlab smooth magnetic pull)
//     magneticBtn.style.transform = `translate(${x * 0.35}px, ${y * 0.35}px)`;
//   });

//   magneticBtn.addEventListener('mouseleave', function() {
//     // Reset position when mouse leaves
//     magneticBtn.style.transform = 'translate(0px, 0px)';
//   });
// }

//   document.addEventListener('DOMContentLoaded', () => {
//   const cards = document.querySelectorAll('.project-card');

//   cards.forEach((card) => {
//     // 1. Double cursor roknay ke liye check karo, agar missing hai tabhi naya div banao
//     let follower = card.querySelector('.cursor-follower');
//     if (!follower) {
//       follower = document.createElement('div');
//       follower.className = 'cursor-follower';
//       follower.innerHTML = '<span class="dot"></span><span class="soon-txt">SOON</span>';
//       card.appendChild(follower);
//     }

//     // 2. Mouse track karke movement position set karo
//     card.addEventListener('mousemove', (e) => {
//       const rect = card.getBoundingClientRect();
//       const x = e.clientX - rect.left;
//       const y = e.clientY - rect.top;

//       follower.style.left = `${x}px`;
//       follower.style.top = `${y}px`;
//     });
//   });
// })

;



// 

const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");
const cursorText = document.querySelector(".cursor-text");
const fcCursor = document.getElementById("fc-cursor"); // Feature cards cursor

// 1. Unified Mouse Movement Tracking
window.addEventListener("mousemove", function (e) {
  const posX = e.clientX;
  const posY = e.clientY;

  // Global Dot Movement
  if (cursorDot) {
    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;
  }

  // Global Outline Smooth Tracking
  if (cursorOutline) {
    cursorOutline.animate(
      { left: `${posX}px`, top: `${posY}px` },
      { duration: 150, fill: "forwards" }
    );
  }

  // Feature Cards Cursor Tracking (Agar alag ID use ho rahi ho)
  if (fcCursor) {
    fcCursor.style.left = `${posX}px`;
    fcCursor.style.top = `${posY}px`;
  }
});

// 2. Combined Hover & Text Logic (Features Cards + Project Cards + Data attributes)
document.addEventListener("mouseover", function (e) {
  const fcCard = e.target.closest(".fc-card");
  const projectCard = e.target.closest(".project-card");
  const textTarget = e.target.closest("[data-cursor-text]");

  // A. Feature Cards Logic (Online Courses, Live Classes, Sell Your Projects)
  if (fcCard) {
    const text = fcCard.getAttribute("data-text") || "EXPLORE";
    
    if (cursorOutline) {
      cursorOutline.classList.add("cursor-hover");
      if (cursorText) cursorText.innerText = text;
    }
    if (fcCursor) {
      fcCursor.innerText = text;
      fcCursor.classList.add("active");
    }
  } 
  // B. Project Grid Cards Logic (SLOT 01 - 06)
  else if (projectCard) {
    const text = projectCard.getAttribute("data-text") || "SOON";
    
    if (cursorOutline) {
      cursorOutline.classList.add("cursor-hover");
      if (cursorText) cursorText.innerText = text;
    }
  } 
  // C. Generic data-cursor-text elements
  else if (textTarget) {
    const text = textTarget.getAttribute("data-cursor-text");
    
    if (cursorOutline) {
      cursorOutline.classList.add("cursor-hover");
      if (cursorText) cursorText.innerText = text;
    }
  }
});

document.addEventListener("mouseout", function (e) {
  const fcCard = e.target.closest(".fc-card");
  const projectCard = e.target.closest(".project-card");
  const textTarget = e.target.closest("[data-cursor-text]");

  if (fcCard || projectCard || textTarget) {
    if (cursorOutline) {
      cursorOutline.classList.remove("cursor-hover");
      if (cursorText) cursorText.innerText = "";
    }
    if (fcCursor) {
      fcCursor.classList.remove("active");
    }
  }
});

// 3. Inner Mouse Position Glow Light (Dono Cards ke liye)
const glowCards = document.querySelectorAll(".project-card, .fc-card, .vfx-card");
glowCards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  });
});

// 4. Magnetic Buttons Logic
document.addEventListener("mousemove", function (e) {
  const btn = e.target.closest(".btn-enroll, .btn-primary, .btn-secondary, .btn-gradient");

  if (btn) {
    const pos = btn.getBoundingClientRect();
    const x = e.clientX - pos.left - pos.width / 2;
    const y = e.clientY - pos.top - pos.height / 2;

    btn.style.transform = `translate(${x * 0.35}px, ${y * 0.35}px)`;
  }
});

document.addEventListener("mouseout", function (e) {
  const btn = e.target.closest(".btn-enroll, .btn-primary, .btn-secondary, .btn-gradient");
  if (btn) {
    btn.style.transform = "translate(0px, 0px)";
  }
});

window.addEventListener('load', () => {
  const progressBar = document.getElementById('progress-bar');
  const counter = document.getElementById('loader-counter');
  const preloader = document.getElementById('preloader');
  const loaderText = document.querySelector('.loader-text');

  let progress = 0;
  
  const interval = setInterval(() => {
    progress += 1;

    if (progress <= 100) {
      progressBar.style.width = progress + '%';
      counter.innerText = progress + '%';
      
      // Text color percentage ke sath fill hota rahega
      loaderText.style.setProperty('--loader-progress', progress + '%');
    } else {
      clearInterval(interval);
      setTimeout(() => {
        preloader.classList.add('hide');
      }, 300);
    }
  }, 40);
});
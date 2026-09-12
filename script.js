// const cursorDot = document.querySelector(".cursor-dot");
// const cursorOutline = document.querySelector(".cursor-outline");
// const cursorText = document.querySelector(".cursor-text");
// const fcCursor = document.getElementById("fc-cursor"); // Feature cards cursor

// // 1. Unified Mouse Movement Tracking
// window.addEventListener("mousemove", function (e) {
//   const posX = e.clientX;
//   const posY = e.clientY;

//   // Global Dot Movement
//   if (cursorDot) {
//     cursorDot.style.left = `${posX}px`;
//     cursorDot.style.top = `${posY}px`;
//   }

//   // Global Outline Smooth Tracking
//   if (cursorOutline) {
//     cursorOutline.animate(
//       { left: `${posX}px`, top: `${posY}px` },
//       { duration: 150, fill: "forwards" }
//     );
//   }

//   // Feature Cards Cursor Tracking (Agar alag ID use ho rahi ho)
//   if (fcCursor) {
//     fcCursor.style.left = `${posX}px`;
//     fcCursor.style.top = `${posY}px`;
//   }
// });

// // 2. Combined Hover & Text Logic (Features Cards + Project Cards + Data attributes)
// document.addEventListener("mouseover", function (e) {
//   const fcCard = e.target.closest(".fc-card");
//   const projectCard = e.target.closest(".project-card");
//   const textTarget = e.target.closest("[data-cursor-text]");

//   // A. Feature Cards Logic (Online Courses, Live Classes, Sell Your Projects)
//   if (fcCard) {
//     const text = fcCard.getAttribute("data-text") || "EXPLORE";
    
//     if (cursorOutline) {
//       cursorOutline.classList.add("cursor-hover");
//       if (cursorText) cursorText.innerText = text;
//     }
//     if (fcCursor) {
//       fcCursor.innerText = text;
//       fcCursor.classList.add("active");
//     }
//   } 
//   // B. Project Grid Cards Logic (SLOT 01 - 06)
//   else if (projectCard) {
//     const text = projectCard.getAttribute("data-text") || "SOON";
    
//     if (cursorOutline) {
//       cursorOutline.classList.add("cursor-hover");
//       if (cursorText) cursorText.innerText = text;
//     }
//   } 
//   // C. Generic data-cursor-text elements
//   else if (textTarget) {
//     const text = textTarget.getAttribute("data-cursor-text");
    
//     if (cursorOutline) {
//       cursorOutline.classList.add("cursor-hover");
//       if (cursorText) cursorText.innerText = text;
//     }
//   }
// });

// document.addEventListener("mouseout", function (e) {
//   const fcCard = e.target.closest(".fc-card");
//   const projectCard = e.target.closest(".project-card");
//   const textTarget = e.target.closest("[data-cursor-text]");

//   if (fcCard || projectCard || textTarget) {
//     if (cursorOutline) {
//       cursorOutline.classList.remove("cursor-hover");
//       if (cursorText) cursorText.innerText = "";
//     }
//     if (fcCursor) {
//       fcCursor.classList.remove("active");
//     }
//   }
// });

// // 3. Inner Mouse Position Glow Light (Dono Cards ke liye)
// const glowCards = document.querySelectorAll(".project-card, .fc-card, .vfx-card");
// glowCards.forEach((card) => {
//   card.addEventListener("mousemove", (e) => {
//     const rect = card.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;

//     card.style.setProperty("--mouse-x", `${x}px`);
//     card.style.setProperty("--mouse-y", `${y}px`);
//   });
// });

// // 4. Magnetic Buttons Logic
// document.addEventListener("mousemove", function (e) {
//   const btn = e.target.closest(".btn-enroll, .btn-primary, .btn-secondary, .btn-gradient");

//   if (btn) {
//     const pos = btn.getBoundingClientRect();
//     const x = e.clientX - pos.left - pos.width / 2;
//     const y = e.clientY - pos.top - pos.height / 2;

//     btn.style.transform = `translate(${x * 0.35}px, ${y * 0.35}px)`;
//   }
// });

// document.addEventListener("mouseout", function (e) {
//   const btn = e.target.closest(".btn-enroll, .btn-primary, .btn-secondary, .btn-gradient");
//   if (btn) {
//     btn.style.transform = "translate(0px, 0px)";
//   }
// });

// window.addEventListener('load', () => {
//   const progressBar = document.getElementById('progress-bar');
//   const counter = document.getElementById('loader-counter');
//   const preloader = document.getElementById('preloader');
//   const loaderText = document.querySelector('.loader-text');

//   // Check karo agar user is session me pehle aa chuka hai
//   if (sessionStorage.getItem('hasVisited')) {
//     preloader.style.display = 'none'; // Direct hide kar do
//     return;
//   }

//   let progress = 0;
  
//   // Speed Fast karne ke liye: interval time 15ms kar diya aur progress +2 increment hoga
//   const interval = setInterval(() => {
//     progress += 2; // Fast progress increment

//     if (progress <= 100) {
//       progressBar.style.width = progress + '%';
//       counter.innerText = progress + '%';
      
//       // Aapka Text Color Fill Animation Logic
//       if (loaderText) {
//         loaderText.style.setProperty('--loader-progress', progress + '%');
//       }
//     } else {
//       clearInterval(interval);
      
//       // Page load complete hone par session save kar lo
//       sessionStorage.setItem('hasVisited', 'true');

//       setTimeout(() => {
//         preloader.classList.add('hide');
//       }, 150); // Hide delay fast kar diya
//     }
//   }, 15); // 40ms se ghata kar 15ms kar diya (bohot fast chalega)
// });


const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");
const cursorText = document.querySelector(".cursor-text");
const fcCursor = document.getElementById("fc-cursor");

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

  // Feature Cards Cursor Tracking
  if (fcCursor) {
    fcCursor.style.left = `${posX}px`;
    fcCursor.style.top = `${posY}px`;
  }
});

// 2. Combined Hover & Text Logic
document.addEventListener("mouseover", function (e) {
  const fcCard = e.target.closest(".fc-card");
  const projectCard = e.target.closest(".project-card");
  const textTarget = e.target.closest("[data-cursor-text]");

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
  } else if (projectCard) {
    const text = projectCard.getAttribute("data-text") || "SOON";
    if (cursorOutline) {
      cursorOutline.classList.add("cursor-hover");
      if (cursorText) cursorText.innerText = text;
    }
  } else if (textTarget) {
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

// 3. Inner Glow Light + Project Card Follower Movement
const glowCards = document.querySelectorAll(".project-card, .fc-card, .vfx-card");
glowCards.forEach((card) => {
  const follower = card.querySelector(".cursor-follower");

  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // CSS variables update for radial glow light
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);

    // Card inner follower tracking (SLOT cards ke liye)
    if (follower) {
      follower.style.left = `${x}px`;
      follower.style.top = `${y}px`;
      follower.style.opacity = "1";
      follower.style.transform = "translate(-50%, -50%) scale(1)";
    }
  });

  if (follower) {
    card.addEventListener("mouseleave", () => {
      follower.style.opacity = "0";
      follower.style.transform = "translate(-50%, -50%) scale(0.4)";
    });
  }
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

// 5. Fast Preloader Logic
window.addEventListener("load", () => {
  const progressBar = document.getElementById("progress-bar");
  const counter = document.getElementById("loader-counter");
  const preloader = document.getElementById("preloader");
  const loaderText = document.querySelector(".loader-text");

  if (sessionStorage.getItem("hasVisited")) {
    if (preloader) preloader.style.display = "none";
    return;
  }

  let progress = 0;
  const interval = setInterval(() => {
    progress += 2;

    if (progress <= 100) {
      if (progressBar) progressBar.style.width = progress + "%";
      if (counter) counter.innerText = progress + "%";
      if (loaderText) loaderText.style.setProperty("--loader-progress", progress + "%");
    } else {
      clearInterval(interval);
      sessionStorage.setItem("hasVisited", "true");

      setTimeout(() => {
        if (preloader) preloader.classList.add("hide");
      }, 150);
    }
  }, 15);
});
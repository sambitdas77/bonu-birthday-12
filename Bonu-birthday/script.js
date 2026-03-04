// ===============================
// REASONS ARRAY
// ===============================
const reasons = [
  "You fight like a warrior ⚽",
  "You laugh like a maniac 😂",
  "You steal my clothes 👕",
  "You pretend to be innocent 😇",
  "You are secretly strong 💪",
  "You never give up 🚀",
  "You make home louder 🔊",
  "You act mature sometimes 😌",
  "You care deeply 💖",
  "You are our sunshine ☀️",
  "You are unstoppable 🔥",
  "You are my forever Bonu ❤️"
];

// ===============================
// START SITE
// ===============================
function startSite() {
  const entry = document.getElementById("entry-screen");

  entry.style.transition = "1s";
  entry.style.opacity = "0";

  setTimeout(() => {
    entry.style.display = "none";
    document.getElementById("main-content").classList.remove("hidden");

    // Load features AFTER content is visible
    loadReasons();
    typeLetter();
    createBalloons();
    startCountdown();
  }, 1000);

  // Play music safely
  const music = document.getElementById("bgMusic");
  if (music) {
    music.play().catch(() => {});
  }

  // Big confetti burst
  if (typeof confetti !== "undefined") {
    confetti({ particleCount: 200, spread: 120 });
  }
  checkMidnightMode();
}

// ===============================
// LOAD REASON CARDS
// ===============================
function loadReasons() {
  const container = document.getElementById("reasonCards");
  if (!container) return;

  container.innerHTML = "";

  reasons.forEach(reason => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerText = reason;
    container.appendChild(div);
  });
}

// ===============================
// TYPING LETTER EFFECT
// ===============================
function typeLetter() {
  const text = "Dear Bonu, I act cool most of the time, but truth is… you are one of the best things that ever happened to our family. From 2014 to 2026, watching you grow has been crazy. No matter how tall you become, you'll always be my little Mohor.";

  const element = document.getElementById("typedText");
  if (!element) return;

  element.innerHTML = "";

  let i = 0;

  function typing() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, 30);
    }
  }

  typing();
}

// ===============================
// SURPRISE CONFETTI
// ===============================
function revealSurprise() {
  const surprise = document.getElementById("surpriseMessage");
  if (surprise) {
    surprise.innerText =
      "No matter how big you grow... you’ll always be my tiny Mohor 💖";
  }

  if (typeof confetti === "undefined") return;

  let duration = 3000;
  let end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 5,
      angle: 60,
      spread: 55,
      origin: { x: 0 }
    });

    confetti({
      particleCount: 5,
      angle: 120,
      spread: 55,
      origin: { x: 1 }
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}

// ===============================
// IMAGE MODAL
// ===============================
function openImage(img) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");

  if (!modal || !modalImg) return;

  modal.style.display = "flex";
  modalImg.src = img.src;
}

function closeImage() {
  const modal = document.getElementById("imageModal");
  if (modal) modal.style.display = "none";
}

// ===============================
// COUNTDOWN
// ===============================
function startCountdown() {
  const birthday = new Date("March 5, 2026 00:00:00").getTime();

  setInterval(function () {
    const now = new Date().getTime();
    const distance = birthday - now;

    const countdownEl = document.getElementById("countdown");
    if (!countdownEl) return;

    if (distance < 0) {
      countdownEl.innerHTML = "IT'S YOUR DAYYYYY 🎉";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    countdownEl.innerHTML =
      days + " days until legend mode activates ⚡";
  }, 1000);
}

// ===============================
// FLOATING BALLOONS
// ===============================
function createBalloons() {
  const container = document.getElementById("balloon-container");
  if (!container) return;

  for (let i = 0; i < 15; i++) {
    let balloon = document.createElement("div");
    balloon.className = "balloon";
    balloon.style.left = Math.random() * 100 + "vw";
    balloon.style.animationDuration = (5 + Math.random() * 5) + "s";

    balloon.onclick = function () {
      balloon.remove();
      if (typeof confetti !== "undefined") {
        confetti({ particleCount: 50, spread: 70 });
      }
    };

    container.appendChild(balloon);
  }
}

// ===============================
// CHAT SYSTEM
// ===============================
const chats = [
  "Hi Bonu 👀",
  "You thought this was a normal website?",
  "Nope.",
  "This was made by your legendary brother 😎",
  "You are officially 12 now.",
  "Still annoying though.",
  "But also my favourite human.",
  "I love you ❤️"
];

let chatIndex = 0;

function nextChat() {
  chatIndex++;

  if (chatIndex < chats.length) {
    const chatText = document.getElementById("chatText");
    if (chatText) {
      chatText.innerText = chats[chatIndex];
    }
  }
}

// ===============================
// PASSWORD CHECK
// ===============================
function checkPassword() {
  const passInput = document.getElementById("secretPass");
  if (!passInput) return;

  const pass = passInput.value;

  if (pass === "Bonu2014") {
    alert("Secret Big Brother Message: I will always protect you.");
  } else {
    alert("Wrong password 😏");
  }
}

// ===============================
// AUTO GALLERY HIGHLIGHT
// ===============================
let slideIndex = 0;

setInterval(() => {
  const images = document.querySelectorAll(".gallery-grid img");
  if (images.length === 0) return;

  images.forEach(img => (img.style.opacity = "0.4"));

  images[slideIndex].style.opacity = "1";

  slideIndex++;
  if (slideIndex >= images.length) slideIndex = 0;
}, 2500);

// ===============================
// SECRET KEY MODE
// ===============================
document.addEventListener("keydown", function (e) {
  if (e.key.toLowerCase() === "m") {
    alert("You found the secret Mohor mode 😎");
  }
});

// ===============================
// OPTIONAL MESSAGE REVEAL
// ===============================
function openMessage() {
  const message = document.getElementById("surpriseMessage");

  message.innerText =
    "No matter how big you grow... you’ll always be my tiny Bonu 💖";

  message.style.display = "block";
  message.scrollIntoView({ behavior: "smooth" });

  if (typeof confetti !== "undefined") {
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        confetti({
          particleCount: 200,
          spread: 120,
          origin: {
            x: Math.random(),
            y: Math.random() - 0.2
          }
        });
      }, i * 300);
    }
  }
}

// ===============================
// MINI GAME
// ===============================
let score = 0;

function spawnHeart() {
  const gameArea = document.getElementById("gameArea");
  if (!gameArea) return;

  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "💖";

  heart.style.left = Math.random() * 90 + "%";
  heart.style.animationDuration = (2 + Math.random() * 2) + "s";

  heart.onclick = function () {
    score++;
    document.getElementById("scoreText").innerText = "Score: " + score;
    heart.remove();

    if (score >= 10) {
      unlockBrotherMode();
    }
  };

  gameArea.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 4000);
}

setInterval(spawnHeart, 1000);

function unlockBrotherMode() {
  alert("Brother Mode Unlocked 😎");

  document.body.style.background =
    "linear-gradient(135deg, #000000, #240046)";

  if (typeof confetti !== "undefined") {
    confetti({ particleCount: 400, spread: 180 });
  }

  const hero = document.querySelector(".hero h1");
  if (hero) {
    hero.innerText = "Mohor Is Officially Legendary 💜";
  }
}
function checkMidnightMode() {
  const now = new Date();
  const hour = now.getHours();

  if (hour === 0) {
    setTimeout(() => {
      alert("IT'S MIDNIGHTTTT 🎉🎂");
      confetti({ particleCount: 500, spread: 200 });
    }, 2000);
  }
}

// ===============================
// IMAGE SLIDER
// ===============================

let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll(".slide");

  if (slides.length === 0) return;

  if (index >= slides.length) currentSlide = 0;
  else if (index < 0) currentSlide = slides.length - 1;
  else currentSlide = index;

  slides.forEach(slide => slide.classList.remove("active"));
  slides[currentSlide].classList.add("active");
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}
setInterval(() => {
  nextSlide();
}, 5000);
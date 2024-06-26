const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// Close navbar when link is clicked
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

// Event Listeners: Handling toggle event
const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);

//  Store color theme for future visits

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark"); //add this
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light"); //add this
  }
}

// Save user preference on load

const currentTheme = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : null;

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}

//Adding date

let myDate = document.querySelector("#datee");

const yes = new Date().getFullYear();
myDate.innerHTML = yes;

// 

document.addEventListener('DOMContentLoaded', () => {
  const textElement = document.getElementById('typing-text');

  const phrases = [
      'software development.',
      'algorithms.',
      'machine learning.',
      'data science.',
      'full-stack development',
      'distributed systems.',
      'Large Language Models',
      'Generative AI'
  ];

  let currentPhraseIndex = 0;
  let currentLetterIndex = 0;
  let currentText = 'I am interested in ';

  function type() {
      if (currentLetterIndex < phrases[currentPhraseIndex].length) {
          currentText += phrases[currentPhraseIndex][currentLetterIndex];
          textElement.textContent = currentText;
          currentLetterIndex++;
          setTimeout(type, 150);  // Adjust typing speed here
      } else {
          setTimeout(deletePhrase, 1000);  // Adjust delay before deleting the phrase
      }
  }

  function deletePhrase() {
      if (currentLetterIndex > 0) {
          currentText = currentText.slice(0, -1);
          textElement.textContent = currentText;
          currentLetterIndex--;
          setTimeout(deletePhrase, 100);  // Adjust deleting speed here
      } else {
          currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
          setTimeout(type, 500);  // Adjust delay before typing the next phrase
      }
  }

  type();
});


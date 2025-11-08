/* =============================
   Part 2: JS Functions - Scope, Parameters, Return Values
   ============================= */

/**
 * Function to toggle a class on an element
 * @param {HTMLElement} element - Element to toggle class on
 * @param {string} className - Name of class to toggle
 * @returns {boolean} - true if class added, false if removed
 */
function toggleClass(element, className) {
  if (element.classList.contains(className)) {
    element.classList.remove(className);
    return false;
  } else {
    element.classList.add(className);
    return true;
  }
}

/**
 * Function to move and rotate an element (example: box)
 * @param {HTMLElement} element
 */
function animateBox(element) {
  toggleClass(element, 'animate');
}

/**
 * Function to flip a card
 * @param {HTMLElement} card
 */
function flipCard(card) {
  toggleClass(card, 'flipped');
}

/* =============================
   Part 3: Combine CSS Animations with JS
   ============================= */

// Animate Box
const box = document.getElementById('box');
const animateBtn = document.getElementById('animateBtn');

animateBtn.addEventListener('click', () => {
  animateBox(box);
});

// Flip Card
const card = document.getElementById('card');
const flipBtn = document.getElementById('flipBtn');

flipBtn.addEventListener('click', () => {
  flipCard(card);
});

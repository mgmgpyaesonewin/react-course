// Get the elements
const colorButton = document.getElementById('colorButton');
const textButton = document.getElementById('textButton');
const bioText = document.getElementById('bio-text');
const body = document.body;

// List of colors to cycle through
const colors = ["#f0f8ff", "#e6e6fa", "#fff0f5", "#f5fffa"];
let currentColorIndex = 0;

// List of alternative bio texts
const bioTexts = [
    "I am a software engineer who loves building things for the web.",
    "My favorite technologies include React and Node.js.",
    "In my free time, I enjoy reading and hiking."
];
let currentTextIndex = 0;

// Event listener for the color change button
colorButton.addEventListener('click', () => {
    // Move to the next color in the array
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    // Apply the new color
    body.style.backgroundColor = colors[currentColorIndex];
});

// Event listener for the text change button (Bonus)
textButton.addEventListener('click', () => {
    // Move to the next text in the array
    currentTextIndex = (currentTextIndex + 1) % bioTexts.length;
    // Apply the new text
    bioText.textContent = bioTexts[currentTextIndex];
});

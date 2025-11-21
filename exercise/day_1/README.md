# Day 1 Exercises: Web Foundations

Here are the exercises for Day 1. Complete them in order to build a simple, interactive personal bio page.

---

### Exercise 1: HTML Structure (Hour 1)

**Goal:** Create the basic structure of your personal bio page using HTML.

**Tasks:**

1.  Create a file named `index.html`.
2.  Add the basic HTML5 document structure (`<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`).
3.  Inside the `<head>`:
    *   Add a `<title>` tag with the text "My Personal Bio".
4.  Inside the `<body>`:
    *   Add a main heading (`<h1>`) with your name.
    *   Add a paragraph (`<p>`) with a short sentence about yourself.
    *   Add an image (`<img>`). Find an image online and use its URL for the `src` attribute. Don't forget the `alt` attribute!
    *   Add a link (`<a>`) to your favorite website. It should open in a new tab.

---

### Exercise 2: CSS Styling (Hour 2)

**Goal:** Style your bio page using CSS to make it visually appealing.

**Tasks:**

1.  Create a new file named `style.css`.
2.  Link this stylesheet to your `index.html` file by adding a `<link>` tag in the `<head>`.
3.  In `style.css`:
    *   **Body:** Change the `font-family` to a sans-serif font (like Arial or Helvetica) and set a light `background-color`.
    *   **H1:** Change the `color` of your name and center the text.
    *   **Paragraph:** Add some `padding` and a `border` around your paragraph to make it stand out.
    *   **Image:** Give the image a specific `width` (e.g., 200px) and a `border-radius` to make the corners rounded. Center the image.

---

### Exercise 3: JavaScript Interactivity (Hour 3)

**Goal:** Add basic interactivity to your page using JavaScript.

**Tasks:**

1.  Create a new file named `script.js`.
2.  Link this script to your `index.html` file by adding a `<script>` tag just before the closing `</body>` tag.
3.  In `script.js`:
    *   Add a button to your `index.html` with an ID, for example, `<button id="colorButton">Change Color</button>`.
    *   Write JavaScript code to get this button by its ID.
    *   Add a 'click' event listener to the button.
    *   When the button is clicked, the function should change the background color of the `<body>` to a different color.
    *   **Bonus:** Add a second button that changes the text content of your paragraph (`<p>`) when clicked.

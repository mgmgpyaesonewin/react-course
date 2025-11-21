# Day 3 (3 Hours): Building a React Application

## Hour 7: Project Setup & Tooling
*   **Setting up a New React Project:**
    *   Introduction to build tools (Vite vs. Create React App).
    *   Using Vite to scaffold a new React project (`npm create vite@latest my-app -- --template react`).
    *   Understanding the basic folder structure (`src`, `public`, `index.html`, `main.jsx`, `App.jsx`).
*   **Developer Experience:**
    *   Hot Module Replacement (HMR).
    *   Understanding `package.json` scripts (`dev`, `build`).

## Hour 8: Data Flow and Lists
*   **Component-Based Architecture:** Thinking in components.
*   **Props Drilling (Introduction):** Understanding the problem.
*   **Conditional Rendering:** Displaying components based on state or props (`if/else`, ternary operators, logical `&&`).
*   **Rendering Lists of Data:**
    *   Using the `Array.prototype.map()` method to render collections of components.
    *   Importance of the `key` prop when rendering lists.
*   **Exercise:** Begin building a To-Do List Application:
    *   Create `TodoItem` and `TodoList` components.
    *   Render a hardcoded array of to-do items using `map()`.
    *   Implement a checkbox in `TodoItem` to mark tasks as complete (local state).

## Hour 9: Styling React Components
*   **Methods of Styling:**
    *   Inline Styles (using JavaScript objects).
    *   CSS Files (importing `.css` files).
    *   CSS Modules (`.module.css` for scoped styles).
*   **Conditional Styling:** Dynamically applying classes based on component state or props.
*   **Introduction to UI Libraries (Brief Mention):** Overview of popular options like Material UI, Chakra UI, or TailwindCSS, and why they are used.
*   **Exercise:** Style your To-Do List Application:
    *   Apply basic styling to the `TodoList` and `TodoItem` components using CSS Modules.
    *   Dynamically change the style of a `TodoItem` when it's marked as complete (e.g., strike-through text).
# Day 2 (3 Hours): Interactive Frontends with React

## Hour 4: Advanced JavaScript
*   **ES6 Features:**
    *   Arrow Functions (`=>`)
    *   `const` and `let` (revisit variable declaration scope)
    *   Template Literals (` `` `)
    *   Destructuring (Arrays and Objects)
    *   Spread and Rest Operators (`...`)
*   **Asynchronous JavaScript:**
    *   Understanding Asynchronicity: Callbacks, Promises.
    *   `async`/`await` for cleaner asynchronous code.
    *   Introduction to `fetch` API for making HTTP requests (e.g., getting data from an external source).

## Hour 5: Introduction to React
*   **Concepts:** What is a JavaScript Library? Why React? Declarative UI.
*   **Core Concepts:**
    *   **Components:** Building blocks of React applications (functional components).
    *   **JSX:** JavaScript XML - writing HTML-like syntax in JavaScript.
    *   **Props:** Passing data from parent to child components.
    *   Virtual DOM.
*   **Exercise:** Rebuild a simplified version of your bio page using React components. Create components for your name, bio text, and image, passing data down via props.

## Hour 6: State and Events in React
*   **Concepts:** How React manages dynamic data and user interactions.
*   **State with `useState` Hook:**
    *   What is state? How it makes components dynamic.
    *   Using the `useState` hook to add state to functional components.
    *   Updating state immutably.
*   **Handling User Events:**
    *   React event system (synthetic events).
    *   Attaching event listeners (`onClick`, `onChange`).
    *   Passing event handlers via props.
*   **Exercise:** Enhance your React bio page:
    *   Add a "Like" button to your name that increments a counter displayed on the page. Use `useState` for the counter.
    *   Add an input field where you can type a new hobby, and it immediately updates a displayed list of hobbies.
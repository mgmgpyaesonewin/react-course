# Day 2 Exercises: Interactive Frontends with React

These exercises will guide you through advanced JavaScript concepts and an introduction to React, including components, props, state, and events.

---

## Setup for React Exercises (Important!)

For the React exercises (Exercise 2 and 3), you'll need a React development environment. Please follow these steps to set up a new React project using Vite:

1.  **Open your terminal** in the `exercise/day_2` folder.
2.  **Create a new React project:**
    ```bash
    npm create vite@latest my-react-bio -- --template react
    ```
    (You can replace `my-react-bio` with your preferred project name).
3.  **Navigate into your new project folder:**
    ```bash
    cd my-react-bio
    ```
4.  **Install dependencies:**
    ```bash
    npm install
    ```
5.  **Start the development server:**
    ```bash
    npm run dev
    ```
    This will usually open your project in your browser at `http://localhost:5173/` (or a similar address).

You will perform Exercise 2 and 3 *within* this new React project. Modify the `src/App.jsx` and create new components as needed.

---

### Exercise 1: Advanced JavaScript - Fetching Data (Hour 4)

**Goal:** Practice using `async/await` and the `fetch` API to retrieve data from an external source.

**Tasks:**

1.  Create a new JavaScript file named `fetch_practice.js` in the `exercise/day_2` folder (outside your React project).
2.  Use the `fetch` API to get a random user from `https://randomuser.me/api/`.
3.  Use `async/await` to handle the asynchronous operation.
4.  Parse the JSON response.
5.  Log the user's name, email, and a picture URL to the console.

**Hint:**
```javascript
async function getRandomUser() {
  // Your code here
}
getRandomUser();
```

---

### Exercise 2: Introduction to React - Building a Bio Page (Hour 5)

**Goal:** Recreate your personal bio page from Day 1 using React components and props.

**Instructions:**

1.  Open the `src/App.jsx` file in your `my-react-bio` project.
2.  Remove the default content.
3.  Create a functional component named `BioCard` (you can make a new file `src/components/BioCard.jsx` and import it into `App.jsx`).
4.  The `BioCard` component should accept props for:
    *   `name` (string)
    *   `bioText` (string)
    *   `imageUrl` (string)
    *   `websiteUrl` (string)
5.  Inside `BioCard`, render the `h1`, `p`, `img`, and `a` tags, using the received props for their content.
6.  In `App.jsx`, render the `BioCard` component, passing your personal details as props.

**Example `App.jsx` structure:**
```jsx
import BioCard from './components/BioCard';

function App() {
  const myData = {
    name: "Your Name",
    bioText: "A short sentence about yourself.",
    imageUrl: "https://via.placeholder.com/150",
    websiteUrl: "https://yourwebsite.com"
  };

  return (
    <div className="App">
      <BioCard {...myData} />
    </div>
  );
}

export default App;
```

---

### Exercise 3: State and Events in React - Interactive Bio Page (Hour 6)

**Goal:** Enhance your React bio page with state and event handling.

**Instructions:**

1.  Continue working in your `my-react-bio` project.
2.  **"Like" Button:**
    *   Add a button to your `BioCard` component (or create a new `LikeButton` component) that says "Like".
    *   Use the `useState` hook in `BioCard` to manage a `likeCount` state variable, initialized to 0.
    *   When the "Like" button is clicked, increment the `likeCount` and display the current count next to the button (e.g., "Like (5)").
3.  **Hobby Input:**
    *   Add an input field and a "Add Hobby" button below your bio text.
    *   Use another `useState` hook in `BioCard` (or a new `HobbyInput` component) to manage a list of `hobbies` (an array of strings), initialized with a few example hobbies.
    *   Use another `useState` hook to manage the `newHobby` input value.
    *   When the "Add Hobby" button is clicked, add the `newHobby` to the `hobbies` array and clear the input field.
    *   Display the list of hobbies using `map()`.

---

**Solution Structure:**
The `solution` folder contains a complete working example for all React exercises.
To run the solution:
1.  Navigate to `exercise/day_2/solution`.
2.  Run `npm install`.
3.  Run `npm run dev`.
The `fetch_practice.js` is also included separately.

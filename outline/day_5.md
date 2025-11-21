# Day 5 (3 Hours): Integrating React with Supabase

## Hour 13: Connecting React to Supabase
*   **Integrating Supabase Client in React:**
    *   Setting up `supabaseClient.js` with environment variables (`.env`).
    *   Providing the Supabase client instance to React components (e.g., via Context API or passing as props).
*   **Fetching and Displaying Data:**
    *   Using `useEffect` hook to fetch data from Supabase when a component mounts.
    *   Displaying the fetched data in the React UI (e.g., updating the To-Do List app to fetch real tasks from Supabase).
    *   Handling loading and error states in the UI.
*   **Exercise:** Update your React To-Do List app to fetch tasks from the Supabase `todos` table you created. Display these tasks in your `TodoList` component.

## Hour 14: User Authentication with Supabase
*   **Supabase Auth Overview:** JWTs, user management, various sign-in methods (email/password, OAuth).
*   **Implementing Sign-Up and Login:**
    *   `supabase.auth.signUp()` and `supabase.auth.signInWithPassword()`.
    *   Handling user sessions.
    *   Creating UI for login and sign-up forms.
*   **Managing User State:**
    *   Using `supabase.auth.onAuthStateChange()` to react to authentication events.
    *   Storing user information in React context or state.
*   **Implementing Logout:** `supabase.auth.signOut()`.
*   **Exercise:** Add authentication features to your To-Do List app:
    *   Create a login and sign-up form.
    *   Allow users to register and log in/out. Display a "Welcome, [User Email]" message when logged in.

## Hour 15: Protected Data & Routes with Supabase
*   **Row-Level Security (RLS) in Supabase:**
    *   Understanding RLS policies for fine-grained access control on database rows.
    *   Creating RLS policies for the `todos` table to ensure users can only see/modify their own tasks.
*   **Private vs. Public Data:** Designing your database with RLS in mind.
*   **Protected React Routes:**
    *   Basic conditional rendering to hide/show content based on authentication status.
    *   Introduction to client-side routing and protected routes (e.g., using `react-router-dom` to redirect unauthenticated users).
*   **Exercise:** Implement RLS for your `todos` table in Supabase so that each logged-in user can only see and manage their own tasks. Update the React app to ensure tasks are displayed and created only for the currently authenticated user. Redirect users to a login page if they try to access the to-do list without being logged in.
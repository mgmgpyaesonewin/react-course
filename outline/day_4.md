# Day 4 (3 Hours): Backend as a Service with Supabase

## Hour 10: Introduction to Supabase
*   **What is "Backend as a Service" (BaaS)?**
    *   Advantages and disadvantages compared to traditional backend development.
    *   Key features: Database, Authentication, Storage, Edge Functions.
*   **Getting Started with Supabase:**
    *   Creating a new Supabase project.
    *   Overview of the Supabase UI (Dashboard, SQL Editor, Table Editor, Authentication, Storage).
*   **Database Fundamentals in Supabase:**
    *   PostgreSQL basics (tables, columns, rows, data types).
    *   Creating your first table using the Supabase Table Editor.
*   **Exercise:** Set up a new Supabase project and create a `todos` table with columns like `id` (primary key), `task` (text), `is_complete` (boolean), and `user_id` (UUID - will be used later for auth).

## Hour 11: Querying Data with Supabase JS Client
*   **Installing the Supabase Client:**
    *   `npm install @supabase/supabase-js`.
    *   Initializing the client with `SUPABASE_URL` and `SUPABASE_ANON_KEY`.
*   **Basic Data Retrieval:**
    *   Using `supabase.from('table_name').select('*')` to fetch all rows.
    *   Filtering data (`.eq()`, `.gt()`, `.lt()`, `.or()`).
    *   Ordering results (`.order()`).
*   **Realtime Subscriptions (Brief Introduction):** Mentioning how Supabase can push real-time updates.
*   **Exercise:** Write a simple JavaScript file (e.g., `supabase_test.js`) that connects to your Supabase project and fetches all tasks from your `todos` table, logging them to the console. Add some dummy data directly in the Supabase Table Editor.

## Hour 12: Modifying Data with Supabase JS Client
*   **Inserting Data:**
    *   `supabase.from('table_name').insert([{ key: 'value' }])`.
*   **Updating Data:**
    *   `supabase.from('table_name').update({ key: 'new_value' }).eq('id', 1)`.
*   **Deleting Data:**
    *   `supabase.from('table_name').delete().eq('id', 1)`.
*   **Error Handling:** Basic `try...catch` for Supabase operations.
*   **Exercise:** Enhance your `supabase_test.js` file:
    *   Add a function to insert a new task into the `todos` table.
    *   Add a function to mark a task as complete by updating its `is_complete` status.
    *   Add a function to delete a task.
    *   Run these functions and verify changes in the Supabase UI.
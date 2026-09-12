# Dev Stack Builder

## About the Project
Dev Stack Builder is an interactive React web application that helps developers explore modern web technologies and build their ideal development stack. Users can browse frontend, backend, database, and tooling options, view details like difficulty level and popularity, and add their favorites to a personal "Your Stack" panel to compare and plan their next project.

## Technologies Used
- React.js
- Tailwind CSS
- JavaScript (ES6+)
- Vite (build tool)
- React-Toastify (NPM package for notifications)
- React-Icons (for accurate technology logos)
- JSON (for technology data)

## Key Features
- **Interactive Stack Builder** – Browse 15 technologies across categories (Frontend, Backend, Database, Language, Styling, DevOps) and add them to a personal stack with a single click.
- **Real-time Toast Notifications** – Get instant feedback using React-Toastify for every action: adding a technology, trying to add a duplicate, removing an item, or clearing the whole stack.
- **Fully Responsive Design** – The layout adapts smoothly from mobile (1 column, hamburger navbar) to tablet (2 columns) to desktop (3 columns with full navbar), so the experience is smooth on any device.

## React Concepts – Q&A

**1. What is JSX, and why is it used in React?**
JSX is a syntax extension that lets us write HTML-like code directly inside JavaScript. It is used in React because it makes describing what the UI should look like much easier and more readable than calling `React.createElement()` manually for every element.

**2. What is the difference between props and state?**
Props are data passed *into* a component from its parent, and the component cannot change them itself — they are read-only. State is data that a component manages *internally* and can change over time (for example, using `useState`), which causes the component to re-render.

**3. What does the `useState` hook do, and where did you use it in this project?**
`useState` lets a functional component hold and update its own local data. In this project, I used it in `App.jsx` to store the list of technologies, the user's selected stack, the loading status, and whether the mobile menu is open.

**4. What does the `useEffect` hook do, and why did you need it to load the JSON data?**
`useEffect` runs a piece of code after the component renders, and it's perfect for side effects like fetching data. I used it to fetch `technologies.json` once when the app first loads, and then update the state with the fetched data.

**5. Why does every item in a `.map()` list need a unique `key` prop?**
The `key` prop helps React identify which items have changed, been added, or removed, so it can update the UI efficiently instead of re-rendering the whole list. Without a unique key, React can mix up items and cause bugs when the list changes.

**6. What is conditional rendering? Show one place you used it (example: the empty stack message).**
Conditional rendering means showing different UI based on a condition. In `Sidebar.jsx`, I used it to check if the stack is empty: if `stack.length === 0`, it shows an "empty stack" message; otherwise, it renders the list of added technologies.

**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**
A parent passes data down to a child using props (for example, `<TechCard tech={tech} />`). For a child to send data back up, the parent passes a function down as a prop (like `onAddToStack`), and the child calls that function with the data it wants to send — this is how `TechCard` tells `App` which technology was clicked.


## I am sorry readme likhar jonno ai er ektu help nisi for better expression . Sorry for that .

## Submission
- **GitHub Repository Link:** https://github.com/Habib-Brainbox/B14-A05-DevStack
- **Live Site Link:** https://lucky-travesseiro-20f805.netlify.app
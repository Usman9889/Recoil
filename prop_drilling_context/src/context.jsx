import { createContext } from "react";

export const CountContext = createContext(0);

// createContext() ---> Step 1: Create a Context, Create a new file, e.g. UserContext.js
//       ↓
// Context.Provider  ----> Step 2: Create a Context Provider
//       ↓
// wrap App ---> Step 3: Wrap Your App with Provider in main.jsx or index.js
//       ↓
// useContext() --->Step 4: Consume Context in Components , Use useContext hook


import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
// import './App.css'; // Import your global styles here
import './index.css';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = createRoot(rootElement);

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Element with ID 'root' not found");
}

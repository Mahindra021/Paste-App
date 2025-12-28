import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store } from './store.js'
import { Provider } from 'react-redux'
import {Toaster} from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
      <Toaster />
    </Provider>
  </StrictMode>
)



// 1️⃣ Import StrictMode from React
// import { StrictMode } from 'react'
// StrictMode is a development-only tool provided by React.
// It helps you:
// Detect unsafe lifecycle methods
// Warn about deprecated APIs
// Find potential side effects
// ⚠️ It does not affect production builds.



// 2️⃣ Import createRoot from React DOM
// import { createRoot } from 'react-dom/client'
// createRoot is used to create a React root.
// This is the new API (React 18+) replacing ReactDOM.render.
// It enables concurrent rendering features.



// 4️⃣ Import the main App component
// import App from './App.jsx'
// Imports the root React component of your application.
// App is where your UI logic and components usually start.



// 5️⃣ Import Redux store
// import { store } from './store.js'
// Imports the Redux store.
// The store holds the global state of your application.



// 6️⃣ Import Provider from react-redux
// import { Provider } from 'react-redux'
// Provider makes the Redux store available to all components.
// Any component can access the store using:
// useSelector
// useDispatch



// document.getElementById('root') selects the root div in index.html.
// createRoot(...).render() mounts your React app into the DOM.



// 🔁 Overall Flow (Simple Words)
// React creates a root
// App is wrapped in:
// StrictMode → debugging help
// Provider → Redux global state
// App renders UI
// Toaster enables notifications



// 1️⃣ First store (left side)
// store=
// This is a prop name of the Provider component.
// Provider expects a prop called store.
// React-Redux uses this prop to know which Redux store to share.
// 👉 Think of it as:
// “Hey Provider, here is the Redux store you should provide to the app.”



// 2️⃣ Second store (right side)
// store={store}
// This is the actual Redux store object.
// It comes from:
// import { store } from './store.js'



// Every component inside <Provider> can:
// Read data from Redux using useSelector
// Update data using useDispatch
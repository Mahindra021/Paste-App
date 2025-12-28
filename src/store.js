import { configureStore } from '@reduxjs/toolkit'
import pasteReducer from './redux/pasteSlice'

export const store = configureStore({
  reducer: {
    paste: pasteReducer,
  },
})



// configureStore is the recommended way to create a Redux store.
// It:
// Combines reducers
// Adds Redux DevTools support automatically
// Adds useful middleware by default
// 👉 It replaces older createStore.



// Creates a Redux store.
// store will hold the entire global state of your app.
// export allows it to be used in main.jsx.



// paste → name of the slice in global state
// pasteReducer → reducer function that manages that slice
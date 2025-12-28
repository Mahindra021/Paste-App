import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';

const initialState = {
  
    pastes: localStorage.getItem("pastes") ? JSON.parse(localStorage.getItem("pastes")) : []
}

export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    addToPastes: (state, action) => {

      // Add a check for paste already exists
      const paste = action.payload;
      state.pastes.push(paste);
      localStorage.setItem("pastes", JSON.stringify(state.pastes));
      toast.success("Paste Created Successfully!")
    },
    updateToPaste: (state, action) => {

      const paste = action.payload;
      const index = state.pastes.findIndex((item) => item._id === paste._id)

      if (index >= 0){

        state.pastes[index] = paste
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        toast.success("Paste Updated Successfully!")
      }
    },
    resetAllPaste: (state, action) => {

      state.pastes = [];
      localStorage.removeItem("pastes");
    },
    removeFromPaste: (state, action) => {

      const pasteId = action.payload;
      const index = state.pastes.findIndex((item) => item._id === pasteId);

      if (index >= 0){

        state.pastes.splice(index, 1);
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        toast.success("Paste Deleted Successfully");
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToPastes, updateToPaste, resetAllPaste, removeFromPaste } = pasteSlice.actions

export default pasteSlice.reducer



// What findIndex() does
// findIndex() is a JavaScript array method.
// 👉 It:
// Loops through the array
// Returns the index (position) of the first element that matches the condition
// Returns -1 if no element matches



// 1️⃣ What is splice()?
// splice() is an array method that:
// Changes the original array
// Can remove, add, or replace elements
// Syntax
// array.splice(startIndex, deleteCount, item1, item2, ...)



// 4️⃣ What does push() do here?
// state.pastes.push(paste);
// push() adds an element to the end of the array
// So this adds the new paste to state.pastes



// Imports createSlice from Redux Toolkit.
// createSlice:
// Creates reducer
// Generates action creators
// Avoids boilerplate code
// This is the modern Redux way.



// Imports toast notification utility.
// Used to show success messages like:
// Paste created
// Paste updated
// Paste deleted



// 🔹 Initial State
// const initialState = {
// Defines the initial state of the paste slice.

//     pastes: localStorage.getItem("pastes") 
//       ? JSON.parse(localStorage.getItem("pastes")) 
//       : []

// What this does:
// Checks if "pastes" exists in localStorage.
// If it exists:
// JSON.parse(localStorage.getItem("pastes"))
// Converts stored JSON string into a JavaScript array.
// If it does NOT exist:
// []
// Uses an empty array.
// 👉 This ensures:
// Data persists even after page refresh.



// 🔹 addToPastes (Create Paste)
//     addToPastes: (state, action) => {
// Runs when dispatch(addToPastes(paste)) is called.
// state → current paste slice state
// action.payload → new paste object
//       const paste = action.payload;
// Extracts the paste data sent from component.
//       state.pastes.push(paste);
// Adds new paste to the array.
// Redux Toolkit uses Immer, so direct mutation is safe.
//       localStorage.setItem("pastes", JSON.stringify(state.pastes));
// Saves updated pastes array to localStorage.
// Converts array → JSON string.
//       toast.success("Paste Created Successfully!")
// Shows success notification.



// 🔹 updateToPaste (Update Existing Paste)
//     updateToPaste: (state, action) => {
// Runs when updating a paste.
//       const paste = action.payload;
// Updated paste object.
//       const index = state.pastes.findIndex(
//         (item) => item._id === paste._id
//       )
// Finds index of paste with same _id.
//       if (index >= 0){
// Checks if paste exists.
//         state.pastes[index] = paste
// Replaces old paste with updated one.
//         localStorage.setItem("pastes", JSON.stringify(state.pastes));
// Updates localStorage.
//         toast.success("Paste Updated Successfully!")
// Shows update notification.



// 🔹 resetAllPaste (Clear All Pastes)
//     resetAllPaste: (state, action) => {
// Clears all pastes.
//       state.pastes = [];
// Empties paste array.
//       localStorage.removeItem("pastes");
// Removes stored data from localStorage.



// 🔹 removeFromPaste (Delete One Paste)
//     removeFromPaste: (state, action) => {
// Deletes a specific paste.
//       const pasteId = action.payload;
// Extracts paste ID to delete.
//       const index = state.pastes.findIndex(
//         (item) => item._id === pasteId
//       );
// Finds index of paste by ID.
//       if (index >= 0){
// Confirms paste exists.
//         state.pastes.splice(index, 1);
// Removes one element from array.
//         localStorage.setItem("pastes", JSON.stringify(state.pastes));
// Saves updated array to localStorage.
//         toast.success("Paste Deleted Successfully");
// Shows delete success message.
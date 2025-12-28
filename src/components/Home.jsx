import {useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { addToPastes, updateToPaste } from '../redux/pasteSlice';
import { useEffect } from 'react';

const Home = () => {

  const [title, setTitle] = useState('')
  const[content, setContent] = useState('')
  const [getparams, setparams] = useSearchParams();
  const pasteId = getparams.get("pasteId")
  const allPastes = useSelector((state) => state.paste.pastes);
  const dispatch = useDispatch();

  useEffect(() => {

      if (pasteId){

        const paste = allPastes.find((p) => p._id === pasteId);
        setTitle(paste.title);
        setContent(paste.content);
      }
    }, [pasteId])

  function createPaste(){

    const paste = {

      title: title,
      content: content,
      _id: pasteId || Date.now().toString(36),
      createdAt: new Date().toISOString(),
    }

    if (pasteId){

      // For Updating a Paste
      dispatch(updateToPaste(paste));
    }else {

      // For Creating a Paste
      dispatch(addToPastes(paste));
    }

    setTitle('')
    setContent('')
    setparams({})
  }

  return (
    <div>
      <div className='flex flex-row mt-3 gap-5 place-content-between'>
        <input 

          className='p-2 rounded-md w-[500px]'
          type='text'
          value={title}
          placeholder='Title'
          onChange={(e) => setTitle(e.target.value)}
          />
        <button   
          className='p-2 px-5 rounded-md'
          onClick={createPaste}
        >
          {pasteId ? "Update Paste" : "Create Paste"}
        </button>
      </div>

      <div className='mt-3'>
        <textarea

          className='w-[700px] h-screen p-2 rounded-md'
          type='text'
          value={content}
          placeholder='Enter Content'
          onChange={(e) => setContent(e.target.value)}
        >
        </textarea>
      </div>
    </div>
  )
}

export default Home



// import { useState } from 'react'
// Imports useState hook.
// Used to store local component state (title & content).



// import { useSearchParams } from 'react-router-dom'
// Used to read & update query parameters from the URL.
// /?pasteId=abc123


// import { useDispatch, useSelector } from "react-redux";
// useDispatch() → sends actions to Redux store.
// useSelector() → reads data from Redux store.



// useSelector is a React-Redux hook.
// It lets you read data from the Redux store.
// It automatically re-renders the component when selected data changes.
// 👉 Think of it as:
// “Select some data from the Redux store.”



// state is the ENTIRE Redux store state.
// Redux automatically passes it to this function.



// 3️⃣ What does (state) => state.paste.pastes mean?
// This is a selector function.
// (state) => state.paste.pastes
// It means:
// “From the global Redux state, give me only pastes inside paste.”
// Step-by-step:
// state → entire Redux store
// state.paste → paste slice
// state.paste.pastes → array of pastes
// 👉 Here:
// name: "paste" → slice name
// initialState.pastes → pastes array



// This creates the global state as:

// state = {
//   paste: {
//     pastes: []
//   }
// }



// find() is an array method in JavaScript.
// 👉 It:
// Goes through the array one by one
// Returns the FIRST element that matches a condition
// Stops searching after finding it
// Returns undefined if nothing matches



// 3️⃣ What is (p)?
// (p) => ...
// p represents one paste object at a time.
// You can name it anything:




// 4️⃣ What does p._id === pasteId mean?
// p._id === pasteId
// Breaking it down:
// p._id → ID of the current paste
// pasteId → ID from the URL query parameter
// === → strict equality check (value + type)
// 👉 This checks:
// “Is this paste’s ID the same as the ID from the URL?”



// p._id
// means:
// “Get the value of the property named _id from the object p.”
// The dot (.) is used to access properties of an object.



// "pasteId" is the NAME (key) of the query parameter.
// It must exactly match the name used in the URL.



// 1️⃣ What is onChange?
// onChange is a React event handler.
// It runs every time the input value changes (when you type, delete, paste).



// e is the event object.
// It is automatically provided by React when an event occurs.
// You can name it anything:



// 3️⃣ What does the event object contain?
// e contains information about the event, such as:
// Which element triggered it
// What type of event it was
// Current value of the input



// 4️⃣ What is e.target?
// e.target
// target is the HTML element that triggered the event here that html element is <input />.



// e.target.value
// value is the current text inside the input.
// Whatever the user has typed.
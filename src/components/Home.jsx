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
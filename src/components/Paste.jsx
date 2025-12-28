import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromPaste } from '../redux/pasteSlice';
import toast from 'react-hot-toast';
import { FaCalendarAlt } from "react-icons/fa";

const Paste = () => {

  const pastes = useSelector((state) => state.paste.pastes);
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const filterData = pastes.filter(

    (paste) => paste.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())
  )

  function deletePaste(pasteId){

    dispatch(removeFromPaste(pasteId));
  }

  return (
    <div>
      
      <input

        className='p-1 px-2 rounded-md w-[700px]'
        type='text'
        value={searchTerm}
        placeholder='Search'
        onChange={(e) => setSearchTerm(e.target.value)} 
      />

      <div className='mt-3 border-2 flex flex-col gap-5 p-3'>
        {
          filterData.length > 0 &&
          filterData.map(
          // This line means: “If filterData has items, then loop over it and render the results; otherwise render nothing.”
            (paste) =>
            {
              return (

                <div className='flex flex-col border-2 p-3 gap-3' key={paste?._id}>
                  <div className='font-bold flex place-content-start'>
                    {paste.title}
                  </div>
                  <div 
                    style={{
                      maxWidth: "550px",     // 👈 controls how much of the line is visible
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}>
                    {paste.content}
                  </div>
                  <div className='flex flex-row p-3 px-7 gap-3 place-content-between'>
                    <button className='border-2 px-5 py-2 rounded-md'>
                      <a href={`/?pasteId=${paste?._id}`}>
                        Edit
                      </a>
                    </button>
                    <button className='border-2 px-5 py-2 rounded-md'>
                      <a href={`/pastes/${paste?._id}`}>
                        View
                      </a>
                    </button>
                    <button
                      onClick={() => deletePaste(paste?._id)} 
                      className='border-2 px-5 py-2 rounded-md'> 
                      Delete
                    </button>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(paste?.content)
                        toast.success("Copied to Clipboard")
                      }} 
                      className='border-2 px-5 py-2 rounded-md'>
                      Copy
                    </button>
                    <button className='border-2 px-5 py-2 rounded-md'

                      onClick={() => {
                        if (navigator.share) {
                          navigator.share({
                            title: paste.title,
                            text: paste.content,
                            url: `${window.location.origin}/pastes/${paste._id}`,
                          })
                          .then(() => {
                            toast.success("Paste shared successfully");
                          })
                          // .catch(() => {
                          //   toast.error("Sharing cancelled");
                          // });
                        } else {
                          // navigator.clipboard.writeText(
                          //   `${paste.title}\n\n${paste.content}\n\n${window.location.origin}/pastes/${paste._id}`
                          // );
                          toast.success("Link copied (Share not supported)");
                        }
                      }}
                    >
                      Share
                    </button>
                  </div>
  
                    <div className='flex place-content-start gap-2 items-center'>
                      { <FaCalendarAlt className="text-gray-500 flex place-content-start" /> }
                      { new Date(paste.createdAt).toLocaleDateString()}
                    </div>

                </div>
              )
            }
          )
        }
      </div>

    </div>
  )
}

export default Paste



// const filterData = pastes.filter(
// Creates a new array containing only matching pastes.
// (paste) => paste.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())
// For each paste:
// Convert title to lowercase
// Check if it contains the search text
// Makes search case-insensitive.



// 2️⃣ What does the . (dot) mean?
// paste._id
// . is property access
// It means:
// “Get the _id property from the paste object”
// Without ?, JavaScript assumes paste must exist.



// 3️⃣ What is ?. (question mark + dot)?
// paste?._id
// This is called optional chaining.
// It means:
// “If paste exists, then get _id;
// if paste is null or undefined, return undefined instead of crashing.”



// 4️⃣ Why do we need ?.?
// Without optional chaining ❌
// paste._id
// If paste is undefined, JavaScript throws an error:
// Cannot read properties of undefined
// With optional chaining ✅
// paste?._id
// No error
// Safely returns undefined



// 1️⃣ Initial state: searchTerm is EMPTY
// At the start:
// const [searchTerm, setSearchTerm] = useState('');
// So:
// searchTerm === ""
// 2️⃣ What does includes("") do?
// This is the most important part 👇
// In JavaScript:
// "hello".includes("")  // ✅ true
// "react".includes("") // ✅ true
// "".includes("")      // ✅ true
// 👉 Every string includes an empty string.



// 5️⃣ So the logic in plain English
// “Show all pastes when search is empty.
// As soon as the user types something, show only matching pastes.”
// This happens automatically, no extra if needed.
import { useParams } from 'react-router-dom'
import { useSelector } from "react-redux";
import { FiCopy } from "react-icons/fi";
import toast from "react-hot-toast";

const ViewPastes = () => {

  const {id} = useParams();
  const allPastes = useSelector((state) => state.paste.pastes);

  const paste = allPastes.find((p) => p._id === id);

  if (!paste)
    return <div>Paste not found</div>;

  return (

    <div>

      <div className='flex flex-row mt-3 gap-5 place-content-between'>

        <input 
          className='p-2 rounded-md w-[500px]'
          type='text'
          value={paste.title}
          disabled
          />

          <button
            className='border-2 px-5 py-2 rounded-md'
            onClick={() => {
                navigator.clipboard.writeText(paste?.content)
                toast.success("Copied to Clipboard")
              }}>
              <FiCopy />
          </button>

      </div>

      <div className='mt-3'>

        <textarea
          className='w-[700px] h-screen p-2 rounded-md'
          type='text'
          value={paste.content}
          disabled
        >
        </textarea>

      </div>
      
    </div>
  )
}

export default ViewPastes
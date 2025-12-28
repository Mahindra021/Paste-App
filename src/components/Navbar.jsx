import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex flex-row p-3 gap-3 place-content-end font-bold'>
        <NavLink to="/">
            Home
        </NavLink>

        <NavLink to="/paste">
            Paste
        </NavLink>
    </div>
  )
}

export default Navbar
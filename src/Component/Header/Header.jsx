import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <div className="w-full flex justify-end p-2 bg-slate-600">
        <ul className="flex gap-6">
            <li className="border-[1px] bg-white rounded-lg text-1xl font-bold border-black p-3">
                <NavLink to='/adduser'>Add User</NavLink>
            </li>
            <li className="border-[1px] bg-white rounded-lg text-1xl font-bold border-black p-3">
            <NavLink to='/'>Get User</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Header
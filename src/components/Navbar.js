/* eslint-disable jsx-a11y/no-static-element-interactions */
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="py-5 px-2 shadow-md">
      <div className="container mx-auto flex items-baseline justify-between">
        <div className="flex items-center">
          <img src="/planet.png" alt="logo" className="w-10" />
          <h1 className="text-2xl font-bold ml-2">{`Space Traveler's Hub`}</h1>
        </div>
        <ul className="flex items-center">
          <li className="mr-6">
            <NavLink
              to="/"
              className="text-md bg-white underline text-blue-500 cursor-pointer hover:text-blue-700"
            >
              Rockets
            </NavLink>
          </li>
          <li className="mr-6">
            <NavLink
              className="text-md bg-white underline text-blue-500 cursor-pointer hover:text-blue-700"
            >
              Missions
            </NavLink>
          </li>
          <li>
            <NavLink
              className="text-md bg-white underline text-blue-500 cursor-pointer hover:text-blue-700"
            >
              My Profile
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

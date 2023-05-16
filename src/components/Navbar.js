/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="py-5 px-2 shadow-md">
      <div className="container mx-auto flex justify-between">
        <div className="flex items-center">
          <img src="/planet.png" alt="logo" className="w-10" />
          <h1 className="text-2xl font-bold ml-2">{`Space Traveler's Hub`}</h1>
        </div>
        <ul className="flex items-center">
          <li className="mr-6">
            <button
              type="button"
              className="text-md bg-white underline text-blue-500 cursor-pointer hover:text-blue-700"
              onClick={() => navigate("/rockets")}
            >
              Rockets
            </button>
          </li>
          <li className="mr-6">
            <button
              type="button"
              className="text-md bg-white underline text-blue-500 cursor-pointer hover:text-blue-700"
              onClick={() => navigate("/missions")}
            >
              Missions
            </button>
          </li>
          <li>
            <button
              type="button"
              className="text-md bg-white underline text-blue-500 cursor-pointer hover:text-blue-700"
              onClick={() => navigate("/my-profile")}
            >
              My Profile
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

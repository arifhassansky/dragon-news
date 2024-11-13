import { NavLink } from "react-router-dom";
import userLogo from "../assets/user.png";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center my-9">
      <div></div>
      <div className="space-x-6 text-gray-500 md:ml-32 lg:ml-40">
        <button>Home</button>
        <button>Career</button>
        <button>About</button>
      </div>
      <div className="flex items-center gap-2 ">
        <img src={userLogo} alt="" />
        <button className="btn btn-neutral px-4  md:px-10 rounded-none">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;

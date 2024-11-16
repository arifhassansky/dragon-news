import { Link } from "react-router-dom";
import userLogo from "../assets/user.png";
import { useContext } from "react";
import { authContext } from "./auth/AuthProvider";
const Navbar = () => {
  const { user, logout } = useContext(authContext);

  console.log(user);
  return (
    <div className="flex justify-between items-center py-9">
      <div className="font-bold text-lg">{user?.displayName}</div>
      <div className="space-x-6 text-gray-500 md:ml-32 lg:ml-40">
        <Link to="/">Home</Link>
        <Link>Career</Link>
        <Link>About</Link>
      </div>
      <div className="flex items-center gap-2 ">
        {user ? (
          <img
            className="w-12 h-12 rounded-full object-cover"
            src={user?.photoURL}
          />
        ) : (
          <img src={userLogo} />
        )}

        {user ? (
          <Link
            onClick={logout}
            to="/auth/login"
            className="btn btn-neutral px-4 md:px-10 rounded-none"
          >
            Logout
          </Link>
        ) : (
          <Link
            to="/auth/login"
            className="btn btn-neutral px-4  md:px-10 rounded-none"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;

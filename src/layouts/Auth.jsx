import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Auth = () => {
  return (
    <div className="bg-[#F3F3F3]">
      <section className="w-11/12 mx-auto">
        <Navbar />
      </section>
      <Outlet />
    </div>
  );
};

export default Auth;

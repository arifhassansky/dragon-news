import moment from "moment";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center my-8">
      <div>
        <img className="w-80" src={logo} />
      </div>
      <h2 className="mt-4 text-gray-500 mb-3">
        Journalism Without Fear or Favour
      </h2>
      <p>{moment().format("dddd, MMMM Do, YYYY")}</p>
    </div>
  );
};

export default Header;

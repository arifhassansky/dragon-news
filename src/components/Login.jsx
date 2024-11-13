import { FaGithub, FaGoogle } from "react-icons/fa";
const Login = () => {
  return (
    <div className="*:w-full">
      <h2 className="font-semibold text-xl mb-4">Login With</h2>
      <button className="btn mb-2">
        <FaGoogle /> Login With Google
      </button>
      <button className="btn">
        <FaGithub /> Login With Github
      </button>
    </div>
  );
};

export default Login;

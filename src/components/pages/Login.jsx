import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../auth/AuthProvider";

const Login = () => {
  const { login, setUser } = useContext(authContext);
  const [error, setError] = useState();
  const location = useLocation();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    login(email, password)
      .then((result) => {
        setUser(result.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch(() => {
        setError("Opps..Email or Password is wrong.");
      });
  };

  return (
    <div className="pb-9">
      <div className="card bg-white max-w-xl shrink-0 mx-auto p-10">
        <form onSubmit={handleSubmit} className="card-body">
          <h2 className="font-semibold text-4xl text-center mb-12 ">
            Login your account
          </h2>
          <div className="form-control">
            <label className="label">
              <span className="text-xl font-semibold">Email address</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="input input-bordered bg-[#F3F3F3]"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="text-xl font-semibold">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input input-bordered bg-[#F3F3F3]"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral">Login</button>
          </div>
        </form>
        <p className="text-xs text-red-500 mb-4 ml-8">{error}</p>
        <p className="font-semibold text-center">
          Dont’t Have An Account ?{" "}
          <Link className="text-red-500" to="/auth/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

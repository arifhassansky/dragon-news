import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../auth/AuthProvider";

const Register = () => {
  const { createUser, setUser, updateUserProfile } = useContext(authContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleForm = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const name = form.get("name");
    const photoUrl = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");

    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      setError("Password does not meet the requirements.");
      return;
    }

    createUser(email, password)
      .then((result) => {
        setUser(result.user);
        updateUserProfile({
          displayName: name,
          photoURL: photoUrl,
        })
          .then(() => {
            navigate("/");
          })
          .catch((error) => {
            setError(error.message);
          });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="pb-12">
      <div className="card bg-white max-w-xl shrink-0 mx-auto p-6">
        <form onSubmit={handleForm} className="card-body">
          <h2 className="font-semibold text-4xl text-center mb-6">
            Register your account
          </h2>
          <div className="form-control">
            <label className="label">
              <span className="text-xl font-semibold">Your Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered bg-[#F3F3F3]"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="text-xl font-semibold">Your Photo</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Enter your photo Url"
              className="input input-bordered bg-[#F3F3F3]"
              required
            />
          </div>
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
            <button className="btn btn-neutral">Register</button>
          </div>
        </form>
        {error && <p className="text-xs text-red-500 mb-4 ml-8">{error}</p>}
        <p className="font-semibold text-center">
          Already have An Account ?{" "}
          <Link className="text-red-500" to="/auth/login">
            login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;

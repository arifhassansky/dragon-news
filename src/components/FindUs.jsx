import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
const FindUs = () => {
  return (
    <div className="*:w-full mt-4">
      <h2 className="font-semibold text-xl mb-4">Find Us On</h2>
      <div className="join join-vertical">
        <button className="btn bg-base-100 join-item justify-start">
          <span className="text-blue-700">
            <FaFacebook />
          </span>{" "}
          Facebook
        </button>
        <button className="btn bg-base-100 join-item justify-start">
          <span className="text-blue-400">
            <FaTwitter />
          </span>{" "}
          Twitter
        </button>
        <button className="btn bg-base-100 join-item justify-start">
          <span className="text-red-400">
            <FaInstagram />
          </span>{" "}
          Instragram
        </button>
      </div>
    </div>
  );
};

export default FindUs;

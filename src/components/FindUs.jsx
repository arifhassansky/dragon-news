import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
const FindUs = () => {
  return (
    <div className="*:w-full mt-4">
      <h2 className="font-semibold text-xl mb-4">Find Us On</h2>
      <div className="join join-vertical">
        <button className="btn bg-base-100 join-item justify-start">
          <FaFacebook /> Facebook
        </button>
        <button className="btn bg-base-100 join-item justify-start">
          <FaTwitter /> Twitter
        </button>
        <button className="btn bg-base-100 join-item justify-start">
          <FaInstagram /> Instragram
        </button>
      </div>
    </div>
  );
};

export default FindUs;

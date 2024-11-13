import swimmming from "../assets/swimming.png";
import classImg from "../assets/class.png";
import playground from "../assets/playground.png";
const Qzone = () => {
  return (
    <div className="bg-gray-100 w-full mt-4">
      <h2 className="font-semibold text-xl p-2">Q Zone</h2>
      <div className="text-center">
        <img className="w-full" src={swimmming} />
      </div>
      <div className="text-center mb-4 mt-4">
        <img className="w-full" src={classImg} />
      </div>
      <div className="text-center">
        <img className="w-full" src={playground} />
      </div>
    </div>
  );
};

export default Qzone;

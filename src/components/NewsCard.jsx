/* eslint-disable react/prop-types */
import { FaStar, FaEye } from "react-icons/fa";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  return (
    <div className="rounded-lg border my-5">
      <div className="flex flex-col items-start">
        <div className="w-full flex justify-between items-center mb-4 bg-gray-100 p-4">
          <div className="flex items-center space-x-4">
            <img
              className="w-10 h-10 rounded-full"
              src={news.author.img}
              alt="Author"
            />
            <div>
              <h2 className="text-gray-900 font-semibold">
                {news.author.name}
              </h2>
              <p className="text-gray-500 text-sm">
                {new Date(news.author.published_date).toLocaleDateString()}
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <CiBookmark size={20} />
            <CiShare2 size={20} />
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{news.title}</h3>
          <img
            className="w-full h-72 object-cover rounded-md mb-4"
            src={news.thumbnail_url}
            alt="Thumbnail"
          />
          <p className="text-gray-700 mb-2">
            {news.details.slice(0, 320)}...{" "}
            <Link to={`/news/${news._id}`} className="text-[#FF8C47] font-bold">
              Read More
            </Link>
          </p>
          <hr className="mt-6" />
          <div className="flex items-center justify-between w-full mt-4">
            <div className="flex items-center space-x-1">
              <div className="flex items-center text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(news.rating.number)
                        ? "text-yellow-500"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-gray-600 font-semibold">
                {news.rating.number}
              </span>
            </div>
            <div className="flex items-center text-gray-600 font-semibold gap-2">
              <FaEye className="h-5 w-5" />
              <span>{news.total_view}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewsCard;

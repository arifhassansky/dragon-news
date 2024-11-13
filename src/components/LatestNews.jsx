import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <div className="flex bg-gray-100 py-2 px-2 gap-2">
      <h2 className="bg-[#D72050] text-white px-4 py-2">Latest</h2>
      <Marquee
        pauseOnHover={true}
        className="space-x-8 text-black font-semibold"
      >
        <Link>
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </Link>
        <Link>
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </Link>
        <Link>
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </Link>
      </Marquee>
    </div>
  );
};

export default LatestNews;

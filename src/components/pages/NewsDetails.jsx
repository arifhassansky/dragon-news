import { Link, useLoaderData } from "react-router-dom";
import Advertise from "../../Advertise";
import Header from "../Header";

const NewsDetails = () => {
  const { data } = useLoaderData();
  const news = data[0];
  return (
    <div>
      <section>
        <Header />
      </section>

      <main className="w-11/12 mx-auto grid grid-cols-4 gap-4">
        <section className="col-span-3">
          <Link to="/" className="font-semibold text-xl">
            Dragon News
          </Link>
          <div className="card border rounded-lg mt-5">
            <figure className="px-10 pt-10">
              <img
                src={news?.image_url}
                alt="Shoes"
                className="rounded-lg w-full"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{news?.title}</h2>
              <p>{news?.details}</p>
              <div className="card-actions mt-8">
                <Link
                  to={`/category/${news?.category_id}`}
                  className="btn bg-[#D72050] text-white rounded-none"
                >
                  All news in this category
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section>
          <Advertise />
        </section>
      </main>
    </div>
  );
};

export default NewsDetails;

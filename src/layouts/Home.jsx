import { Outlet } from "react-router-dom";
import Advertise from "../Advertise";
import Categories from "../components/Categories";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="w-11/12 mx-auto">
      <header>
        <Header />
        <section>
          <LatestNews />
        </section>
      </header>
      <nav>
        <Navbar />
      </nav>
      <main className="grid md:grid-cols-4 gap-2">
        <aside className="">
          <Categories />
        </aside>
        <section className="col-span-2">
          <Outlet />
        </section>
        <aside>
          <Advertise />
        </aside>
      </main>
    </div>
  );
};

export default Home;

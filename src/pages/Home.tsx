// files
import img from "../assets/images/del.jpg";
import Navbar from "../components/Navbar";
import PackageItem from "../components/PackageItem";
import useFetch from "../hooks/useFetch";
import ReactSpinner from "../components/ReactSpinner";

export default function Home() {
  // methods
  const { data, loading, error } = useFetch(
    "https://my.api.mockaroo.com/insta-orders.json?key=e49e6840"
  );

  //components
  const PackageItems =
    data && data.map((item) => <PackageItem item={item} key={item.id} />);

  return (
    <section className="app">
      <Navbar display="mobile" />
      <img src={img} alt="" className="home--banner" />
      <div className="main">
        <div className="main__inner">
          <Navbar display="desktop" />
          <div className="top--container">
            <aside className="content">
              <h1 className="app-title">
                Control your package items from any device
              </h1>
            </aside>
            <aside className="content content__image">
              <div className="aside-image" />
            </aside>
          </div>
          <div className="bottom--container">
            {loading && <ReactSpinner />}
            {PackageItems}
          </div>
        </div>
      </div>
    </section>
  );
}

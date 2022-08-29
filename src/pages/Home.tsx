// files
import PackageItem from "../components/PackageItem";
import useFetch from "../hooks/useFetch";
import Navbar from "../components/Navbar";
import img from "../assets/images/del.jpg";

export default function Home() {
  const { data, loading, error } = useFetch(
    "https://my.api.mockaroo.com/insta-orders.json?key=e49e6840"
  );

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
              <div className="spacer" />
            </aside>
            <aside className="content content__image">
              <div className="aside-image" />
            </aside>
          </div>
          <div className="bottom--container">{PackageItems}</div>
        </div>
      </div>
    </section>
  );
}

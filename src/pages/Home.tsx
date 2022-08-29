// files
import PackageItem from "../components/PackageItem";
import useFetch from "../hooks/useFetch";
import Navbar from "../components/Navbar";

export default function Home() {
  const { data, loading, error } = useFetch(
    "https://my.api.mockaroo.com/insta-orders.json?key=e49e6840"
  );

  const PackageItems =
    data && data.map((item) => <PackageItem item={item} key={item.id} />);
  return (
    <section className="main">
      <div className="main__inner">
        <Navbar />
        <div className="top--container">
          <aside className="content">
            <h1 className="app-title">
              Control your package items from any device
            </h1>
          </aside>
          <aside className="content">
            <div className="aside-image" />
          </aside>
        </div>
        <div className="bottom--container">{PackageItems}</div>

        {/* {loading && <p>Loading ...</p>}
        {error && <p>{error}</p>} */}
        {/* {PackageItems} */}
      </div>
    </section>
  );
}

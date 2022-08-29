// files
import PackageItem from "../components/PackageItem";
import useFetch from "../hooks/useFetch";

export default function Home() {
  const { data, loading, error } = useFetch(
    "https://my.api.mockaroo.com/insta-orders.json?key=e49e6840"
  );

  const PackageItems =
    data && data.map((item) => <PackageItem item={item} key={item.id} />);
  return (
    <section className="main">
      <div className="main__inner">
        <div className="main__inner--top">
          <aside>
            <div className="box">Home</div>
            <div className="box">Home</div>
            <div className="box">Home</div>
            <div className="box">Home</div>
            <div className="box">Home</div>
            <div className="box">Home</div>
            <div className="box">Home</div>
            <div className="box">Home</div>
            <div className="box">Home</div>
            <div className="box">Home</div>
          </aside>
          <aside>away</aside>
        </div>

        {loading && <p>Loading ...</p>}
        {error && <p>{error}</p>}
        {/* {PackageItems} */}
      </div>
    </section>
  );
}

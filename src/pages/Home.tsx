// files
import useFetch from "../hooks/useFetch";

export default function Home() {
  const { data, loading, error } = useFetch(
    "https://my.api.mockaroo.com/insta-orders.json?key=e49e6840"
  );
  return (
    <div>
      {loading && <p>Loading ...</p>}
      {data && <p>data has succesfully been fetched!</p>}
      {error && <p>{error}</p>}
    </div>
  );
}

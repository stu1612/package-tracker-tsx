// files
import useFetch from "../hooks/useFetch";

export default function Home() {
  const { data, loading, error } = useFetch(
    "https://my.api.mockaroo.com/insta-orders.json?key=e49e6840"
  );
  return <div>Home</div>;
}

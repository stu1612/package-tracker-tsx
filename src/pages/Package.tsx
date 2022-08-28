// npm
import { useNavigate, useLocation } from "react-router-dom";
import ReactMoment from "../components/ReactMoment";

export default function Package() {
  // properties
  const navigate = useNavigate();
  const location = useLocation();
  const { parcel_id, last_updated } = location.state as any;

  return (
    <div>
      <h1>Packages</h1>
      <p>{parcel_id}</p>
      <p>
        Last updated:
        <span>
          <ReactMoment time={last_updated} />
        </span>
      </p>

      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
}

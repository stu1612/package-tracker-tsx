// npm
import { useNavigate, useLocation } from "react-router-dom";

export default function Package() {
  // properties
  const navigate = useNavigate();
  const location = useLocation();
  const { parcel_id } = location.state as any;

  return (
    <div>
      <h1>Packages</h1>
      <p>{parcel_id}</p>
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
}

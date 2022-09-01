// npm
import { Link } from "react-router-dom";

// files
import iPackage from "../interfaces/iPackage";
import ReactMoment from "../components/ReactMoment";
import PackageStatus from "./PackageStatus";

interface myProps {
  item: iPackage;
}

export default function PackageItem({ item }: myProps) {
  // properties
  const { status, eta, parcel_id } = item;

  return (
    <Link className="package-item" to={"/package"} state={item}>
      <PackageStatus status={status} />
      <div>
        <p className="eta">
          <ReactMoment time={eta} />
        </p>
        <p>ID: #{parcel_id}</p>
      </div>
    </Link>
  );
}

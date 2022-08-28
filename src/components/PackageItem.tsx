// files
import iPackage from "../interfaces/iPackage";

interface myProps {
  item: iPackage;
}

export default function PackageItem({ item }: myProps) {
  const { status, notes, eta, parcel_id } = item;
  return (
    <div className="package-item">
      <h1>{status}</h1>
      <p>{notes}</p>
      <p>{eta}</p>
      <p>{parcel_id}</p>
    </div>
  );
}

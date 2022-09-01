// files
import delivered from "../assets/icons/delivered_lg.png";
import on_the_way from "../assets/icons/route_lg.png";
import ready_for_pickup from "../assets/icons/pickup_lg.png";
import order_info_recieved from "../assets/icons/recieved_lg.png";

interface myProps {
  status: string;
}

export default function PackageStatus({ status }: myProps) {
  switch (status) {
    case "delivered":
      return <img src={delivered} alt="delivered" className="status-icon" />;

    case "order-info-received":
      return (
        <img
          src={order_info_recieved}
          alt="delivered"
          className="status-icon"
        />
      );

    case "on-the-way":
      return <img src={on_the_way} alt="delivered" className="status-icon" />;

    case "ready-for-pickup":
      return (
        <img src={ready_for_pickup} alt="delivered" className="status-icon" />
      );
  }
  return <></>;
}

// npm
import Moment from "react-moment";

interface myProps {
  time: string;
}

export default function ReactMoment({ time }: myProps) {
  return <Moment>{time}</Moment>;
}

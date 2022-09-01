import { Grid } from "react-loader-spinner";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function ReactSpinner() {
  return (
    <div className="loader">
      <Grid
        height="60"
        width="60"
        color="#fff"
        ariaLabel="grid-loading"
        radius="10.5"
        wrapperStyle={{}}
        wrapperClass="loader"
        visible={true}
      />
    </div>
  );
}

// files
import sv from "../assets/icons/sweden.png";
import no from "../assets/icons/norway.png";
import dk from "../assets/icons/denmark.png";
import icon from "../assets/icons/location.png";

export default function Navbar({ display }: any) {
  return (
    <nav className={`navbar ${display}`}>
      <div className="navbar__logo">
        {display === "desktop" && <img src={icon} alt="app icon" />}

        <h1 className="logo-title">Tracker</h1>
      </div>
      <div className="navbar__languages">
        <img src={sv} alt="swedish flag" />
        <img src={no} alt="norwegien flag" />
        <img src={dk} alt="danish flag" />
      </div>
    </nav>
  );
}

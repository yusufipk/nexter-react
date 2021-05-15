import logo from "./img/logo.png";
import bbclogo from "./img/logo-bbc.png";
import forbeslogo from "./img/logo-forbes.png";
import techcrunchlogo from "./img/logo-techcrunch.png";
import bilogo from "./img/logo-bi.png";

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Nexter Logo" className="header__logo" />
      <h3 className="heading-3">Your own home:</h3>
      <h1 className="heading-1">The ultimate personal freedom</h1>
      <button className="btn header__btn">View our poperties</button>
      <div className="header__seenon-text">Seen On</div>
      <div className="header__seenon-logos">
        <img src={bbclogo} alt="BBC Logo" />
        <img src={forbeslogo} alt="Forbes Logo" />
        <img src={techcrunchlogo} alt="Techcrunch Logo" />
        <img src={bilogo} alt="Business Insider Logo" />
      </div>
    </header>
  );
}

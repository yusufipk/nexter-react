export default function Footer() {
  return (
    <footer className="footer">
      <ul className="nav">
        <li className="nav__item">
          <a href="#" className="nav__link">
            Find your dream home
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Request proposal
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Download homeplanner
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Contact us
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Submit your property
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Come work with us!
          </a>
        </li>
      </ul>
      <p className="copyright">
        &copy; Designed by Jonas Schmedtmann and coded by{" "}
        <a
          href="https://yusufipek.me"
          target="_blank"
          rel="noreferrer"
          className="copyright__link"
        >
          Yusuf İpek
        </a>
      </p>
    </footer>
  );
}

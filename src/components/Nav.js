/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav">
      <ul className="menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="photos">Zdjęcia</Link>
        </li>
        <li>
          <Link to="about">O mnie</Link>
        </li>
        <li>
          <Link to="contact">Kontakt</Link>
        </li>
      </ul>
      <div className="introduction">
        <h1>Wojciech Klimczak</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et metus
          eleifend, sollicitudin diam vitae, volutpat erat.
        </p>
      </div>
    </nav>
  );
}

export default Nav;

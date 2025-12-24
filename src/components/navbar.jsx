import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Searchbar from "./searchbar"; // import your search overlay
import "./navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false); // control overlay

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav className={`custom-navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-inner">
          <Link className="navbar-brand" to="/">bv lounge</Link>

          <ul className="nav-links">
            <li><Link to="/shop">shop</Link></li>
            <li><Link to="/cart">cart</Link></li>
            <li><Link to="/about">about</Link></li>
            <li><Link to="/contact">contact</Link></li>
          </ul>

          <div className="nav-icons">
            <i className="bi bi-search" onClick={() => setSearchOpen(true)}></i>
          </div>
        </div>
      </nav>

      <Searchbar show={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}

export default Navbar;

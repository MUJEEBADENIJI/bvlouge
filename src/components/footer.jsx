import "./footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div className="footer-col">
          <h4>categories</h4>
          <ul>
            <li>male</li>
            <li>female</li>
            <li>accessories</li>
            <li>shoes</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>help</h4>
          <ul>
            <li>track order</li>
            <li>returns</li>
            <li>shipping</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>get in touch</h4>
          <p>
            any questions? let us know in store or call us on
            +234 000 000 0000
          </p>

          <div className="footer-socials">
            <i className="bi bi-facebook"></i>
            <i className="bi bi-instagram"></i>
            <i className="bi bi-twitter-x"></i>
          </div>
        </div>

        <div className="footer-col">
          <h4>newsletter</h4>
          <input
            type="email"
            placeholder="email@example.com"
            className="footer-input"
          />
          <button className="footer-btn">subscribe</button>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} bv lounge. all rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

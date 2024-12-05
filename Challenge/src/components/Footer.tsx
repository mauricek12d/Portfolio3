import './Footer.css'; // Link to the CSS file for styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <nav>
                    <ul className="footer-nav">
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </nav>
                <div className="footer-icons">
                    <a
                        href="https://github.com/mauricek12d/Resume"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                    >
                        <i className="fab fa-github"></i>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/maurice-zuniga424/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                    >
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a
                        href="https://www.facebook.com/momo424/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                    >
                        <i className="fab fa-facebook"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

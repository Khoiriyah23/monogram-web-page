import iconInstagram from "../assets/images/icon-instagram.svg";
import iconFacebook from "../assets/images/icon-facebook.svg";
import iconTwitter from "../assets/images/icon-twitter.svg";

const Footer = () => {
    return (
        <footer>
            <section className="footer-container">
                <article>
                    <h1>Monogram</h1>
                    <div>
                        <p>305 King St. W.</p>
                        <p>Suite 502</p>
                        <p>Kitchener, ON</p>
                        <p>Canada</p>
                    </div>
                </article>

                <article>
                    <h1>Quick Links</h1>
                    <div>
                        <a href="#">Home</a>
                        <a href="#">How it Works</a>
                        <a href="#">Shop</a>
                        <a href="#">Download</a>
                    </div>
                </article>

                <article>
                    <h1>Helps</h1>
                    <div>
                        <a href="#">FAQs</a>
                        <a href="#">Support Center</a>
                        <a href="#">Shipping and Sales</a>
                    </div>
                </article>

                <article>
                    <h1>Information</h1>
                    <div>
                        <a href="#">About Us</a>
                        <a href="#">Work with us</a>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Use</a>
                        <a href="#">Terms of Sale</a>
                        <a href="#">Press Kit</a>
                    </div>
                </article>

                <article>
                    <h1>Subscribe to Monogram</h1>
                    <div>
                        <p>Master productivity with Creative Console and get all the latest Monogram news.</p>
                        <div className="subscribe">
                            <input type="email" placeholder="Your email" />
                            <button>Submit</button>
                        </div>
                        <div className="icons">
                            <a href="#"><img src={iconInstagram} alt="Instagram" /></a>
                            <a href="#"><img src={iconFacebook} alt="Facebook" /></a>
                            <a href="#"><img src={iconTwitter} alt="Twitter" /></a>
                        </div>
                    </div>
                    <p>&copy; Monogram 2024</p>
                </article>
            </section>
        </footer>
    );
}

export default Footer;

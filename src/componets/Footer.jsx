
import instagram from "../assets/images/instagram.svg";
import facebook from "../assets/images/facebook.svg";
import twitter from "../assets/images/twitter.svg";
// import youtube from "../assets/images/youtube.svg";

const Footer = () => {
    return (
        <>
        <div className="footer-div">

                    <div>
                        <h4>MONOGRAM</h4>
                        <p>305 King St. W.<br/>
                            Suite 502<br/>
                            Kitchener, ON<br/>
                            Canada</p>
                    </div>

                    <div>
                        <h4>QUICK LINKS</h4>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/">How it Works</a></li>
                            <li><a href="/">Shop</a></li>
                            <li><a href="/">Download</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4>HELPS</h4>
                        <ul>
                            <li><a href="/">FAQs</a></li>
                            <li><a href="/">Support Center</a></li>
                            <li><a href="/">Shipping and Sales</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4>INFORMATION</h4>
                        <ul>
                            <li><a href="/">About Us</a></li>
                            <li><a href="/">Work with us</a></li>
                            <li><a href="/">Privacy Policy</a></li>
                            <li><a href="/">Terms of Use</a></li>
                            <li><a href="/">Terms of Sale</a></li>
                            <li><a href="/">Press Kit</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4>SUBSCRIBE TO MONOGRAM</h4>
                        <p>Master productivity with Creative Console and get all the latest Monogram news.</p>
                        <input placeholder="Email Address"></input>
                        <button>SUBMIT</button> <br />
                        <a href="/">
                            <img src={instagram} alt="instagram" />
                        </a>
                        <a href="/">
                            <img src={twitter} alt="X" />
                        </a>
                        <a href="/">
                            <img src={facebook} alt="facebook" />
                        </a>
                        <p>&copy; Monogram 2024</p>
                    </div>
        </div>

        <div className="mobile-footer">

            <div>
                <div>
                    <h4>MONOGRAM</h4>
                    <p>305 King St. W.<br/>
                        Suite 502<br/>
                        Kitchener, ON<br/>
                        Canada</p>
                </div>

                <div>
                    <h4>QUICK LINKS</h4>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">How it Works</a></li>
                        <li><a href="/">Shop</a></li>
                        <li><a href="/">Download</a></li>
                    </ul>
                </div>
            </div>

            <div>  
                <div>
                    <h4>SUBSCRIBE TO MONOGRAM</h4>
                    <p>Master productivity with Creative Console and get all the latest Monogram news.</p>
                    <input placeholder="Email Address"></input>
                    <button>SUBMIT</button> <br />
                    <a href="/">
                        <img src={instagram} alt="instagram" />
                    </a>
                    <a href="/">
                        <img src={twitter} alt="X" />
                    </a>
                    <a href="/">
                        <img src={facebook} alt="facebook" />
                    </a>
                    <p>&copy; Monogram 2024</p>
                </div>

                <div className="flex">

                    <div id="help">
                        <h4>HELPS</h4>
                        <ul>
                            <li><a href="/">FAQs</a></li>
                            <li><a href="/">Support Center</a></li>
                            <li><a href="/">Shipping and Sales</a></li>
                        </ul>
                    </div>

                    <div id="info">
                        <h4>INFORMATION</h4>
                        <ul>
                            <li><a href="/">About Us</a></li>
                            <li><a href="/">Work with us</a></li>
                            <li><a href="/">Privacy Policy</a></li>
                            <li><a href="/">Terms of Use</a></li>
                            <li><a href="/">Terms of Sale</a></li>
                            <li><a href="/">Press Kit</a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>

        <div className="last-mobile-footer">
                <div>
                    <h4>SUBSCRIBE TO MONOGRAM</h4>
                    <p>Master productivity with Creative Console and get all the latest <br/> Monogram news.</p>
                    <input placeholder="Email Address"></input>
                    <button>SUBMIT</button> <br />
                    <a href="/">
                        <img src={instagram} alt="instagram" />
                    </a>
                    <a href="/">
                        <img src={twitter} alt="X" />
                    </a>
                    <a href="/">
                        <img src={facebook} alt="facebook" />
                    </a>
                   
                </div>
                <div className="flex">
                    <div>
                        <div>
                                <h4>MONOGRAM</h4>
                                <p>305 King St. W.<br/>
                                    Suite 502<br/>
                                    Kitchener, ON<br/>
                                    Canada</p>
                        </div>
                        <div>
                                <h4>HELPS</h4>
                                <ul>
                                    <li><a href="/">FAQs</a></li>
                                    <li><a href="/">Support Center</a></li>
                                    <li><a href="/">Shipping and Sales</a></li>
                                </ul>
                        </div>
                    </div>
                    <div>
                        <div>
                                <h4>QUICK LINKS</h4>
                                <ul>
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/">How it Works</a></li>
                                    <li><a href="/">Shop</a></li>
                                    <li><a href="/">Download</a></li>
                                </ul>
                        </div>
                        <div>
                            <h4>INFORMATION</h4>
                            <ul>
                                <li><a href="/">About Us</a></li>
                                <li><a href="/">Work with us</a></li>
                                <li><a href="/">Privacy Policy</a></li>
                                <li><a href="/">Terms of Use</a></li>
                                <li><a href="/">Terms of Sale</a></li>
                                <li><a href="/">Press Kit</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <p>&copy; Monogram 2024</p>
        </div>
        </>
    )
}

export default Footer;
import logo from "../assets/images/logo.svg";
import bag from "../assets/images/bag.svg";
import menu from "../assets/images/icon-menu.svg";
import menuClose from "../assets/images/icon-menu-close.svg";

import { useState } from "react";

const Header = ({ currency, setCurrency }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isAppear, setIsAppeared] = useState(false);
    const [articleDisplay, setArticleDisplay] = useState(false);
    const [isCurrencyDropdownVisible, setCurrencyDropdownVisible] = useState(false); // New state for bag click

    const handleToggle1 = () => {
        setIsOpen(!isOpen);
    };

    const handleToggle2 = () => {
        setIsAppeared(!isAppear);
    };

    const openArticle = () => {
        setArticleDisplay(true);
    };

    const closeArticle = () => {
        setArticleDisplay(false);
    };

    return (
        <header>
            <div id="overlay">
                <div className="header-div">
                    <div className="flex">
                        <article className="flex">
                            <a href="/">
                                <img src={logo} alt="logo" />
                                <h3>MONOGRAM</h3>
                            </a>
                        </article>

                        <nav className="flex">
                            <ul id="nav-bar">
                                <li><a href="#">HOW IT WORKS</a></li>
                                <li id="dropdown-workflow" onClick={handleToggle1}>
                                    <a href="#">WORKFLOWS</a>
                                    {isOpen && (
                                        <article>
                                            <a href="#">AUDIO CONSOLE</a>
                                            <a href="#">PHOTO CONSOLE</a>
                                            <a href="#">VIDEO CONSOLE</a>
                                            <a href="#">MINI CONSOLE</a>
                                        </article>
                                    )}
                                </li>
                                <li><a href="#">DOWNLOAD</a></li>
                                <li><a href="#">BLOG</a></li>
                                <li><a href="#">SUPPORT</a></li>
                                <li><a href="#" id="diff">SHOP</a></li>
                            </ul>

                            <img src={menu} alt="menu" id="menu" onClick={openArticle} />

                            <ul>
                                <li>
                                    <a href="/" id="diff-1" onClick={() => setCurrencyDropdownVisible(!isCurrencyDropdownVisible)}>
                                        <img src={bag} alt="bag" />
                                    </a>
                                </li>
                                <li id="dropdown-usd" onClick={handleToggle2}>
                                    <a href="#" onClick={() => setCurrency("")}>{currency.slice(1)}</a>
                                    {isAppear && (
                                        <div>
                                            <a href="#" onClick={() => setCurrency("$USD")}>USD ($)</a>
                                            <a href="#" onClick={() => setCurrency("$CAD")}>CAD ($)</a>
                                            <a href="#" onClick={() => setCurrency("€EUR")}>EUR (€)</a>
                                            <a href="#" onClick={() => setCurrency("$AUD")}>AUD ($)</a>
                                            <a href="#" onClick={() => setCurrency("£GBP")}>GBP (£)</a>
                                            <a href="#" onClick={() => setCurrency("₩KRW")}>KRW (₩)</a>
                                            <a href="#" onClick={() => setCurrency("¥JPY")}>JPY (¥)</a>
                                        </div>
                                    )}
                                </li>
                            </ul>
                        </nav>
                    </div>

                    {isCurrencyDropdownVisible && (
                        <div>
                            <a href="#" onClick={() => setCurrency("$USD")}>USD ($)</a>
                            <a href="#" onClick={() => setCurrency("$CAD")}>CAD ($)</a>
                            <a href="#" onClick={() => setCurrency("€EUR")}>EUR (€)</a>
                            <a href="#" onClick={() => setCurrency("$AUD")}>AUD ($)</a>
                            <a href="#" onClick={() => setCurrency("£GBP")}>GBP (£)</a>
                            <a href="#" onClick={() => setCurrency("₩KRW")}>KRW (₩)</a>
                            <a href="#" onClick={() => setCurrency("¥JPY")}>JPY (¥)</a>
                        </div>
                    )}

                    <article className={(articleDisplay) ? "open" : "close"} id="mobile-nav-bar">
                        <article className="flex">
                            <a href="/" className="flex">
                                <img src={logo} alt="logo" />
                                <h3>MONOGRAM</h3>
                            </a>

                            <img src={menuClose} alt="menuClose" id="menuclose" onClick={closeArticle} />
                        </article>

                        <article>
                            <nav>
                                <ul>
                                    <li><a href="#">HOW IT WORKS</a></li>
                                    <li><a href="#">WORKFLOWS</a></li>
                                    <li><a href="#" id="one">AUDIO CONSOLE</a></li>
                                    <li><a href="#" id="two">PHOTO CONSOLE</a></li>
                                    <li><a href="#" id="three">VIDEO CONSOLE</a></li>
                                    <li><a href="#" id="four">MINI CONSOLE</a></li>
                                    <li><a href="#">DOWNLOAD</a></li>
                                    <li><a href="#">BLOG</a></li>
                                    <li><a href="#">SUPPORT</a></li>
                                    <li><a href="#" id="last">SHOP</a></li>
                                </ul>
                            </nav>
                        </article>
                    </article>

                    <div>
                        <h1>A CONSOLE FOR <br /> EVERY WORKFLOW</h1>
                        <p>Discover the perfect console for yours.</p>
                        <a href="/">
                            {/* <img src={arrow} alt="arrow" /> */}
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;

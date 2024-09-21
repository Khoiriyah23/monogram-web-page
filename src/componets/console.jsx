
import console1 from "../assets/images/mini-console.webp";
import console1hover from "../assets/images/mini-console-hover.webp";
import console2 from "../assets/images/audio-console.webp";
import console2hover from "../assets/images/audio-console-hover.webp";
import console3 from "../assets/images/photo-console.webp";
import console3hover from "../assets/images/photo-console-hover.webp";
import console4 from "../assets/images/video-console.webp";
import console4hover from "../assets/images/video-console-hover.webp";

const Consoles = ({isHovered, elementHovered, handleMouseEnter, handleMouseLeave, currency}) => {

    return (
            <div className="first-div">
                <div className="mini-audio flex">
                    <div>
                        <a href="/" 
                            onMouseEnter={() => handleMouseEnter("first")}
                            onMouseLeave={handleMouseLeave}
                        >
                            <img src={(isHovered && elementHovered === "first") ? console1hover : console1} alt="console1" />
                        </a>
                        <a href="/">
                            <span>PRE-ORDER</span>
                            <article className="flex"><h4>MINI CONSOLE</h4><p>{currency.slice(0, 1)}249</p><button>SHOP NOW</button></article>
                            <p>Ideal for everyday shortcuts. Adaptable to any workflow.</p>
                        </a>   
                    </div>
                    <div>
                        <a href="/"
                            onMouseEnter={() => handleMouseEnter("second")}
                            onMouseLeave={handleMouseLeave}
                        >
                            <img src={(isHovered && elementHovered === "second") ? console2hover : console2} alt="console2" />
                        </a>
                        <a href="/">
                            <span>PRE-ORDER</span>
                            <article className="flex"><h4>AUDIO CONSOLE</h4><p>{currency.slice(0, 1)}499</p><button>SHOP NOW</button></article>
                            <p>Ideal for music & audio. Adaptable to any workflow.</p>
                        </a>
                    </div>
                </div>

                <div className="photo-video flex">
                    <div>
                        <a href="/"
                            onMouseEnter={() => handleMouseEnter("third")}
                            onMouseLeave={handleMouseLeave}
                        >
                            <img src={(isHovered && elementHovered === "third") ? console3hover : console3} alt="console3" />
                        </a>
                        <a href="/">
                            <span>PRE-ORDER</span>
                            <article className="flex"><h4>PHOTO CONSOLE</h4><p>{currency.slice(0, 1)}599</p><button>SHOP NOW</button></article>
                            <p>Ideal for photo & video. Adaptable to any workflow.</p>
                        </a>
                    </div>
                    <div>
                        <a href="/"
                            onMouseEnter={() => handleMouseEnter("fourth")}
                            onMouseLeave={handleMouseLeave}
                        >
                            <img src={(isHovered && elementHovered === "fourth") ? console4hover : console4} alt="console4" />
                        </a>
                        <a href="/">
                            <span>PRE-ORDER</span>
                            <article className="flex"><h4>VIDEO CONSOLE</h4><p>{currency.slice(0, 1)}899</p><button>SHOP NOW</button></article>
                            <p>Ideal for video & film. Adaptable to any workflow.</p>
                        </a>
                    </div>
                </div>
            </div>
    )
}
export default Consoles;
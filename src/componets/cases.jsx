
import cases5 from "../assets/images/carrying-case.webp";
import cases6 from "../assets/images/monogram-core.webp";
import cases7 from "../assets/images/slider-module.webp";
import cases8 from "../assets/images/essentials-keys.webp";
import cases9 from "../assets/images/orbiter-module.webp";
import cases10 from "../assets/images/dial-module.webp";
import cases11 from "../assets/images/console-pack-audio.webp";
import cases12 from "../assets/images/console-pack-photo.webp";
import cases13 from "../assets/images/console-pack-video.webp";
import cases14 from "../assets/images/monogram-care.webp";

import cases5hover from "../assets/images/carrying-case-hover.webp";
import cases6hover from "../assets/images/monogram-core-hover.webp";
import cases7hover from "../assets/images/slider-module-hover.webp";
import cases8hover from "../assets/images/essential-keys-hover.webp";
import cases9hover from "../assets/images/orbiter-module-hover.webp";
import cases10hover from "../assets/images/dial-module-hover.webp";
import cases14hover from "../assets/images/monogram-care-hover.webp";

const Cases = ({isHovered, elementHovered, handleMouseEnter, handleMouseLeave, currency}) => {
  
    return (
    <div className="flex third-div">
            <div>
                <a href="/"
                    onMouseEnter={() => handleMouseEnter("fifth")}
                    onMouseLeave={handleMouseLeave}
                >
                    <img src={(isHovered && elementHovered === "fifth") ? cases5hover : cases5} alt="cases5" />
                </a>
                <a href="/">
                    <span>PRE-ORDER</span>
                    <article className="flex"><h4>MONOGRAM CARRYING CASE</h4><p>{currency.slice(0, 1)}59</p><button>SHOP NOW</button></article>
                </a>
            </div>
            <div>
                <a href="/"
                    onMouseEnter={() => handleMouseEnter("sixth")}
                    onMouseLeave={handleMouseLeave}
                >
                    <img src={(isHovered && elementHovered === "sixth") ? cases6hover : cases6} alt="cases6" />
                </a>
                <a href="/">
                    <span>PRE-ORDER</span>
                    <article className="flex"><h4>MONOGRAM CORE</h4><p>{currency.slice(0, 1)}159</p><button>SHOP NOW</button></article>
                </a>
            </div>
            <div>
                <a href="/"
                    onMouseEnter={() => handleMouseEnter("seventh")}
                    onMouseLeave={handleMouseLeave}
                >
                    <img src={(isHovered && elementHovered === "seventh") ? cases7hover : cases7} alt="cases7" />
                </a>
                <a href="/">
                    <span>PRE-ORDER</span>
                    <article className="flex"><h4>SLIDER MODULE</h4><p>{currency.slice(0, 1)}159</p><button>SHOP NOW</button></article>
                </a>
            </div>
            <div>
                <a href="/"
                    onMouseEnter={() => handleMouseEnter("eighth")}
                    onMouseLeave={handleMouseLeave}
                >
                    <img src={(isHovered && elementHovered === "eighth") ? cases8hover : cases8} alt="cases8" />
                </a>
                <a href="/">
                    <span>PRE-ORDER</span>
                    <article className="flex"><h4>ESSENTIAL KEYS MODULE</h4><p>{currency.slice(0, 1)}59</p><button>SHOP NOW</button></article>
                </a>
            </div>
            <div>
                <a href="/"
                    onMouseEnter={() => handleMouseEnter("ninth")}
                    onMouseLeave={handleMouseLeave}
                >
                    <img src={(isHovered && elementHovered === "ninth") ? cases9hover : cases9} alt="cases9" />
                </a>
                <a href="/">
                    <span>PRE-ORDER</span>
                    <article className="flex"><h4>ORBITER MODULE</h4><p>{currency.slice(0, 1)}159</p><button>SHOP NOW</button></article>
                </a>
            </div>
            <div>
                <a href="/"
                    onMouseEnter={() => handleMouseEnter("tenth")}
                    onMouseLeave={handleMouseLeave}
                >
                    <img src={(isHovered && elementHovered === "tenth") ? cases10hover : cases10} alt="cases10" />
                </a>
                <a href="/">
                    <span>PRE-ORDER</span>
                    <article className="flex"><h4>DIAL MODULE</h4><p>{currency.slice(0, 1)}129</p><button>SHOP NOW</button></article>
                </a>
            </div>
            <div>
                <a href="/">
                    <img src={cases11} alt="cases11" />
                </a>
                <a href="/">
                    <article className="flex"><h4>CONSOLE PACK: AUDIO</h4><p>{currency.slice(0, 1)}29</p><button>SHOP NOW</button></article>
                </a>
            </div>
            <div>
                <a href="/">
                    <img src={cases12} alt="cases12" />
                </a>
                <a href="/">
                    <article className="flex"><h4>CONSOLE PACK: cases</h4><p>{currency.slice(0, 1)}39</p><button>SHOP NOW</button></article>
                </a>
            </div>
            <div >
                <a href="/">
                    <img src={cases13} alt="cases13" />
                </a>
                <a href="/">
                    <article className="flex"><h4>CONSOLE PACK: VIDEO</h4><p>{currency.slice(0, 1)}69</p><button>SHOP NOW</button></article>
                </a>
            </div>
            <div>
                <a href="/"
                    onMouseEnter={() => handleMouseEnter("fourteenth")}
                    onMouseLeave={handleMouseLeave}
                >
                    <img src={(isHovered && elementHovered === "fourteenth") ? cases14hover : cases14} alt="cases14" />
                </a>
                <a href="/">
                    <article className="flex"><h4>MONOGRAM CARE</h4><p>{currency.slice(0, 1)}19 - {currency.slice(0, 1)}129</p><button>SHOP NOW</button></article>
                </a>
            </div>
    </div>
    )
}

export default Cases;
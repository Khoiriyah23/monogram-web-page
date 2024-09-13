import React, {useState} from 'react';
import bundle1 from "../assets/images/bundle1.webp";
import bundle2 from "../assets/images/bundle2.webp";
import packaging8 from "../assets/images/packaging8.webp";
import packaging7 from "../assets/images/packaging7.webp";
import console7 from "../assets/images/console7.webp";
import packaging4 from "../assets/images/packaging4.webp";
import console4 from "../assets/images/console4.webp";
import case2 from "../assets/images/case2.webp"
import case1 from "../assets/images/case1.webp"
import monoConsole from "../assets/images/mono-console.webp"
import console8 from "../assets/images/console8.webp"
import packaging1 from "../assets/images/packaging1.webp";
import console1 from "../assets/images/console1.webp";
import packaging6 from "../assets/images/packaging6.webp";
import console6 from "../assets/images/console6.webp";
import packaging3 from "../assets/images/packaging3.webp";
import console3 from "../assets/images/console3.webp";
import packaging5 from "../assets/images/packaging5.webp";
import console5 from "../assets/images/console5.webp";
import packaging2 from "../assets/images/packaging2.webp";
import console2 from "../assets/images/console2.webp";
import miniBox from "../assets/images/mini-box.webp";
import miniPhoto from "../assets/images/mini-photo.webp";
import miniVideo from "../assets/images/mini-video.webp";
import care1 from "../assets/images/care1.webp";



const Main = () => {
    const [hoveredItem, setHoveredItem] = useState(null);
  
    const handleMouseEnter = (item) => setHoveredItem(item);
    const handleMouseLeave = () => setHoveredItem(null);
  
    return (
        <main>
        <section className="bgShop">
          <article>
            <h1>A CONSOLE FOR EVERY WORKFLOW</h1>
            <p>Discover the perfect console for yours.</p>
          </article>
        </section>
        
        <section className="bundles">
          <div>
            <img
              src={hoveredItem === 'bundle1' ? bundle2 : bundle1}
              alt="bundle1"
              onMouseEnter={() => handleMouseEnter('bundle1')}
              onMouseLeave={handleMouseLeave}
            />
            <article className=''>
              <div className="">
                <h1>MINI CONSOLE</h1>
                {hoveredItem === 'bundle1' ? <button>Shop now</button> : <span className="price">$249</span>}
              </div>
              <p>Ideal for everyday shortcuts. Adaptable to any workflow.</p>
            </article>
          </div>
          
          <div>
            <img
              src={hoveredItem === 'bundle2' ? packaging8 : packaging7}
              alt="bundle2"
              onMouseEnter={() => handleMouseEnter('bundle2')}
              onMouseLeave={handleMouseLeave}
            />
            <article>
              <div className="">
                <h1>AUDIO CONSOLE</h1>
                {hoveredItem === 'bundle2' ? <button>Shop now</button> : <span className="price">$499</span>}
              </div>
              <p>Ideal for music & audio. Adaptable to any workflow.</p>
            </article>
          </div>
          <div>
            <img
              src={hoveredItem === 'bundle3' ? packaging8 : packaging7}
              alt="bundle3"
              onMouseEnter={() => handleMouseEnter('bundle3')}
              onMouseLeave={handleMouseLeave}
            />
            <article>
              <div className="">
                <h1>PHOTO CONSOLE</h1>
                {hoveredItem === 'bundle3' ? <button>Shop now</button> : <span className="price">$599</span>}
              </div>
              <p>Ideal for photo & video. Adaptable to any workflow.</p>
            </article>
          </div>
          <div>
            <img
              src={hoveredItem === 'bundle4' ? packaging8 : packaging7}
              alt="bundle4"
              onMouseEnter={() => handleMouseEnter('bundle4')}
              onMouseLeave={handleMouseLeave}
            />
            <article>
              <div className="">
                <h1>VIDEO CONSOLE</h1>
                {hoveredItem === 'bundle4' ? <button>Shop now</button> : <span className="price">$899</span>}
              </div>
              <p>Ideal for video & film. Adaptable to any workflow.</p>
            </article>
          </div>
        </section>

        <section className="ownConsole">
          <article>
            <h1>Create Your Own Console</h1>
            <p>Add-on to make it perfect.</p>
          </article>
        </section>

        <section className="monogramCases">
  <div>
    <img 
      src={hoveredItem === 'case' ? case1 : case2} 
      alt="case" 
      onMouseEnter={() => handleMouseEnter('case')}
      onMouseLeave={handleMouseLeave}
    />
    <article>
      <div className="header">
        <h1>Monogram Carrying </h1>
        {hoveredItem === 'case' ? <button>Shop Now</button> : <span className="price">$59</span>}
      </div>
    </article>
  </div>
  <div>
    <img 
      src={hoveredItem === 'core' ? console1 : packaging1} 
      alt="core" 
      onMouseEnter={() => handleMouseEnter('core')}
      onMouseLeave={handleMouseLeave}
    />
    <article>
      <div className="header">
        <h1>Monogram Core</h1>
        {hoveredItem === 'core' ? <button>Shop Now</button> : <span className="price">$159</span>}
      </div>
    </article>
  </div>
  <div>
    <img 
      src={hoveredItem === 'slider' ? console6 : packaging6} 
      alt="slider" 
      onMouseEnter={() => handleMouseEnter('slider')}
      onMouseLeave={handleMouseLeave}
    />
    <article>
      <div className="header">
        <h1>Slider Module</h1>
        {hoveredItem === 'slider' ? <button>Shop Now</button> : <span className="price">$159</span>}
      </div>
    </article>
  </div>
  <div>
    <img 
      src={hoveredItem === 'key' ? console3 : packaging3} 
      alt="key" 
      onMouseEnter={() => handleMouseEnter('key')}
      onMouseLeave={handleMouseLeave}
    />
    <article>
      <div className="header">
        <h1>Essential Key Modules</h1>
        {hoveredItem === 'key' ? <button>Shop Now</button> : <span className="price">$129</span>}
      </div>
    </article>
  </div>
  <div>
    <img 
      src={hoveredItem === 'orbiter' ? console5 : packaging5} 
      alt="orbiter" 
      onMouseEnter={() => handleMouseEnter('orbiter')}
      onMouseLeave={handleMouseLeave}
    />
    <article>
      <div className="header">
        <h1>Orbiter Module</h1>
        {hoveredItem === 'orbiter' ? <button>Shop Now</button> : <span className="price">$159</span>}
      </div>
    </article>
  </div>
  <div>
    <img 
      src={hoveredItem === 'dial' ? console2 : packaging2} 
      alt="dial" 
      onMouseEnter={() => handleMouseEnter('dial')}
      onMouseLeave={handleMouseLeave}
    />
    <article>
      <div className="header">
        <h1>Dial Module</h1>
        {hoveredItem === 'dial' ? <button>Shop Now</button> : <span className="price">$129</span>}
      </div>
    </article>
  </div>
  <div>
    <img 
      src={hoveredItem === 'audio' ? miniBox : miniBox} 
      alt="audio" 
      onMouseEnter={() => handleMouseEnter('audio')}
      onMouseLeave={handleMouseLeave}
    />
    <article>
      <div className="header">
        <h1>Console Pack: Audio</h1>
        {hoveredItem === 'audio' ? <button>Shop Now</button> : <span className="price">$29</span>}
      </div>
    </article>
  </div>
  <div>
    <img 
      src={hoveredItem === 'photo' ? miniPhoto : miniPhoto} 
      alt="photo" 
      onMouseEnter={() => handleMouseEnter('photo')}
      onMouseLeave={handleMouseLeave}
    />
    <article>
      <div className="header">
        <h1>Console Pack: Photo</h1>
        {hoveredItem === 'photo' ? <button>Shop Now</button> : <span className="price">$39</span>}
      </div>
    </article>
  </div>
  <div>
    <img 
      src={hoveredItem === 'video' ? miniVideo : miniVideo} 
      alt="video" 
      onMouseEnter={() => handleMouseEnter('video')}
      onMouseLeave={handleMouseLeave}
    />
    <article>
      <div className="header">
        <h1>Console Pack: Video</h1>
        {hoveredItem === 'video' ? <button>Shop Now</button> : <span className="price">$69</span>}
      </div>
    </article>
  </div>
  <div>
    <img 
      src={hoveredItem === 'care' ? monoConsole : care1} 
      alt="care" 
      onMouseEnter={() => handleMouseEnter('care')}
      onMouseLeave={handleMouseLeave}
    />
    <article>
      <div className="header">
        <h1>Monogram Care</h1>
        {hoveredItem === 'care' ? <button>Shop Now</button> : <span className="price">$19-$129</span>}
      </div>
    </article>
  </div>
</section>


      </main>
    )
}

export default Main;
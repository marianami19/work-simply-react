import React from "react";
import "../styles/hero.scss";
import Img from '../images/43079.jpg'; // Importing the image

const Hero = () => {
  // const [menuActive, setMenuActive] = useState(false);
  // const [darkMode, setDarkMode] = useState(false);

  // const toggleMenu = () => {
  //   setMenuActive(!menuActive);
  // };

  // const toggleDarkMode = () => {
  //   setDarkMode(!darkMode);
  // };

  return (
    <div>

      <main className="main">
        <section className="section banner banner-section">
          <div className="container banner-column">
            {/* <img
              className="banner-image"
              src="https://i.ibb.co/sVqYmS2/Illustration.png"
              alt="Illustration"
            /> */}
            <img className="banner-image"   alt="Illustration" height="" src={Img}/>
            <div className="banner-inner ">
              <h1 className="heading-xl text-start">Connecting business leaders with top industry talent</h1>
              <p className="paragraph">
              From customer service to tech support, our tailored solutions streamline processes, reduce costs, and boost growth. Experience our boutique, consultative approach and see the difference.
              </p>
              {/* <button className="btn btn-darken btn-inline">
                Get Started<i className="bx bx-right-arrow-alt"></i>
              </button> */}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Hero;

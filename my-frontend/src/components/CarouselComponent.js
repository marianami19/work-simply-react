import React, { useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import ScrollMagic from "scrollmagic";
import { TweenMax, Power1 } from "gsap";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../styles/carouselStyles.scss"; // Import your SCSS styles here

const CarouselComponent = () => {
  useEffect(() => {
    const scrollController = new ScrollMagic.Controller();

    // Add scroll animations for text and images
    document.querySelectorAll(".slide1 img").forEach((img) => {
      new ScrollMagic.Scene({
        triggerElement: img,
        triggerHook: 1,
      })
        .setTween(TweenMax.from(img, 1, { x: 50, opacity: 0, ease: Power1.easeOut, delay: 0.5 }))
        .addTo(scrollController);
    });

    document.querySelectorAll("#first-p").forEach((p) => {
      new ScrollMagic.Scene({
        triggerElement: p,
        triggerHook: 1,
      })
        .setTween(TweenMax.from(p, 1, { scale: 0, ease: Power1.easeIn, delay: 1 }))
        .addTo(scrollController);
    });
  }, []);

  const options = {
    items: 1,
    autoplay: true,
    loop: true,
    nav: false,
    dots: true,
    margin: 10,
    smartSpeed: 800,
    mouseDrag: true,
  };

  return (
    <section>
      <div className="h-100vh slider-wrapper d-xl-flex align-items-center">
        <OwlCarousel className="owl-carousel main-carousel" {...options}>
          {/* Slide 1 */}
          <div className="item slide1">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                  <h2 className="pl-3 pr-3 text-left">
                    Steer Your <br />
                    <span>Vision</span>
                  </h2>
                  <div className="slider-img d-block d-sm-none">
                    <img
                      alt="Steer Your Vision"
                      className="img-fluid"
                      height="400px"
                      src="https://finbyz.tech/files/steer-your-vision.svg"
                      title="Steer Your Vision"
                    />
                  </div>
                  <p className="p-3">
                    We believe technology can be the light house which you can use to navigate towards your goals...
                  </p>
                  <div className="text-left pl-4 pr-4">
                    <a href="https://finbyz.tech/steer-your-vision">
                      <button className="btn finbyz-button">View More</button>
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-12 d-flex align-items-center justify-content-center">
                  <div className="slider-img d-none d-sm-flex justify-content-center">
                    <img
                      alt="Steer Your Vision"
                      className="img-fluid"
                      height="400px"
                      src="https://finbyz.tech/files/steer-your-vision.svg"
                      title="Steer Your Vision"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Repeat similar structure for other slides */}
          <div className="item slide1">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                  <h2 className="pl-3 pr-3 text-left">
                    ERP <br />
                    <span>Implementation</span>
                  </h2>
                  <div className="slider-img d-block d-sm-none">
                    <img
                      alt="ERP Implementation"
                      className="img-fluid"
                      height="400px"
                      src="https://finbyz.tech/files/erp-implements.svg"
                      title="ERP Implementation"
                    />
                  </div>
                  <p className="p-3">
                    We help you adapt to digital transformation by suggesting the best ERP software for your business...
                  </p>
                  <div className="text-left pl-4 pr-4">
                    <a href="https://finbyz.tech/erp-software">
                      <button className="btn finbyz-button">View More</button>
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-12 d-flex align-items-center justify-content-center">
                  <div className="slider-img d-none d-sm-flex justify-content-center">
                    <img
                      alt="ERP Implementation"
                      className="img-fluid"
                      height="400px"
                      src="https://finbyz.tech/files/erp-implements.svg"
                      title="ERP Implementation"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Add more slides as necessary */}
        </OwlCarousel>
      </div>
    </section>
  );
};

export default CarouselComponent;

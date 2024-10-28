import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/carouselStyles.scss'; // Ensure you have this SCSS file for styling
const PricingPlan = () => {
  return (
    <div className="pricing-plan py-5">
      <section id="pricing" className="pricing-content section-padding mb-5">
        <div className="container">
          <div className="section-title text-center mb-5">
            <h1>Pricing Plan</h1>
            {/* <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p> */}
          </div>
          <div className="row ">

            {/* Original Section 1: Starter */}
            <div className="col-lg-4 col-sm-4 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.1s" data-wow-offset="0">
              <div className="single-pricing">
                <div className="price-head c1" style={{ backgroundColor: '#E0E0E0' }}>
                  <h2 className='c1'>Basic</h2>
                </div>
                <h1 className="price">$</h1>
                <h5>Office Space, IT Support, Account Executive</h5>
                <ul>

                  <li>Dedicated account executive</li>
                  <li>Recruiting support</li>
                  <li>	Top talent acquisition
                  </li>
                  <li>	Top talent acquisition
                  </li>
                  <li>	All-inclusive model
                  </li>
                  <li>	Dedicated office space
                  </li>
                  <li>	Computer security and IT support
                  </li>
                </ul>
                {/* <a href="#">Get started</a> */}
              </div>
            </div>

            {/* Original Section 2: Popular */}
            <div className="col-lg-4 col-sm-4 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
              <div className="single-pricing">
                <div className="price-head " style={{ backgroundColor: '#ADD8E6' }}>
                  <h2 className='c2'>Premium</h2>
                </div>
                <h1 className="price">$$</h1>
                <h5>Consulting Team, Virtual Assistants</h5>
                <ul>
                  <li>Includes all Basic features</li>
                  <li>16 consulting hours per month</li>
                  <li>Dedicated consulting team</li>
                  <li>Minimum of 3 virtual assistants required</li>
                </ul>
                {/* <a href="#">Get started</a> */}
              </div>
            </div>

            {/* Original Section 3: Advance */}
            <div className="col-lg-4 col-sm-4 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s" data-wow-offset="0">
              <div className="single-pricing">
                {/* <div><span className="price-label">Premium</span></div> */}
                <div className="price-head " style={{ backgroundColor: '#F0F8FF' }}>
                  <h2 className='c3'>Enterprise</h2>
                </div>
                <h1 className="price">$$$</h1>
                <h5>Unlimited Access, Custom Consultation</h5>
                <ul>
                

                  <li>Includes all Premium features</li>
                  <li>Unlimited consulting hours</li>
                  <li>Top-tier availability</li>
                  <li>Pricing negotiable based on operation size and growth potential</li>
                  <li>Minimum assistant levels required</li>
                </ul>
                {/* <a href="#">Get started</a> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPlan;

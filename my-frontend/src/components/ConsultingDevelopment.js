import React from 'react';
import '../styles/ConsultingDevelopment.scss';
import Img from '../images/pexels-alex-green-5699475.jpg'; 
import Img2 from '../images/pexels-fauxels-3184419.jpg'; 

const ConsultingDevelopment = () => {
  return (
    <div className="consulting-development">
      <section className="consulting-section  d-sm-flex row-sm container p-2">
        <div className='col-md-5'>
          <h2>Consulting & <br />Development</h2>
          <div className="section-content ">
            <h3>Expert Consultation</h3>
            <ul>
              <li>
                <strong>Strategic Mastery:</strong> Unlock innovative strategies for transforming your virtual operations into a seamless, efficient powerhouse.
              </li>
              <li>
                <strong>Process Perfection:</strong> Streamline your business with precision—uncover hidden inefficiencies and turn them into opportunities for growth.
              </li>
            </ul>
          </div>
        </div>
        <div className='col-md-2'>

        </div>
        <div className='col-md-5'>
          <img alt="Expert Consultation" className="img-fluid" height="" src={Img}
          />
        </div>
      </section>

      <section className="implementation-section d-sm-flex row-sm container">
        <div className='col-md-5'>
          <h2>Implementation &<br /> Execution</h2>
          <div className="section-content">
            <h3>Seamless Execution
            </h3>
            <ul>
              <li>

                <li><strong>Effortless Integration:</strong>Experience the smooth, tailored integration of our services into your current workflow without a hitch.</li>
              </li>
              <li>

                <strong>Continuous Care:</strong> Enjoy ongoing support with our proactive, hands-on approach to adapt as your business evolves and thrives.
              </li>
            </ul>
          </div>
        </div>
        <div className='col-md-2'>

        </div>
        <div className='col-md-5'>
          <img alt="Expert Consultation" className="img-fluid" height="" src={Img2}
          />
        </div>
      </section>
    </div>
  );
};

export default ConsultingDevelopment;

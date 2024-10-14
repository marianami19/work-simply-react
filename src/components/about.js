import React from 'react';
import Img from '../images/work-simply-logo-svg.svg'; // Importing the image
const AboutUs = () => {
  return (
    <div className="container my-5">
      <section className="py-5">
	<div className="container">
		<div className="row">
			<div className="col-md-5">
				<span className="text-muted">Our Story</span>
				<h2 className="display-5 fw-bold">About Us</h2>
			</div>
			<div className="col-md-6 offset-md-1">
				<p className="lead">At Work-Simply, we turn complex challenges into straightforward solutions! Founded by two passionate entrepreneurs, our mission is to empower businesses to soar to new heights.</p>
				<p className="lead">With years of experience in building and managing diverse teams, we are your trusted partners in business process outsourcing and virtual assistance.</p>
			</div>
		</div>
	</div>
</section>
  <section className="py-2">
	<div className="container-fluid">
		<div className="row justify-content-center">
			<div className="col-md-10">
				<div className="text-center">
					<p className="lead"> We connect business leaders with top industry talent to tackle workplace challenges. From customer service to tech support, our boutique approach means we customize solutions just for you.</p>
				</div>
			</div>
		</div>
	</div>
</section>
<section 
  className="bg-light text-center py-5 position-relative" 
  style={{ 
    position: "relative",
    overflow: "hidden"
  }}
>
  {/* Background image with blur using ::before */}
  <div 
    style={{
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundImage: "url('https://images.pexels.com/photos/7652394/pexels-photo-7652394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      filter: "blur(13px)",
    //   zIndex: -1 // Pushes the background behind the text
    }}
  ></div>

  <div className="container pb-5 pt-5 position-relative">
    <div className="pb-5 pt-5 row">
      <div className="col-lg-9 col-xl-8 ms-auto me-auto pb-5 pt-5 text-white">
        <h1 className="display-3 fw-bold mb-3">Our goal?</h1>
        <p className="lead mb-4">
          Simplifying processes, reducing costs, and driving growth—so you can focus on what matters most!
        </p>
      </div>
    </div>
  </div>
</section>


<section className="py-5">
	<div className="container">
		<div className="row gx-5">
			<div className="col-md-6">
				<div className="lead text-center text-md-start">
					<p> Founded by two serial entrepreneurs with a passion for business growth, our mission is to help companies reach new heights through expert business process outsourcing and virtual assistance. Our founders remain actively involved, ensuring that our innovative strategies and hands-on approach continue to create opportunities for success. With extensive experience in building and managing teams ranging from 5 to over 1,000, we bring a wealth of knowledge in consulting for both international and US-based teams. </p>
				</div>
			</div>
			<div className="col-md-6">
				<div className="lead text-center text-md-start">
					<p>  Our mission is clear: we connect business leaders with top industry talent to deliver lasting solutions for workplace challenges. From customer service and healthcare to technology and back-office support, Work-Simply provides comprehensive services tailored to your needs. What sets us apart is our boutique, consultative approach—viewing each problem from a fresh perspective.</p>
				</div>
			</div>
		</div>
	</div>
</section>
 
    </div>
  );
};

export default AboutUs;

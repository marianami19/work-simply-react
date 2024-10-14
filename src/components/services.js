import React, { useState } from 'react';
import '../styles/services.scss'; // Ensure you have this SCSS file for styling

const servicesData = {
  "Data Management": [
    { 
      title: "Manual Data Entry", 
      icon: "📋", 
      description: "Manual data processing for high accuracy and detailed input." 
    },
    { 
      title: "Automated Data Entry", 
      icon: "⚙️", 
      description: "Streamline data entry using automation tools for efficiency." 
    },
    { 
      title: "Data Validation & Management", 
      icon: "✅", 
      description: "Ensuring accuracy and managing large datasets for reliable insights." 
    },
  ],
  "Customer Support": [
    { 
      title: "Customer Service Support", 
      icon: "📞", 
      description: "Handling customer inquiries, complaints, and support requests professionally." 
    },
    { 
      title: "Telemarketing & Sales Support", 
      icon: "📈", 
      description: "Outbound calling for lead generation, sales support, and customer outreach." 
    },
    { 
      title: "Technical Support & Helpdesk Services", 
      icon: "🛠️", 
      description: "Providing technical support for clients' products or services to resolve issues." 
    },
  ],
  "Financial Services": [
    { 
      title: "Bookkeeping", 
      icon: "📊", 
      description: "Daily financial record-keeping to maintain accurate accounts." 
    },
    { 
      title: "Financial Reporting", 
      icon: "📝", 
      description: "Preparation of financial statements and reports for business insights." 
    },
    { 
      title: "Payroll Management", 
      icon: "💵", 
      description: "Managing employee payments, benefits, and payroll processes." 
    },
    { 
      title: "Accounts Receivable & Payable", 
      icon: "📥", 
      description: "Handling incoming and outgoing payments for smooth financial operations." 
    },
  ],
  "Business Development": [
    { 
      title: "Roles & Expertise", 
      icon: "👔", 
      description: "Providing roles like Business Development Manager, Market Research Analyst, and more." 
    },
    { 
      title: "Strategy Development", 
      icon: "📈", 
      description: "Crafting tailored business strategies to achieve client goals." 
    },
    { 
      title: "Execution", 
      icon: "🚀", 
      description: "Implementing and monitoring business development plans for success." 
    },
  ],
  "Legal Services": [
    { 
      title: "Document Preparation & Review", 
      icon: "📄", 
      description: "Drafting and reviewing legal documents to ensure accuracy and compliance." 
    },
    { 
      title: "Contract Management", 
      icon: "📝", 
      description: "Overseeing contract lifecycle management and ensuring compliance with terms." 
    },
    { 
      title: "Legal Research & Compliance", 
      icon: "🔍", 
      description: "Conducting legal research and ensuring adherence to regulatory requirements." 
    },
  ],
  "Technical Services": [
    { 
      title: "IT Support & Infrastructure Management", 
      icon: "💻", 
      description: "Managing and maintaining IT systems for businesses to ensure smooth operations." 
    },
    { 
      title: "Network Setup & Maintenance", 
      icon: '💻', 
      description: "Setting up and maintaining networks for seamless connectivity." 
    },
    { 
      title: "Custom Application Design & Development", 
      icon: "🖥️", 
      description: "Building custom software solutions tailored to client needs." 
    },
  ],
};

const Services = () => {
  const [activeTab, setActiveTab] = useState("Data Management");

  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <div className="tabs row">
        {Object.keys(servicesData).map((tab) => (
          <button
            key={tab}
            className={`tab  col-md-3 ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      {/* <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
        {Object.keys(servicesData).map((tab) => (
          <li className="nav-item" key={tab} role="presentation">
            <button
              className={`nav-link ${activeTab === tab ? 'active' : ''}`}
              id={`pills-${tab}-tab`}
              data-bs-toggle="pill"
              type="button"
              role="tab"
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          </li>
        ))}
      </ul> */}
      <div className="container">
      <div className="gradient-cards">

        {servicesData[activeTab].map((service) => (
          // <div className="service-item" key={service.title}>
          //   <span className="service-icon">{service.icon}</span>
          //   <h4>{service.title}</h4>
          // </div>
            <div className="card">
              <div className="container-card bg-green-box">
                {service.icon}
                <p className="card-title">{service.title}</p>
                <p className="card-description">{service.description}</p>
              </div>
            </div>
        ))}


      </div>

 </div>

{/* <main mv-app="tabs"
		mv-bar="no-login"
		mv-storage="https://github.com/DmitrySharabin/mavo-tabs-widget">
	<h2 property="headline">Headline</h2>
	<section mv-list className="tabs" style={{count: '[count(tab)]'}}>
		<details property="tab"
					mv-list-item
					open="[open]"
					mv-action="set(open.$all, false), set(open, true)">
			<meta property="open" />
			
			<summary property="title">
				<img className="icon"
					  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1457119/undraw_research.svg"
					  mv-attr-src="image" alt="Icon for the [text] tab" />
				<span property="text">Tab name</span>
			</summary>
			
			<section property="content">
				<h3 property="headline">Tab headline</h3>
				<img property="image"
					  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1457119/undraw_research.svg"
					  alt="Illustration for [headline]" />
				<p property="text">Tab content</p>
				<a property="url" href="#">
					<span property="destination">Call to action</span>
				</a>
			</section>		
		</details>
	</section>
</main> */}
{/* <link href="https://fonts.googleapis.com/css?family=Work+Sans:400,600,700&display=swap" rel="stylesheet"> */}
{/* <div className="layout">
  <input name="nav" type="radio" className="nav home-radio" id="home" checked="checked" />
  <div className="page home-page">
    <div className="page-contents">
      <h1>Home</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas voluptates dolore id aspernatur odit minus quidem deleniti ab rerum exercitationem dolores neque officiis explicabo possimus blanditiis sed, voluptatem ut. Ab?</p>
      <p><label for="about">Learn more</label></p>
    </div>
  </div>
  <label className="nav" for="home">
    <span>
      <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" className="css-i6dzq1"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
      Home
    </span>
  </label>

  <input name="nav" type="radio" className="about-radio" id="about" />
  <div className="page about-page">
    <div className="page-contents">
      <h1>About</h1>
      <p>Amet consectetur adipisicing elit. Sed ipsam ad exercitationem, quo quae ullam, quidem laudantium corporis quis minima debitis nesciunt repellat. Quos dolore ex quis voluptas, minus ut?</p>
    </div>
  </div>
  <label className="nav" for="about">
    <span>
    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" className="css-i6dzq1"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12" y2="17"></line></svg>
    About
      </span>
    </label>

  <input name="nav" type="radio" className="contact-radio" id="contact" />
  <div className="page contact-page">
    <div className="page-contents">
      <h1>Contact</h1>
      <p>Eaque accusamus magnam error unde nam, atque provident omnis fugiat quam necessitatibus vel nulla sed quibusdam fuga veritatis assumenda alias quidem asperiores?</p>
      <p><a href="#">Get in touch</a></p>
    </div>
  </div>
  <label className="nav" for="contact">
    <span>
    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" className="css-i6dzq1"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
    Contact
      </span>
    
  </label>
</div>
 */}





{/* <h1>Pure CSS Tabs With Indicator</h1>
<div className="tabs">
  
  <input type="radio" id="tab1" name="tab-control" checked/>
  <input type="radio" id="tab2" name="tab-control"/>
  <input type="radio" id="tab3" name="tab-control"/>  
  <input type="radio" id="tab4" name="tab-control"/>
  <input type="radio" id="tab5" name="tab-control"/>
  <ul>
    <li title="Features"><label for="tab1" role="button"><svg viewBox="0 0 24 24"><path d="M14,2A8,8 0 0,0 6,10A8,8 0 0,0 14,18A8,8 0 0,0 22,10H20C20,13.32 17.32,16 14,16A6,6 0 0,1 8,10A6,6 0 0,1 14,4C14.43,4 14.86,4.05 15.27,4.14L16.88,2.54C15.96,2.18 15,2 14,2M20.59,3.58L14,10.17L11.62,7.79L10.21,9.21L14,13L22,5M4.93,5.82C3.08,7.34 2,9.61 2,12A8,8 0 0,0 10,20C10.64,20 11.27,19.92 11.88,19.77C10.12,19.38 8.5,18.5 7.17,17.29C5.22,16.25 4,14.21 4,12C4,11.7 4.03,11.41 4.07,11.11C4.03,10.74 4,10.37 4,10C4,8.56 4.32,7.13 4.93,5.82Z"/>
</svg><br/><span>Features</span></label></li>
    <li title="Delivery Contents"><label for="tab2" role="button"><svg viewBox="0 0 24 24"><path d="M2,10.96C1.5,10.68 1.35,10.07 1.63,9.59L3.13,7C3.24,6.8 3.41,6.66 3.6,6.58L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.66,6.72 20.82,6.88 20.91,7.08L22.36,9.6C22.64,10.08 22.47,10.69 22,10.96L21,11.54V16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V10.96C2.7,11.13 2.32,11.14 2,10.96M12,4.15V4.15L12,10.85V10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V12.69L14,15.59C13.67,15.77 13.3,15.76 13,15.6V19.29L19,15.91M13.85,13.36L20.13,9.73L19.55,8.72L13.27,12.35L13.85,13.36Z" />
</svg><br/><span>Delivery Contents</span></label></li>
    <li title="Shipping"><label for="tab3" role="button"><svg viewBox="0 0 24 24">
    <path d="M3,4A2,2 0 0,0 1,6V17H3A3,3 0 0,0 6,20A3,3 0 0,0 9,17H15A3,3 0 0,0 18,20A3,3 0 0,0 21,17H23V12L20,8H17V4M10,6L14,10L10,14V11H4V9H10M17,9.5H19.5L21.47,12H17M6,15.5A1.5,1.5 0 0,1 7.5,17A1.5,1.5 0 0,1 6,18.5A1.5,1.5 0 0,1 4.5,17A1.5,1.5 0 0,1 6,15.5M18,15.5A1.5,1.5 0 0,1 19.5,17A1.5,1.5 0 0,1 18,18.5A1.5,1.5 0 0,1 16.5,17A1.5,1.5 0 0,1 18,15.5Z" />
</svg><br/><span>Shipping</span></label></li>   
 <li title="Returns"><label for="tab4" role="button"><svg viewBox="0 0 24 24">
    <path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z" />
</svg><br/><span>Returns</span></label></li>
 <li title="Vleh"><label for="tab5" role="button"><svg viewBox="0 0 24 24">
    <path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z" />
</svg><br/><span>Returns</span></label></li>
  </ul>
  
  <div className="slider"><div className="indicator"></div></div>
  <div className="content">
    <section>
      <h2>Features</h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea dolorem sequi, quo tempore in eum obcaecati atque quibusdam officiis est dolorum minima deleniti ratione molestias numquam. Voluptas voluptates quibusdam cum?</section>
        <section>
          <h2>Delivery Contents</h2>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem quas adipisci a accusantium eius ut voluptatibus ad impedit nulla, ipsa qui. Quasi temporibus eos commodi aliquid impedit amet, similique nulla.</section>
        <section>
          <h2>Shipping</h2>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam nemo ducimus eius, magnam error quisquam sunt voluptate labore, excepturi numquam! Alias libero optio sed harum debitis! Veniam, quia in eum.</section>
    <section>
          <h2>Returns</h2>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa dicta vero rerum? Eaque repudiandae architecto libero reprehenderit aliquam magnam ratione quidem? Nobis doloribus molestiae enim deserunt necessitatibus eaque quidem incidunt.</section>
    <section>
          <h2>Tr again</h2>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa dicta vero rerum? Eaque repudiandae architecto libero reprehenderit aliquam magnam ratione quidem? Nobis doloribus molestiae enim deserunt necessitatibus eaque quidem incidunt.</section>
  </div>
</div> */}

    </div>
  );
};

export default Services;

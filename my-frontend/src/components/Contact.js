import React, { useRef } from 'react';
import Img from '../images/Work-Simply Logo Facebook Cover.jpg'; // Importing the image

const Contact = () => {
  const formRef = useRef(); // Create a ref for the main form
  const callbackRef = useRef(); // Create a ref for the callback form

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default submission for the contact form

    const formData = new FormData(formRef.current); // Get contact form data
    const data = {
      recipients: ['recipient@example.com'], // Replace with the actual recipient email(s)
      subject: formData.get('subject'),
      text: formData.get('message'),
    };

    try {
      const response = await fetch('https://work-simply-react-production.up.railway.app/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        alert(result.message); // Success message
        formRef.current.reset(); // Reset the form
      } else {
        alert(result.errors ? result.errors.map(err => err.msg).join(', ') : 'Failed to send email.'); // Error message
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error sending the message. Please try again.');
    }
  };

  const handleCallbackSubmit = async (e) => {
    e.preventDefault(); // Prevent default submission for the callback form

    const callbackData = {
      telephone: callbackRef.current.querySelector('input').value, // Get telephone number from input
    };

    try {
      const response = await fetch('https://work-simply-react-production.up.railway.app/api/request-callback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(callbackData),
      });

      const result = await response.json();

      if (response.ok) {
        alert(result.message); // Success message for callback
        callbackRef.current.reset(); // Reset the callback form
      } else {
        alert('Failed to request callback.'); // Error message
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error requesting callback. Please try again.');
    }
  };

  return (
    <div>
      <img 
        src={Img}
        alt="Background"
        style={{
          width: "100%",
          height: "20vh",
          objectFit: "cover",
        }}
      />

      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center text-center mb-3">
            <div className="col-lg-8 col-xxl-7">
              <span className="text-muted">Let's Talk</span>
              <h2 className="display-5 fw-bold mb-3">Contact Us</h2>
            </div>
          </div>
          <div className="row justify-content-between">
            <div className="col-lg-6">
              <h5 className="fw-semibold mb-3">Send us a message</h5>
              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <input className="form-control bg-light" placeholder="First name" type="text" name="first_name" required />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <input className="form-control bg-light" placeholder="Last name" type="text" name="last_name" required />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="mb-3">
                      <input className="form-control bg-light" placeholder="Email address" type="email" name="email" required />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="mb-3">
                      <input className="form-control bg-light" placeholder="Subject" type="text" name="subject" required />
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <textarea className="form-control bg-light" placeholder="Your message" rows="4" name="message" required></textarea>
                </div>
                <div className="col-md-4 ms-auto">
                  <div className="d-grid">
                    <button className="btn" style={{
                      backgroundColor: "#59B4C3",
                      color: "white",
                      fontWeight: "600"
                    }} type="submit">Send message</button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-5 mt-5 mt-lg-0">
              <div className="mb-4">
                <h5>Address</h5>
                <p>123 Mountain View, California, United States.</p>
              </div>
              <div className="mb-4">
                <h5>Phone</h5>
                <p>+1 123-456-7890</p>
              </div>
              <div className="mb-4">
                <h5>Email</h5>
                <p>hello@yourdomain.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="display-5 fw-bold">Request a Callback</h2>
              <form ref={callbackRef} onSubmit={handleCallbackSubmit} className="d-flex pt-4 me-lg-5">
                <input aria-label="input" className="form-control me-2" placeholder="Telephone Number" type="tel" required />
                <button className="btn text-nowrap" type="submit" style={{
                  backgroundColor: "#59B4C3",
                  color: 'white',
                  fontWeight: "600"
                }}>Call Me</button>
              </form>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0">
              <p>Ready to elevate your business? Schedule a consultation today or request a custom quote tailored to your needs!</p>
              <div className="d-lg-flex mt-3 mt-lg-5">
                <a className="text-decoration-none me-4 fs-5 fw-bold" href="tel:+1(234)%20567-89-01" style={{
                  color: "#59B4C3",
                }}>+1(234) 567-89-10</a>
                <a className="text-decoration-none fs-5 fw-bold" href="mailto:info@collector.com" style={{
                  color: "#59B4C3",
                }}>hello@yourdomain.com</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

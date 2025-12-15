"use client";
import { useState } from "react";
import axios from "axios";

export default function Contact2() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/contact", formData);
      alert(res.data);
      setFormData({name:"", phone:"", email:"", subject:"", message:""}); // Clear form
    } catch (err) {
      console.error(err);
      alert("Error submitting form");
    }
  };

  return (
    <section id="contact" className="section-contact-2 position-relative pb-60 overflow-hidden">
      <div className="container position-relative z-1">
        <div className="row align-items-center">
          <div className="col-lg-7 pb-5 pb-lg-0">
            <div className="position-relative">
              <div className="position-relative z-2">
                <h3 className="text-primary-2 mb-3">Let’s connect</h3>
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <input type="text" className="form-control bg-3 border border-1 rounded-3" name="name" placeholder="Your name" value={formData.name} onChange={handleChange} />
                    </div>
                    <div className="col-md-6">
                      <input type="text" className="form-control bg-3 border border-1 rounded-3" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
                    </div>
                    <div className="col-md-6">
                      <input type="text" className="form-control bg-3 border border-1 rounded-3" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                    </div>
                    <div className="col-md-6">
                      <input type="text" className="form-control bg-3 border border-1 rounded-3" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} />
                    </div>
                    <div className="col-12">
                      <textarea className="form-control bg-3 border border-1 rounded-3" name="message" placeholder="Message" value={formData.message} onChange={handleChange} />
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-primary-2 rounded-2">
                        Send Message
                        <i className="ri-arrow-right-up-line" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="z-0 bg-primary-dark rectangle-bg z-1 rounded-3" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import Subfooter from './Subfooter';
import Footer from './Footer';
import { NavLink } from "react-router-dom";
const Contact =()=>{
    return(
        <>
       
       
       <div className="container" style={{maxWidth:"1100px"}}>
  <h1 className="card-text mt-5 mb-5 text-center">Feel Free To Contact Us</h1>
  <iframe
    className="ratio ratio-1x1"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7377.983645830566!2d76.75547897247948!3d30.719567091745127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fedb31e8ed0a9%3A0x8141001a035f4071!2sSector%2034%2C%20Chandigarh!5e1!3m2!1sen!2sin!4v1731765906237!5m2!1sen!2sin"
    width={1000}
    height={500}
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
  <h2 className="card-text fs-3 mt-5 mb-5  mx-auto" style={{maxWidth:"900px"}}>
    Lorem ipsum Deserunt est dolore Ut Excepteur nulla occaecat magna occaecat
    Excepteur nisi esse veniam dolor consectetur minim qui nisi esse deserunt
    commodo ea enim ullamco non voluptate consectetur minim aliquip Ut
    incididunt amet ut cupidatat.
  </h2>
  <p className="card-text mb-5 fs-5 mx-auto"  style={{maxWidth:"900px"}}>
    Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat nostrud
    cupidatat dolor sunt sint sit nisi est eu exercitation incididunt
    adipisicing veniam velit id fugiat enim mollit amet anim veniam dolor dolor
    irure velit commodo cillum sit nulla ullamco magna amet magna cupidatat qui
    labore cillum sit in tempor veniam consequat non laborum adipisicing aliqua
    ea nisi sint ut quis proident ullamco ut dolore culpa occaecat ut laboris in
    sit minim cupidatat ut dolor voluptate enim veniam consequat occaecat fugiat
    in adipisicing in amet Ut nulla nisi non ut enim aliqua laborum mollit quis
    nostrud sed sed.
  </p>
  <div className="row">
    <div className="col-lg-6 text-center mb-5">
      <h2 className="card-title mb-3">Where to Find Us</h2>
      <span>1600 Amphitheatre Parkway</span>
      <br />
      <span>Mountain View, CA</span>
      <p>94043 US</p>
    </div>
    <div className="col-lg-6 text-center">
      <h2 className="card-title mb-3">Contact Info</h2>
      <span>contact@philosophywebsite.com</span>
      <br />
      <span>info@philosophywebsite.com</span>
      <p>Phone: (+1) 123 456</p>
    </div>
  </div>
  <div className="container mt-5">
    <h2 className="card-title mb-5">Say Hello</h2>
    <input
      type="text"
      className="form-control shadow-none bg-transparent"
      id="formGroupExampleInput"
      placeholder="Your Name"
    />
    <hr className="border border-dark border-1 opacity-50 mb-5" />
    <input
      type="text"
      className="form-control shadow-none bg-transparent"
      id="formGroupExampleInput"
      placeholder="Your Email"
    />
    <hr className="border border-dark border-1 opacity-50 mb-5" />
    <input
      type="text"
      className="form-control shadow-none bg-transparent"
      id="formGroupExampleInput"
      placeholder="Website"
    />
    <hr className="border border-dark border-1 opacity-50 mb-5" />
    <textarea
      className="form-control  shadow-none bg-transparent"
      id="exampleFormControlTextarea1"
      rows={3}
      placeholder="enter your text"
      defaultValue={""}
    />
    <hr className="border border-dark border-1 opacity-50 mb-5" />
    <div className="d-grid gap-2 mb-5">
      <button className="btn btn-dark mb-5" type="button">
        Send
      </button>
    </div>
  </div>
</div>


<Subfooter/>
<Footer/>
        </>
    
    )
}
export default Contact
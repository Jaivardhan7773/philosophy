import React from "react";
const Footer = () => {
  return (
    <>
      <div className="footerbackground ">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 footerlinkone text-center col-md-2">
              <h5 className="card-title mb-5 mt-5 text-light ">QUICK LINKS</h5>
              <ul>
                <li><a href="" className="text-decoration-none text-light">Home</a></li>
                <li><a href="" className="text-decoration-none text-light">Blog</a></li>
                <li><a href="" className="text-decoration-none text-light">Styles</a></li>
                <li><a href="" className="text-decoration-none text-light">About</a></li>
                <li><a href="" className="text-decoration-none text-light">Contact</a></li>
                <li><a href="" className="text-decoration-none text-light">Privacy Policy</a></li>
              </ul>
            </div>
            <div className="col-lg-2 footerlinktwo text-center col-md-2">
              <h5 className="card-title mb-5 mt-5 text-light">MY WORKS</h5>
              <ul>
                <li><a href="https://aizenx.netlify.app/" target="_blank" className="text-decoration-none text-light">Aizen X</a></li>
                <li><a href="https://speedtalk.netlify.app/" target="_blank" className="text-decoration-none text-light">SpeedTalk </a></li>
                <li><a href="https://jaivardhan.vercel.app/" target="_blank" className="text-decoration-none text-light">My Portfolio</a></li>
                <li><a href="https://astrajay.netlify.app/" target="_blank" className="text-decoration-none text-light">Astra Jay</a></li>
                <li><a href="#0" className="text-decoration-none text-light">Philosophy</a></li>
                <li><a href="https://github.com/Jaivardhan7773" target="_blank" className="text-decoration-none text-light">Ongoing</a></li>
              </ul>
            </div>
            <div className="col-lg-2 footerlinkthree text-center col-md-2">
              <h5 className="card-title mb-5 mt-5 text-light ">SOCIAL</h5>
              <ul>

                <li><a href="https://www.instagram.com/jaivardhan7773_/" target="_blank" className="text-decoration-none text-light">Instagram</a></li>
                <li><a href="https://jaivardhan.vercel.app" target="_blank" className="text-decoration-none text-light">Portfolio</a></li>
                <li><a href="https://github.com/Jaivardhan7773" target="_blank" className="text-decoration-none text-light">Github</a></li>
                <li><a href="mailto:jaivardhansinghrathore17@gmail.com" target="_blank" className="text-decoration-none text-light">Email</a></li>
                <li><a href="https://www.linkedin.com/in/jaivardhan7773" target="_blank" className="text-decoration-none text-light">LinkedIn</a></li>
              </ul>
            </div>
            <div className="col-lg-5 text-lg-start col-md-8 text-sm-center footerlinkfour">
              <h5 className="card-title mb-5 mt-5 text-light">ABOUT ME</h5>
              <p className="card-text text-light fs-4">
                I'm Jaivardhan — a full-stack web developer with a passion for building sleek,
                responsive user interfaces. This is the first UI I ever created using React and Bootstrap,
                and it remains one of my proudest works. Every detail here reflects my dedication
                to design, structure, and user experience.
              </p>
              <div className="row d-flex  justify-content-center"><input type="email" value="" name="EMAIL" className="email " id="" placeholder="Email Address" required="" fdprocessedid="spwktv" autocomplete="off" />
                <button type="button" className=" sendbtn">SEND</button></div>
            </div>
          </div>

          <p className="text-start text-light mt-5 mb-5">© Copyright Philosophy 2025 <span className="text-secondary"> | </span> Jay Vardhan Rathore</p>

        </div></div>
    </>)
}
export default Footer;
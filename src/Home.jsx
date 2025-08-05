import React from "react";

const Home = () => {
  return (
    <>
      <div className="back bg-dark">
        <div className="container pt-2 mb-5">
          <div className="row d-flex mainrow">
            <div className="col-lg-8 back">
              <div className="carousel-inner">
                <div className="carousel-item active  mainone"><div style={{ overflow: "hidden" }}>
                  <img src="https://cdn.pixabay.com/photo/2023/09/28/20/16/man-8282467_1280.jpg" className="img-fluid w-100 carmainimage mb-2 mt-1" alt="..." /></div>
                  <div className="carousel-caption text-start">
                    <button type="button" className=" btntwo bg-primary mt-5">Music</button>
                    <h3 className="card-title">What Your Music Preference Says About You and Your Personality. </h3>
                    <p className="card-text">Some representative placeholder content for the first slide.</p>
                    <p className="card-text">John Doe December .  29, 2017</p>
                  </div>
                </div>
              </div></div>
            <div className="col-lg-4 ">
              <div className="carousel-inner carhideone">
                <div className="carousel-item active"><div style={{ overflow: "hidden" }}>
                  <img src="https://images.unsplash.com/photo-1726258895076-b217276b2539?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="maintwo  d-block w-100 img-fluid carmainimage mb-2" alt="..." /></div>
                  <div className="carousel-caption text-start ">
                    <button type="button" className=" btntwo">Management</button>
                    <h4 className="card-title fs-5 carcaption">The Pomodoro Technique Really Works.</h4>
                    <p>John Doe  December 27, 2017</p>
                  </div>
                </div>



              </div>
              <div className="carousel-inner">
                <div className="carousel-item active"><div style={{ overflow: "hidden" }}>
                  <img src="https://images.pexels.com/photos/12046756/pexels-photo-12046756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className=" mainthree d-block w-100 carmainimage img-fluid" alt="..." /></div>
                  <div className="carousel-caption text-start carcaption">
                    <button type="button" className=" btntwo">Lifestyle</button>
                    <h5 className="card-title fs-5">First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                  </div>
                </div>

              </div>
            </div>


          </div>
        </div>
      </div>



      {/* Carousel ends  */}


      <div className="containment">
        <div className=" row   mx-3 mt-5 cardmaincard">
          <div className="col-lg-3  text-left childcol1"><div style={{ overflow: "hidden" }}>
            <img src="https://images.unsplash.com/photo-1560752323-bb0a9680945f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmlnaHQlMjBsYW1wfGVufDB8fDB8fHww" className=" cardimg  cardthree" /></div>
            <p className="card-text">December 15, 2017</p>
            <h1 className="card-title">Just a Standard Format Post.</h1>
            <p className="card-text">Lorem ipsum Sed eiusmod esse aliqua sed incididunt
              aliqua incididunt mollit id et sit proident dolor nulla sed commodo
              est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua...</p>
            <a href="" className="cardlink" >Design</a> ,<a href="" className="cardlink" > Photography</a>
          </div>
          <div className="col-lg-3   text-center  childcol2">
            <h1>,,</h1>
            <h1 className="card-title mb-3">
              Good design is making something intelligible and memorable.
              Great design is making something memorable and meaningful.
            </h1>
            <p className="card-text">Dieter Rams</p>
          </div>
          <div className="col-lg-3    childcol3"><div style={{ overflow: "hidden" }}>
            <img src="https://plus.unsplash.com/premium_photo-1669905375112-5559511b97ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29mZmllfGVufDB8fDB8fHww" className="  cardimg cardone" /></div>
            <p className="card-text">December 15, 2017</p>
            <h1 className="card-title mb-3">10 Interesting Facts About Caffeine.</h1>
            <p className="card-text">Lorem ipsum Sed eiusmod esse aliqua
              sed incididunt aliqua incididunt mollit id et sit proident
              dolor nulla sed commodo est ad minim elit reprehenderit nisi
              officia aute incididunt velit sint in aliqua...</p>
            <a href="" className="cardlink" >Health</a>
          </div>
          <div className="col-lg-3  childcol4"><div style={{ overflow: "hidden" }}>
            <img src="https://images.unsplash.com/photo-1530349311076-ab305120ccfc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8b2F0JTIwY29va2llc3xlbnwwfHwwfHx8MA%3D%3D" className="  cardimg cardtwo" /></div>
            <p className="card-text">December 10, 2017</p>
            <h1 className="card-title mb-3">No Sugar Oatmeal Cookies.
            </h1>
            <p className="card-text">Lorem ipsum Sed eiusmod esse aliqua sed incididunt
              aliqua incididunt mollit id et sit proident dolor nulla sed commodo
              est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua...</p>
            <a href="" className="cardlink" >Cooking </a> ,<a href="" className="cardlink" >Health</a>
          </div>

          <div className="col-lg-3   childcol5"><div style={{ overflow: "hidden" }}>
            <img src="https://images.unsplash.com/photo-1699974627205-12c30c745808?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top  cardimg cardfour" /></div>
            <p className="card-text">December 10, 2017</p>
            <h1 className="card-title mb-3">What Your Music Preference Says About You and Your Personality.</h1>
            <p className="card-text">Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt
              mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi
              officia aute incididunt velit sint in aliqua...</p>
            <a href="" className="cardlink" >Music </a> ,<a href="" className="cardlink" > Lifestyle</a>
          </div>

          <div className="col-lg-3   childcol6"><div style={{ overflow: "hidden" }}>
            <img src="https://images.unsplash.com/photo-1547675960-7634cf1b0856?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRoZW1lJTIwcGFya3xlbnwwfHwwfHx8MA%3D%3D" className="card-img-top  cardimg cardfive" /></div>
            <p className="card-text">December 10, 2017</p>
            <h1 className="card-title mb-3">
              Visiting Theme Parks Improves Your Health.
            </h1>
            <p className="card-text">Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt
              mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi
              officia aute incididunt velit sint in aliqua...</p>
            <a href="" className="cardlink" >Health </a> ,<a href="" className="cardlink" > Lifestyle</a>
          </div>

          <div className="col-lg-3  childcol7"><div style={{ overflow: "hidden" }}>
            <img src="https://images.unsplash.com/photo-1516918842892-1c43ea4ad867?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top  cardimg cardsix" /></div>
            <span className="card-text">December 10, 2017</span>
            <h1 className="card-title">Key Benefits Of Family Photography.</h1>
            <p className="card-text">Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua
              incididunt mollit id et sit proident dolor nulla sed commodo est ad minim
              elit reprehenderit nisi officia aute incididunt velit sint in aliqua...</p>
            <a href="" className="cardlink" >Family </a> ,<a className="cardlink" href=""> Photography</a>
          </div>

          <div className=" col-lg-3  childcol8"><div style={{ overflow: "hidden" }}>
            <img src="https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top cardimg  cardseven" /></div>
            <span className="card-text">December 10, 2017</span>
            <h1 className="card-title">Workspace Design Trends and Ideas.</h1>
            <p className="card-text">
              Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et
              sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia
              aute incididunt velit sint in aliqua...
            </p>
            <a href="" className="cardlink" >Work</a> ,<a href="" className="cardlink" >Management</a>
          </div>

          <div className="co col-lg-3   childcol9"><div style={{ overflow: "hidden" }}>
            <img src="https://images.unsplash.com/photo-1579825797894-887923250b38?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top cardimg cardeight" /></div>
            <span className="card-text">December 10, 2017</span>
            <h1 className="card-title">Planning Your First Trip to Sydney..</h1>
            <p className="card-text">
              Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et
              sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia
              aute incididunt velit sint in aliqua...
            </p>
            <a href="" className="cardlink" >Travel </a> ,<a href="" className="cardlink" >Vacation</a>
          </div>

          <div className=" col-lg-3   childcol10"><div style={{ overflow: "hidden" }}>
            <img src="https://plus.unsplash.com/premium_photo-1663108211760-0f39a216df96?q=80&w=2052&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top  cardimg cardeight" /></div>
            <span className="card-text">December 10, 2017</span>
            <h1 className="card-title">Create Meaningful Family Moments.</h1>
            <p className="card-text">
              Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et
              sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia
              aute incididunt velit sint in aliqua...
            </p>
            <a href="" className="cardlink" >Family </a>,<a href="" className="cardlink" > Relationship</a>
          </div>

          <div className="col-lg-3 childcol11"><div style={{ overflow: "hidden" }}>
            <img src="https://images.unsplash.com/photo-1583767058592-89fb1571985c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top  cardimg cardnine" /></div>
            <span className="card-text">December 10, 2017</span>
            <h1 className="card-title">Throwback To The Good Old Days.</h1>
            <p className="card-text">
              Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et
              sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia
              aute incididunt velit sint in aliqua...
            </p>
            <a href="" className="cardlink" >  Lifestyle</a>
          </div>


          <div className=" col-lg-3 childcol12 "><div style={{ overflow: "hidden" }}>
            <img src="https://images.unsplash.com/photo-1560217930-ed5820aea22a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top  cardimg cardten" /></div>
            <span className="card-text">December 10, 2017</span>
            <h1 className="card-title">Just Another Standard Format Post.</h1>
            <p className="card-text">
              Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et
              sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia
              aute incididunt velit sint in aliqua...
            </p>
            <a href="" className="cardlink" >Design </a> ,<a href="" className="cardlink" > Photography</a>
          </div>


          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center p-5">
              <li className="page-item">
                <a className="pagarrow" href="#" aria-label="Previous">
                  <span aria-hidden="true">← </span>
                </a>
              </li>
              <li className="page-item"><a className=" paglink" href="#">1</a></li>
              <li className="page-item"><a className=" perpeg" href="#">2</a></li>
              <li className="page-item"><a className=" paglink hidepeg" href="#">3</a></li>
              <li className="page-item"><a className=" paglink hidepeg" href="#">4</a></li>
              <li className="page-item"><a className=" paglink hidepeg" href="#">5</a></li>
              <li className="page-item"><a className="paglink" href="#">...</a></li>
              <li className="page-item"><a className=" paglink" href="#">8</a></li>
              <li className="page-item">
                <a className="pagarrow" href="#" aria-label="next">
                  <span aria-hidden="true">→</span>
                </a>
              </li>
            </ul>
          </nav>


        </div>


      </div>




      {/* cards ends here  */}



      <div className="row" style={{ width: "100%" }}>
        <div className="col-lg-8 subrowchild">
          <div className="row  justify-content-center"><h1 className="card-title mt-3 mb-5 text-center">Popular Posts</h1>
            <div className="card mb-3  border-0" style={{ maxWidth: "400px" }}>
              <div className="row g-0 d-flex">
                <div className="col">
                  <img src="https://images.unsplash.com/photo-1547675960-7634cf1b0856?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRoZW1lJTIwcGFya3xlbnwwfHwwfHx8MA%3D%3D" className="img-fluid subfooterimages" alt="..." />
                </div>
                <div className="col">
                  <div className="card-body">
                    <h5 className="card-title">Visiting Theme Parks Improves Your Health.</h5>
                    <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>


            <div className="card mb-3  border-0" style={{ maxWidth: "400px" }}>
              <div className="row g-0">
                <div className="col">
                  <img src="https://images.unsplash.com/photo-1516918842892-1c43ea4ad867?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="img-fluid subfooterimages" alt="..." />
                </div>
                <div className="col">
                  <div className="card-body">
                    <h5 className="card-text">Key Benefits Of Family Photography.</h5>
                    <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>


            <div className="card mb-3  border-0" style={{ maxWidth: " 400px" }}>
              <div className="row g-0">
                <div className="col">
                  <img src="https://images.unsplash.com/photo-1607975218250-7faaf3e36bbf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvb2tpZXN8ZW58MHx8MHx8fDA%3D" className="img-fluid  subfooterimages" alt="..." />
                </div>
                <div className="col">
                  <div className="card-body">
                    <h5 className="card-title">Absolutely No Sugar Oatmeal Cookies.</h5>
                    <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>


            <div className="card mb-3  border-0" style={{ maxWidth: " 400px" }}>
              <div className="row g-0">
                <div className="col">
                  <img src="https://images.pexels.com/photos/12046756/pexels-photo-12046756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="img-fluid  subfooterimages" alt="..." />
                </div>
                <div className="col">
                  <div className="card-body">
                    <h5 className="card-title">Throwback To The Good Old Days.</h5>
                    <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>


            <div className="card mb-3 hidesubfooter  border-0" style={{ maxWidth: " 400px" }}>
              <div className="row g-0">
                <div className="col">
                  <img src="https://images.unsplash.com/photo-1495774856032-8b90bbb32b32?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="img-fluid  subfooterimages" alt="..." />
                </div>
                <div className="col">
                  <div className="card-body">
                    <h5 className="card-title">10 Interesting Facts About Caffeine.</h5>
                    <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card mb-3 hidesubfooter  border-0" style={{ maxWidth: " 400px" }}>
              <div className="row g-0">
                <div className="col">
                  <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="img-fluid  subfooterimages" alt="..." />
                </div>
                <div className="col">
                  <div className="card-body">
                    <h5 className="card-title">Healthy Mediterranean Salad Recipes</h5>
                    <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="col-lg-3 text-center">
          <h1 className="card-title mt-3 subrowchild1"> About Philosophy</h1>
          <p className="card-text mt-5  fs-4">Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero malesuada feugiat.
            Pellentesque in ipsum id orci porta dapibus. Vestibulum ante ipsum primis in faucibus orci luctus
            et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit
            amet ligula. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Donec sollicitudin molestie malesuada.

          </p>
        </div>

      </div>

      <h1 className="card-title text-center mt-5 mb-3">Tags</h1>
      <h6 className="text-center subtags ">
        <button type="button" className="btn">RECIPE</button>
        <button type="button" className="btn ">PLACES</button>
        <button type="button" className="btn ">TIPS</button>
        <button type="button" className="btn ">FRIENDS</button>
        <button type="button" className="btn ">TRAVEL</button>
        <button type="button" className="btn ">EXERCISE</button>
        <button type="button" className="btn ">LIGHT</button>
      </h6>
      <h6 className="text-center subtags mb-5">
        <button type="button" className="btn">READING</button>
        <button type="button" className="btn">RUNNING</button>
        <button type="button" className="btn">SELF HELP</button>
        <button type="button" className="btn">VACATION</button></h6>



      {/* subfooter ends here  */}




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
              <div className="row d-flex  "><input type="email" name="EMAIL" className="email  " id="" placeholder="Email Address" required="" fdprocessedid="spwktv" autoComplete="off" />
                <button type="button" className=" sendbtn">SEND</button></div>
            </div>
          </div>
          <p className="text-start text-light mt-5 mb-5">© All Rights Reserved 2025 <span className="text-secondary"> | </span> Jay Vardhan Rathore</p>
        </div></div>
    </>

  )
}

export default Home;
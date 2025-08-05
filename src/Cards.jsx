import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'
const Car = () => {
  AOS.init();
  return (
    <>
    <div className="containment">
      <div className=" row   mx-3 pt-5 cardmaincard">
        <div className="col-lg-3  text-left childcol1"><div style={{overflow:"hidden"}}>
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
        <div className="col-lg-3    childcol3"><div style={{overflow:"hidden"}}>
          <img src="https://plus.unsplash.com/premium_photo-1669905375112-5559511b97ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29mZmllfGVufDB8fDB8fHww" className="  cardimg cardone" /></div>
          <p className="card-text">December 15, 2017</p>
          <h1 className="card-title mb-3">10 Interesting Facts About Caffeine.</h1>
          <p className="card-text">Lorem ipsum Sed eiusmod esse aliqua 
            sed incididunt aliqua incididunt mollit id et sit proident
             dolor nulla sed commodo est ad minim elit reprehenderit nisi
              officia aute incididunt velit sint in aliqua...</p>
              <a href="" className="cardlink" >Health</a>
        </div>
        <div className="col-lg-3  childcol4"><div style={{overflow:"hidden"}}>
          <img src="https://images.unsplash.com/photo-1530349311076-ab305120ccfc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8b2F0JTIwY29va2llc3xlbnwwfHwwfHx8MA%3D%3D" className="  cardimg cardtwo"/></div>
          <p className="card-text">December 10, 2017</p>
          <h1 className="card-title mb-3">No Sugar Oatmeal Cookies.
          </h1>
          <p className="card-text">Lorem ipsum Sed eiusmod esse aliqua sed incididunt 
            aliqua incididunt mollit id et sit proident dolor nulla sed commodo 
            est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua...</p>
            <a href="" className="cardlink" >Cooking </a> ,<a href="" className="cardlink" >Health</a>
        </div>

<div className="col-lg-3   childcol5"><div style={{overflow:"hidden"}}>
  <img src="https://images.unsplash.com/photo-1699974627205-12c30c745808?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top  cardimg cardfour"/></div>
  <p className="card-text">December 10, 2017</p>
  <h1 className="card-title mb-3">What Your Music Preference Says About You and Your Personality.</h1>
  <p className="card-text">Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt
     mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi
      officia aute incididunt velit sint in aliqua...</p>
      <a href="" className="cardlink" >Music </a> ,<a href="" className="cardlink" > Lifestyle</a>
</div>

<div className="col-lg-3   childcol6"><div style={{overflow:"hidden"}}>
  <img src="https://images.unsplash.com/photo-1547675960-7634cf1b0856?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRoZW1lJTIwcGFya3xlbnwwfHwwfHx8MA%3D%3D" className="card-img-top  cardimg cardfive"/></div>
 <p className="card-text">December 10, 2017</p>
  <h1 className="card-title mb-3">
  Visiting Theme Parks Improves Your Health.
  </h1>
  <p className="card-text">Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt 
    mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi 
    officia aute incididunt velit sint in aliqua...</p>
    <a href="" className="cardlink" >Health </a> ,<a href="" className="cardlink" > Lifestyle</a>
</div>

<div className="col-lg-3  childcol7"><div style={{overflow:"hidden"}}>
<img src="https://images.unsplash.com/photo-1516918842892-1c43ea4ad867?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top  cardimg cardsix"/></div>
<span className="card-text">December 10, 2017</span>
<h1 className="card-title">Key Benefits Of Family Photography.</h1>
<p className="card-text">Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua 
  incididunt mollit id et sit proident dolor nulla sed commodo est ad minim
   elit reprehenderit nisi officia aute incididunt velit sint in aliqua...</p>
   <a href="" className="cardlink" >Family </a> ,<a  className="cardlink" href=""> Photography</a>
</div>

<div className=" col-lg-3  childcol8"><div style={{overflow:"hidden"}}>
  <img src="https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top cardimg  cardseven"/></div>
  <span className="card-text">December 10, 2017</span>
  <h1 className="card-title">Workspace Design Trends and Ideas.</h1>
  <p className="card-text">
  Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et 
  sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia
   aute incididunt velit sint in aliqua...
  </p>
  <a href="" className="cardlink" >Work</a> ,<a href="" className="cardlink" >Management</a>
</div>

<div className="co col-lg-3   childcol9"><div style={{overflow:"hidden"}}>
  <img src="https://images.unsplash.com/photo-1579825797894-887923250b38?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top cardimg cardeight"/></div>
  <span className="card-text">December 10, 2017</span>
  <h1 className="card-title">Planning Your First Trip to Sydney..</h1>
  <p className="card-text">
  Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et 
  sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia
   aute incididunt velit sint in aliqua...
  </p>
  <a href="" className="cardlink" >Travel </a> ,<a href="" className="cardlink" >Vacation</a>
</div>

<div className=" col-lg-3   childcol10"><div style={{overflow:"hidden"}}>
  <img src="https://plus.unsplash.com/premium_photo-1663108211760-0f39a216df96?q=80&w=2052&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top  cardimg cardeight"/></div>
  <span className="card-text">December 10, 2017</span>
  <h1 className="card-title">Create Meaningful Family Moments.</h1>
  <p className="card-text">
  Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et 
  sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia
   aute incididunt velit sint in aliqua...
  </p>
  <a href="" className="cardlink" >Family </a>,<a href="" className="cardlink" > Relationship</a>
</div>

<div className="col-lg-3 childcol11"><div style={{overflow:"hidden"}}>
  <img src="https://images.unsplash.com/photo-1583767058592-89fb1571985c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top  cardimg cardnine"/></div>
  <span className="card-text">December 10, 2017</span>
  <h1 className="card-title">Throwback To The Good Old Days.</h1>
  <p className="card-text">
  Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et 
  sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia
   aute incididunt velit sint in aliqua...
  </p>
  <a href="" className="cardlink" >  Lifestyle</a>
</div>


<div className=" col-lg-3 childcol12 "><div style={{overflow:"hidden"}}>
  <img src="https://images.unsplash.com/photo-1560217930-ed5820aea22a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top  cardimg cardten"/></div>
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
 

    </>
  )
}
export default Car;
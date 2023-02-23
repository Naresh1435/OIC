import React from "react";
import ReactDOM from 'react-dom';
import logo from "./imgs/olympiclogo-1.png"
import { Link } from "react-router-dom";
import "./home.css";
import emblem from './imgs/emblem.png';
import qsMark from './imgs/qs.svg';
import sp1 from './imgs/sp1.png';
import sp2 from './imgs/sp2.png';
import sp3 from './imgs/sp3.png';
import sp4 from './imgs/vector-3.svg';
import sp5 from './imgs/vector-7.svg';
import sp6 from './imgs/vector-8.svg';
import sp7 from './imgs/sp7.png';
import card3 from './imgs/CRICKET_OFF.png';
import card2 from './imgs/SOFT_OFF.png';
import card1 from './imgs/BASEBALL_OFF.png';
function Home() {
const handleNavDrop = () =>{
document.getElementById("navdrop").classList.toggle("small-window-2");
document.getElementById('navdrop').classList.toggle('small-window');
}
return (
    <div className="raja">
        <nav >
             <div className="lg-logo ">
                 <div className=" lg-img-logo  ">
                     <img src={logo}  alt="" />
                     <div className=" signup flex  gap-2 items-center justify-center">
                         <i className="fa-solid text-2xl p-1 fa-circle-user nav-op"></i>
                         <button className=" inter  p-1 nav-op "> Sign Up</button>
                     </div>
                 </div>
                 <div >
                     <div className="small-window">
                         <button className="fa-solid fa-bars" onClick={handleNavDrop}></button>
                     </div>
                     <div className="ash bg-green lg-home-nav-items small-window-2" id="navdrop">

                         <Link id="home" className="lg-home-nav-item">Home</Link>
                         <Link id="home" className="lg-home-nav-item">The Facility</Link>
                         <Link id="home" className="lg-home-nav-item">Memberships</Link>
                         <Link id="home" className="lg-home-nav-item">Batting Cages</Link>
                         <Link id="home" className="lg-home-nav-item">Programs & Events</Link>
                         <Link id="home" className="lg-home-nav-item">Contact Us</Link>
                         <button className="ae small-window" onClick={handleNavDrop}>Close</button>
                     </div>
                 </div>
             </div>
         </nav>
         <div className="">
             <div className="video1con">
                 <video className="video1"  autoPlay loop muted>
                     <source src="con1.mp4" type="video/mp4" />
                 </video>
             </div>
             <div className="ah lg-home-overflow">
                 <div className="ai home-t1">OLYMPIC INDOOR SPORTS</div>
                 <div className="bg-green-1 home-t2 darker aj">High Perfomance Facility in the USA.</div>
                 <div className="ak inter home-g1">
                     <button className="bg-green-1 home-t3 al">Register</button>
                     <button className="bg-yellow home-t4 am">Learn More</button>
                 </div>
             </div>
         </div>
         <div className="sps"></div>
         <div className="an lg-home-bottom bg-gray">
            <div className="  bg-black lg-bt-1">
                <span className="ap do lg-bt-t1">WHAT WE DO!</span>
                <span className=" bg-green aq lg-hr "></span>
            </div>
            <div className=" lg-bt-2  bg-black ar">
                <img src="ticker-1.gif" className="as" alt="" srcset="" />
            </div>
        </div>
        <div className="parcon">
        <img src={card1} alt="" />
        <img src={card2} alt="" />
        <img src={card3} alt="" />
        
        </div>
    </div>
// <div className="bg-black-con">
//     <div className="homecontainer lg-home">
//         <nav className="hm lg-nav">
//             <div className="hh lg-logo ">
//                 <div className="aa lg-img-logo  ">
//                     <img src={logo} width={"50%"} height={"50%"} alt="" />
//                     <div className=" signup flex  gap-2 items-center justify-center">
//                         <i className="fa-solid text-2xl p-1 fa-circle-user nav-op"></i>
//                         <button className=" inter ac p-1 nav-op "> Sign Up</button>
//                     </div>
//                 </div>
//                 <div className="ab">
//                     <div className="small-window">
//                         <button className="fa-solid fa-bars" onClick={handleNavDrop}></button>
//                     </div>
//                     <div className="ash bg-green ad lg-home-nav-items small-window-2" id="navdrop">

//                         <Link id="home" className="lg-home-nav-item">Home</Link>
//                         <Link id="home" className="lg-home-nav-item">The Facility</Link>
//                         <Link id="home" className="lg-home-nav-item">Memberships</Link>
//                         <Link id="home" className="lg-home-nav-item">Batting Cages</Link>
//                         <Link id="home" className="lg-home-nav-item">Programs & Events</Link>
//                         <Link id="home" className="lg-home-nav-item">Contact Us</Link>
//                         <button className="ae small-window" onClick={handleNavDrop}>Close</button>
//                     </div>
//                 </div>
//             </div>
//         </nav>
//         <div className="video-con-1 af lg-home-video-parent">
//             <div className="home-video-parent lg-home-video-1  ">
//                 <video className="home-video parallax-video-sm " autoPlay loop muted>
//                     <source src="con1.mp4" type="video/mp4" />
//                 </video>
//             </div>
//             <div className="ah lg-home-overflow">
//                 <div className="ai home-t1">OLYMPIC INDOOR SPORTS</div>
//                 <div className="bg-green-1 home-t2 darker aj">High Perfomance Facility in the USA.</div>
//                 <div className="ak inter home-g1">
//                     <button className="bg-green-1 home-t3 al">Register</button>
//                     <button className="bg-yellow home-t4 am">Learn More</button>
//                 </div>
//             </div>
//         </div>
//         <div className="an lg-home-bottom bg-gray">
//             <div className=" ao bg-black lg-bt-1">
//                 <span className="ap do lg-bt-t1">WHAT WE DO!</span>
//                 <span className=" bg-green aq lg-hr "></span>
//             </div>
//             <div className=" lg-bt-2  bg-black ar">
//                 <img src="ticker-1.gif" className="as" alt="" srcset="" />
//             </div>
//         </div>
//     </div>
//     <div className="lg-home">
//         <div className="parallax-img2">
//             <div className="au lg-cat">
//                 <div className=" home-card lg-card av ">
//                     <img src={card1} alt="" />
//                 </div>
//                 <div className=" home-card lg-card be">
//                 <img src={card2} alt="" />
//                 </div>
//                 <div className=" home-card lg-card bn ">
//                 <img src={card3} alt="" />
//                 </div>
//             </div>
//         </div>
//     </div>
//     <div className="lg-c3">
//         <div className="bw lg-c3-split">
//             <div className="bx parallax-img">
//                 <div className="by">
//                     <div className="bz ">
//                         <span className="ca about-t1 darker  ">About Us</span>
//                         <span className="bg-green cb"> </span>
//                     </div>
//                     <div className="darker about-t cc">
//                         <span className="cd about-t2">Olympic Indoor Sports is a high-performance facility that provides
//                             training in Baseball, Softball & Cricket skills.</span>
//                         <span className="cd about-t2">We help student-athletes gain confidence, get better, and..</span>
//                     </div>
//                     <div className="ce">
//                         <p className="cf inter about-t3 text-color-1">HAVE FUN!</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <div className="cg lg-parallax-h">
//             <video className=" parallax-video-sm parallax-video-lg " autoPlay loop muted>
//                 <source src="Parallax.mp4" type="video/mp4" />
//             </video>
//         </div>
//     </div>

    
//     <div className="bg-black lg-hr ch">
//         <div className="ci hr-1 bg-green"></div>
//         <p className=" do  cj">The Facility</p>
//     </div>
//     <div className="spec  ck ">
//         <div className="cl">
//             <img src={emblem} height="60%" width="60%" alt="" />
//         </div>
//         <div className="cm">
//             <div className="inter">
//                 <div className=" bg-green-linear cn">
//                     <span className="font-s1">SPECIFICATIONS</span>
//                 </div>
//                 <div className="bg-spec-linear co ">
//                     <div className="cp lg-spec">
//                         <img src={sp1} height={"20px"} width="20px" alt="" />
//                         <p><b>25,000</b> Sq ft</p>
//                     </div>
//                     <div className="cq lg-spec">
//                         <img src={sp2} height={"20px"} width="20px" alt="" />
//                         <p><b>14</b> Batting Cages</p>
//                     </div>
//                     <div className="cr lg-spec">
//                         <img src={sp3} height={"40px"} width="20px" alt="" />
//                         <p><b>2</b> Dedicated Cages
//                             for HiTtrax,<br /> Fungoman & BOLA machine</p>
//                     </div>
//                     <div className="cs lg-spec">
//                         <img src={sp7} height={"20px"} width="20px" alt="" />
//                         <p><b>Video</b> Analysis</p>
//                     </div>
//                     <div className="cs lg-spec">
//                         <img src={sp7} height={"20px"} width="20px" alt="" />
//                         <p><b>Certified</b> Courses</p>
//                     </div>
//                     <div className="cs lg-spec">
//                         <img src={sp7} height={"20px"} width="20px" alt="" />
//                         <p><b>Monthly</b> Evaluation &
//                             Feedback</p>
//                     </div>
//                     <div className="cs lg-spec">
//                         <img src={sp7} height={"20px"} width="20px" alt="" />
//                         <p><b>KPI</b> Metrics</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>

//     <div className="ct bg-black ">
//         <hr className="cu bg-green" />
//         <p className=" bg-black cv">Contact Us</p>
//     </div>

//     <div>
//         <div class="cw">
//             <div class="do cx">
//                 <div className="cy text-color-1">Got questions? </div>
//                 <div className="cz">We will love to hear them!</div>
//                 <span className="text-color-1 da">
//                     <img src={qsMark} width="100%" height={"100%"} alt="" />
//                 </span>
//             </div>
//             <div class=" bg-gray-1 inter db ">
//                 <div class="dc">
//                     <input type="text" className="bg-black-con dd form-border" placeholder="Fist Name & Last Name" />
//                     <input type="text" className="bg-black-con dd form-border" placeholder="Phone Number" />
//                     <input type="text" className="bg-black-con dd form-border" placeholder="Email Address" />
//                     <input type="text" className="bg-black-con form-border de" placeholder="Message or Question" />
//                     <button className="df bg-green ">SUBMIT</button>
//                 </div>

//             </div>
//         </div>
//     </div>

//     <hr className="dg inter bg-green" />
//     <img src="imgs/logoemblem-2-1.png" alt="" id="backimg" />
//     <div class="lastcomponent">
//         <div class="split1">
//             <div class="discription">
//                 Olympic Indoor Sports, a game-changing platform for young athletes in Maryland
//                 <br />
//                 to step up and show off their skills in sports such as baseball, softball, cricket, and lacrosse.
//                 <br /><br />
//                 Our mission is to provide a comprehensive space where these young rising stars can take a swing at their
//                 athletic aspirations and score big in the game of life.
//                 <br /><br />
//                 We're proud to be the home plate for the future generation of American sports, and we hope to establish
//                 a
//                 precedent for other players in the industry. So come on over, join the team, and let's play ball!
//             </div>

//         </div>
//         <div className="dh">
//             <div class="di">
//                 <p className="dj text-color-1">QUICK LINKS</p>
//                 <p className="">The Facility</p>
//                 <p>
//                     Memberships
//                 </p>
//                 <p>
//                     Batting Cages
//                 </p>
//                 <p>
//                     Porgrams & Events
//                 </p>
//                 <p>
//                     Contact Us
//                 </p>
//             </div>
//             <div className=" dk">
//                 <div className="dl">
//                     <span className="text-color-1">Location</span>
//                     Olympic Indoor Sports
//                     9179 Red Branch rd Suite #A Columbia, MD 21045
//                 </div>
//                 <div>
//                     <div class="dm inter">
//                         <span className="text-color-1">Timings</span>
//                         7:00 AM EST - 11:00 PM EST from Monday to Sunday. <br />
//                         You will receive a prompt response from our team within 24 hours.
//                     </div>

//                     <div class="dl  inter">
//                         <span className="text-color-1">Contact Us</span>
//                         Phone:(123) 456-7890
//                     </div>
//                 </div>
//             </div>
//         </div>


//     </div>
//     <div class="dn inter">

//         <div class="location inter">


//         </div>
//     </div>
//     <footer className="text-sm">
//         © 2023 Olympic Indoor Sports. Powered by Eazy Eyez Entertainment.
//     </footer>
// </div> 
)
}

export default Home;
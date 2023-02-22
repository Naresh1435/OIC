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
import card3 from './imgs/soft-6.png';
import card2 from './imgs/soft-3-2.png';
import card1 from './imgs/soft-3.png';
function Home() {
    const handleNavDrop = () =>{
        document.getElementById("navdrop").classList.toggle("hidden");
    }
    return (
        <div className="bg-black-con">
            <div className="homecontainer">
                <nav className="hm">
                    <div className="hh">
                        <div className="aa">
                            <img src={logo} alt=""/>
                        </div>
                        <div className="ab">
                            <button className=" inter ac"><i className="fa-solid fa-circle-user"></i> Sign Up</button> 
                            <button className="fa-solid fa-bars" onClick={handleNavDrop}></button>
                            <div className="ash bg-green ad" id="navdrop">
                        
                                <Link id="home" >Home</Link>
                                <Link id="home" >The Facility</Link>
                                <Link id="home" >Memberships</Link>
                                <Link id="home" >Batting Cages</Link>
                                <Link id="home" >Programs & Events</Link>
                                <Link id="home" >Contact Us</Link>
                                <button className="ae" onClick={handleNavDrop}>Close</button>
                            </div>
                        </div>
                    </div>
                    
                </nav>
                <div className="video-con-1 af">
                    <div className="home-video-parent ">
                        <video className="home-video"   autoPlay loop muted  >
                                <source src="con1.mp4" type="video/mp4"/>
                        </video>
                    </div>
                    <div className="ah">
                            <div className="ai">OLYMPIC INDOOR SPORTS</div>
                            <div className="bg-green-1 darker aj">High Perfomance Facility in the USA.</div>
                            <div className="ak inter">
                                <button className="bg-green-1 al">Register</button>
                                <button className="bg-yellow am">Learn More</button>
                            </div>
                        </div>
                </div>        
                <div className="an bg-gray">
                    <div className=" ao bg-black ">
                        <span className="ap do">WHAT WE DO!</span>
                        <span className=" bg-green aq "></span>
                    </div>
                    <div className="  bg-black ar">
                    <img src="ticker-1.gif" className="as" alt="" srcset="" />
                    </div>
                </div> 
            </div>
            <div className="">
                <div className="at parallax-img2">
                    <div className="au">
                            <div className=" home-card av ">
                                    <div className="bg-home-card home-card-title aw">
                                        <span className="ax aldrich">BASEBALL</span>
                                    </div>
                                    <div className="ay">
                                        <div className="az">
                                        npm     <img src={card1} height="80%" width={"90%"} alt="" />
                                        </div>
                                        <div className="ba bg-home-card">

                                        </div>
                                    </div>
                                    <hr className="bg-white bb"/>
                                    <div className=" bc">
                                        <span className="text-color-1 bd inter ">REGISTER</span>
                                    </div>
                            </div>
                            <div className=" home-card be">
                                    <div className="bg-home-card home-card-title bf">
                                        <span className="bg alrich">SOFTBALL</span>
                                    </div>
                                    <div className="bh">
                                        <div className="bi">
                                            <img src={card2} height="100%" width={"100%"} alt="" />
                                        </div>
                                        <div className="bj bg-home-card">

                                        </div>
                                    </div>
                                    <hr className="bg-white bk"/>
                                    <div className="bl">
                                        <span className="text-color-1 bm inter">REGISTER</span>
                                    </div>
                            </div>
                            <div className=" home-card bn ">
                                    <div className="bg-home-card home-card-title bo">
                                        <span className="bp aldrich ">CRICKET</span>
                                    </div>
                                    <div className="bq">
                                        <div className="br">
                                            <img src={card3} height="80%" width={"90%"} alt="" />
                                        </div>
                                        <div className="bs bg-home-card">

                                        </div>
                                    </div>
                                    <hr className=" bg-white bt"/>
                                    <div className=" bu">
                                        <span className="text-color-1 bv inter ">REGISTER</span>
                                    </div>
                            </div>
                    </div>
                </div>
            </div>
            <div className="bw">
                <div className="bx parallax-img">
                    <div className="by">
                    <div className="bz ">
                        <span className="ca darker  ">About Us</span>
                        <span className="bg-green cb"> </span>
                    </div>
                    <div className="darker cc">
                        <span className="cd">Olympic Indoor Sports is a high-performance facility that provides
training in Baseball, Softball & Cricket skills.</span>
                        <span className="cd">We help student-athletes gain confidence, get better, and..</span>
                    </div>
                        <div className="ce">
                            <p className="cf inter text-color-1">HAVE FUN!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cg">
                <video  className=" parallax-video" autoPlay loop muted>
                    <source src="Parallax.mp4" type="video/mp4" />
                </video>
            </div>
            {/* SPECIFICATIONS */}
            <div className="bg-black ch">
            <hr className="ci bg-green" />
            <p className=" do  cj">The Facility</p>
            </div>  
            <div className="spec ck ">
                <div className="cl">
                    <img src={emblem} height="80%" width="100%" alt="" />
                </div>
                <div className="cm" >
                    <div className="inter">
                        <div className=" bg-green-linear cn">
                            <span>SPECIFICATIONS</span>
                        </div>
                        <div className="bg-spec-linear co ">
                            <div className="cp">
                                <img src={sp1} height={"20px"} width="20px" alt="" />
                                <p><b>25,000</b> Sq ft</p>
                            </div>
                            <div className="cq">
                                <img src={sp2} height={"20px"} width="20px" alt="" />
                                <p><b>14</b> Batting Cages</p>
                            </div>
                            <div className="cr">
                                <img src={sp3} height={"40px"} width="40px" alt="" />
                                <p><b>2</b> Dedicated Cages
for HiTtrax,<br/> Fungoman & BOLA machine</p>
                            </div>
                            <div className="cs">
                                <img src={sp7} height={"20px"} width="20px" alt="" />
                                <p><b>Video</b> Analysis</p>
                            </div>
                            <div className="cs">
                                <img src={sp7} height={"20px"} width="20px" alt="" />
                                <p><b>Certified</b> Courses</p>
                            </div>
                            <div className="cs">
                                <img src={sp7} height={"20px"} width="20px" alt="" />
                                <p><b>Monthly</b>  Evaluation &
Feedback</p>
                            </div>
                            <div className="cs">
                                <img src={sp7} height={"20px"} width="20px" alt="" />
                                <p><b>KPI</b> Metrics</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                 
        <div className="ct bg-black ">
            <hr className="cu bg-green" />
            <p className=" bg-black cv">Contact Us</p>
        </div>           
        
        <div>
            <div class="cw">
                <div class="do cx">
                    <div className="cy text-color-1">Got questions? </div>
                    <div className="cz">We will love to hear them!</div>
                    <span className="text-color-1 da">
                        <img src={qsMark} width="100%" height={"100%"}  alt="" />
                    </span>
                </div>
                <div class=" bg-gray-1 inter db ">
                    <div class="dc">
                        <input type="text" className="bg-black-con dd form-border" placeholder="Fist Name & Last Name"/>
                        <input type="text" className="bg-black-con dd form-border" placeholder="Phone Number"/>
                        <input type="text"className="bg-black-con dd form-border"  placeholder="Email Address"/>
                        <input type="text" className="bg-black-con form-border de" placeholder="Message or Question" />
                        <button className="df bg-green ">SUBMIT</button>
                    </div>
                    
                </div>
            </div>
        </div>
        
    <hr className="dg inter bg-green" />
    <img src="imgs/logoemblem-2-1.png" alt="" id="backimg"/>
    <div class="lastcomponent">
        <div class="split1">
            <div class="discription">
                Olympic Indoor Sports, a game-changing platform for young athletes in Maryland
                <br/>
                to step up and show off their skills in sports such as baseball, softball, cricket, and lacrosse.
                <br/><br/>
                Our mission is to provide a comprehensive space where these young rising stars can take a swing at their
                athletic aspirations and score big in the game of life.
                <br/><br/>
                We're proud to be the home plate for the future generation of American sports, and we hope to establish a
                precedent for other players in the industry. So come on over, join the team, and let's play ball!
            </div>
            
        </div>
        <div className="dh">
            <div class="di">
                    <p className="dj text-color-1">QUICK LINKS</p>
                    <p className="">The Facility</p> 
                    <p>
                    Memberships 
                    </p>
                    <p>
                    Batting Cages 
                    </p>
                    <p>
                    Porgrams & Events 
                    </p>
                    <p>
                    Contact Us
                    </p>
            </div>
            <div className=" dk">
                <div className="dl">
                <span className="text-color-1">Location</span>
                Olympic Indoor Sports
                9179 Red Branch rd Suite #A Columbia, MD 21045
                </div>
            <div>
            <div class="dm inter">
                <span className="text-color-1">Timings</span>
                7:00 AM EST - 11:00 PM EST from Monday to Sunday. <br/>
                You will receive a prompt response from our team within 24 hours.
            </div>
           
                <div class="dl  inter">
                        <span className="text-color-1">Contact Us</span>
                        Phone:(123) 456-7890
                </div>
            </div>
            </div>
            </div>
            
           
        </div>
        <div class="dn inter">
            
            <div class="location inter">
                
            
        </div>
        </div>
            <footer className="text-sm">
                © 2023 Olympic Indoor Sports. Powered by Eazy Eyez Entertainment.
            </footer>
    </div>
    )
}

export default Home;
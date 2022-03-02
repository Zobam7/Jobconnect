import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Main.css";
import SearchIcon from '@mui/icons-material/Search';
import PublishIcon from '@mui/icons-material/Publish';


class Main extends React.Component {
  render() {
    const job = JSON.parse(localStorage.getItem("Front-End Developer"))
    return (
      <>
        <div
          className="view mb-5"
          style={{ backgroundImage: `url(images/background6.jpg)` }}
        >
          <div className="mask rgba-gradient align-items-center">
            <div className="container">
              <div className="row">
                <div
                  className="textbg col-md-6 white-text text-center text-md-left mt-xl-5 mb-5 wow fadeInLeft"
                  data-wow-delay="0.3s"
                >
                  <h1
                    className="h1-responsive font-weight-bold mt-sm-5"
                    style={{ color: "white" }}
                  >
                    Search Between More Than 50,000 Open Jobs
                  </h1>
                  <hr className="hr-dark" />
                  <div className="mb-5 col-12 d-flex d-md-inline-block flex-column flex-md-row justify-content-center align-items-center" style={{ color: "white" }}>
                    Trending Jobs : {" "}
                    <Link className="trendjobs p-2 mr-3 mb-3">

                      Web Designer
                    </Link>
                    <Link className="trendjobs p-2 mr-3 mb-3">
                      Sales Manager
                    </Link>
                    <Link className="trendjobs p-2 mr-3 mb-3">
                      Web Dev
                    </Link>
                  </div>
                  <div className="mainsearch col-12">
                    <form className="d-flex w-100">

                    <input
                      type="text"
                      className="formsearch"
                      placeholder="Search for Jobs"
                    />
                    
                    
                    <NavLink to="/" className="ml-auto mainicon">
                      <SearchIcon />
                    </NavLink>
                    </form>
                  </div>
                  <div className="cv mt-5 text-white d-md-none">
                    <h3>
                      Dont just find. Be found. Put your CV in front of great employers
                    </h3>
                    <hr className="cvhr" />
                    <div className="cvbottom">

                      <p>It helps you to increase your chances of finding a suitable job and let recruiters contact you about jobs that are not needed to pay for advertising.</p>
                      <button><PublishIcon /> UPLOAD YOUR RESUME</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mainslider d-flex justify-content-center mb-5 col-6 offset-3">
          <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-danger mainsliderbtn bbtn">
              Latest Jobs
            </button>
          </div>
        </div>

        {/* JOB CARDS */}

        <div className="container-fluid mb-4">
          <div className="card-deck mb-4">
            <div className="Jobcards card d-flex justify-content-center align-items-center">
              <span className="mb-3 align-self-start p-3 tags">{job.category}</span>
              <div className="card-body d-flex flex-column align-items-center justify-content-center">
                <img
                  src="images/profilepic2.png"
                  className="card-img jobcardsimg"
                  alt="..."
                />
                <h5 className="card-title">{job.cname}</h5>
                <p className="card-text m-0">{job.jtitle}</p>
                <p className="card-text text-muted">{job.location}</p>
                <p className="card-text">
                  <Link to="/jobdetail" className="btn btn-outline-danger">Apply Now</Link>
                </p>
              </div>
            </div>
            <div className="Jobcards card d-flex justify-content-center align-items-center">
              <span className="mb-3 align-self-start p-3 tags">Full Time</span>
              <div className="card-body d-flex flex-column align-items-center justify-content-center">
                <img
                  src="images/profilepic2.png"
                  className="card-img jobcardsimg"
                  alt="..."
                />
                <h5 className="card-title">Microsoft Inc</h5>
                <p className="card-text m-0">Web Dev</p>
                <p className="card-text text-muted">Yaba, Lagos</p>
                <p className="card-text">
                  <Link to="/jobdetail" className="btn btn-outline-danger">Apply Now</Link>
                </p>
              </div>
            </div>
            <div className="Jobcards card d-flex justify-content-center align-items-center">
              <span className="mb-3 align-self-start p-3 tags2">Part Time</span>
              <div className="card-body d-flex flex-column align-items-center justify-content-center">
                <img
                  src="images/profilepic2.png"
                  className="card-img jobcardsimg"
                  alt="..."
                />
                <h5 className="card-title">MicroSoft Inc</h5>
                <p className="card-text m-0">Web Dev</p>
                <p className="card-text text-muted">Yaba, Lagos</p>
                <p className="card-text">
                  <Link to="/jobdetail" className="btn btn-outline-danger">Apply Now</Link>
                </p>
              </div>
            </div>
            <div className="Jobcards card d-flex justify-content-center align-items-center">
              <span className="mb-3 align-self-start p-3 tags">Full Time</span>
              <div className="card-body d-flex flex-column align-items-center justify-content-center">
                <img
                  src="images/profilepic2.png"
                  className="card-img jobcardsimg"
                  alt="..."
                />
                <h5 className="card-title">MicroSoft Inc</h5>
                <p className="card-text m-0">Web Dev</p>
                <p className="card-text text-muted">Yaba, Lagos</p>
                <p className="card-text">
                  <Link to="/jobdetail" className="btn btn-outline-danger">Apply Now</Link>
                </p>
              </div>
            </div>
          </div>

          <div className="card-deck mb-4">
            <div className="Jobcards card d-flex justify-content-center align-items-center">
              <span className="mb-3 align-self-start p-3 tags2">Part Time</span>
              <div className="card-body d-flex flex-column align-items-center justify-content-center">
                <img
                  src="images/profilepic2.png"
                  className="card-img jobcardsimg"
                  alt="..."
                />
                <h5 className="card-title">MicroSoft Inc</h5>
                <p className="card-text m-0">Web Dev</p>
                <p className="card-text text-muted">Yaba, Lagos</p>
                <p className="card-text">
                  <Link to="/jobdetail" className="btn btn-outline-danger">Apply Now</Link>
                </p>
              </div>
            </div>
            <div className="Jobcards card d-flex justify-content-center align-items-center">
              <span className="mb-3 align-self-start p-3 tags">Full Time</span>
              <div className="card-body d-flex flex-column align-items-center justify-content-center">
                <img
                  src="images/profilepic2.png"
                  className="card-img jobcardsimg"
                  alt="..."
                />
                <h5 className="card-title">MicroSoft Inc</h5>
                <p className="card-text m-0">Web Dev</p>
                <p className="card-text text-muted">Yaba, Lagos</p>
                <p className="card-text">
                  <Link to="/jobdetail" className="btn btn-outline-danger">Apply Now</Link>
                </p>
              </div>
            </div>
            <div className="Jobcards card d-flex justify-content-center align-items-center">
              <span className="mb-3 align-self-start p-3 tags2">Part Time</span>
              <div className="card-body d-flex flex-column align-items-center justify-content-center">
                <img
                  src="images/profilepic2.png"
                  className="card-img jobcardsimg"
                  alt="..."
                />
                <h5 className="card-title">MicroSoft Inc</h5>
                <p className="card-text m-0">Web Dev</p>
                <p className="card-text text-muted">Yaba, Lagos</p>
                <p className="card-text">
                  <Link to="/jobdetail" className="btn btn-outline-danger">Apply Now</Link>
                </p>
              </div>
            </div>
            <div className="Jobcards card d-flex justify-content-center align-items-center">
              <span className="mb-3 align-self-start p-3 tags2">Part Time</span>
              <div className="card-body d-flex flex-column align-items-center justify-content-center">
                <img
                  src="images/profilepic2.png"
                  className="card-img jobcardsimg"
                  alt="..."
                />
                <h5 className="card-title">MicroSoft Inc</h5>
                <p className="card-text m-0">Web Dev</p>
                <p className="card-text text-muted">Yaba, Lagos</p>
                <p className="card-text">
                  <Link to="/jobdetail" className="btn btn-outline-danger">Apply Now</Link>
                </p>
              </div>
            </div>
          </div>
          <br />
          <div className="d-flex justify-content-center align-items-center ">
            <Link className="btn btn-lg btn-outline-danger bbtn" to="./browsejobs">

              BROWSE ALL JOBS

            </Link>
          </div>
        </div>
        <br />

        <div className="container signupcontainer p-0">
          <div class="card mb-3 border-0" >
            <div class="row no-gutters">
              <div class="col-md-6">
                <img src="images/background10.png" alt="..." className="w-100 img-fluid" />
              </div>
              <div class="col-md-6 signup text-center">
                <div class="card-body">
                  <h5 class="card-title">WHY JOBCONNECT?</h5>
                  <p class="card-text">JobConnect is a platform to help jobseekers get there dream jobs with no stress and also help Employers meet highly-skilled Candidates without even leaving the comfort of there homes. </p>
                  <p className="card-text">
                    We partner with top compaines across the globe
                    <div className="partners mt-2">
                      <img src="images/logo1.png" alt="" width={70} height={30} className="mr-2"/>
                      <img src="images/logo3.jpeg" alt="" width={70} height={30} className="mr-2"/>
                      <img src="images/logo4.png" alt="" width={70} height={30} className="mr-2"/>
                    </div>
                  </p>
                  <p className="card-text">
                    We provide up to <span style={{fontWeight: "700"}}>50,000+</span> Jobs spread across all fields available, What are you waiting for?!.
                  </p>
                  <h5 className="card-text">
                     JOIN US NOW AND GET CONNECTED.
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />

        {/* NEWSLETTER */}
        <div className="heading d-flex justify-content-center align-items-center flex-column ">
          <h1 className="jumbotron-fluid">TESTIMONIES</h1>
          <p className="text-muted text-center">How JobConect has helped Employers & Candidates in recent years</p>
        </div>
        <div className=" mb-5">
          <div className="container test p-5">
            <div className="row justify-content-center align-items-center">
              <div className="col-md-4 col-12">
                <div className="row d-flex justify-content-center align-items-center">
                  <img
                    src="images/profilepic2.png"
                    alt=""
                    width={80}
                    height={80}
                    className="col-4"
                  />
                  <div className="col-8">
                    <h4 className="">CANDIDATE</h4>
                    <hr />
                    <p>
                      Joined JobConnect after a year of Jobseeking and in two months they helped me get two very suitable Jobs. Thank you JobConnect
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-12">
                <div className="row d-flex justify-content-center align-items-center">
                  <img
                    src="images/profilepic2.png"
                    alt=""
                    width={80}
                    height={80}
                    className="col-4"
                  />
                  <div className="col-8">
                    <h4 className="">CANDIDATE</h4>
                    <hr />
                    <p>
                      Tired for working and getting underpaid, decided to join JobConnect, In a month I got a very well paying Job. I love you JobConnect
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-12">
                <div className="row d-flex justify-content-center align-items-center">
                  <img
                    src="images/profilepic2.png"
                    alt=""
                    width={80}
                    height={80}
                    className="col-4"
                  />
                  <div className="col-8">
                    <h4 className="">EMPLOYER</h4>
                    <hr />
                    <p>
                      JobConnect made everything stressful about recruiting go away, i posted my Job here and they helped me get top Candidates. Thank You
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />

        {/* ADS */}
        <div className="container-fluid m-0 no-gutters p-0">
          <div className="ad">
            <div class="card bg-dark border-0">
              <img src="images/team5.jpg" class="card-img adpic" alt="..." />
              <div class="card-img-overlay d-flex justify-content-center align-items-center flex-column">
                <h5 class="card-text adtext text-danger text-center">Subscribe to our Newsletter to be able to receive latest information and hottest Jobs availabe</h5>
              </div>
            </div>
          </div>
        </div>

      </>
    );
  }
}

export default Main;

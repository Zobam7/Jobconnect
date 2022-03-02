import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import React from 'react';
import "./footer.css"

class Footer extends React.Component {
    render() { 
        return (
            <>
            <div className="foot container-fluid p-0 m-0 no-gutters">
            <footer
          className="page-footer font-small unique-color-dark"
          style={{ backgroundColor: "black", color: "white" }}
        >
          <div className='bg-danger'>
            <div className="container">
              <div className="row py-4 d-flex align-items-center">
                <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                  <h6 className="mb-0">SUBSCRIBE TO OUR NEWSLETTER!</h6>
                </div>
                <div className="footersub col-md-6 col-lg-7 text-center text-md-right">
                    <FontAwesomeIcon icon={ faEnvelope } className='footersubicon text-dark'/>
                    <input
                      type="search"
                      className="formsearch"
                      placeholder="Enter your Email..."
                    />
                    <button className='btn btn-lg btn-outline-danger ml-auto'>SUBSCRIBE</button>
                  </div>
              </div>
            </div>
          </div>

          <div className="container text-center text-md-left mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase font-weight-bold">
                    <a href="">Get To Know Us</a> 
                </h6>
                <hr
                  className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                  width="60px"
                />
                <p><a href="">About JobConnect</a> </p>
                <p><a href="">Blogs</a> </p>
                <p><a href="">Careers</a> </p>
                <p><a href="">Terms and Conditons</a> </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase font-weight-bold">
                    <a href="">Job Categories</a>
                
                </h6>
                <hr
                  className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                  width="60px"
                />
                <p>
                  <a href="#!">Full Time Job</a>
                </p>
                <p>
                  <a href="#!">Part Time Job</a>
                </p>
                <p>
                  <a href="#!">Intership Job</a>
                </p>
                <p>
                  <a href="#!">Work From Home</a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase font-weight-bold">
                  <a href="">Let Us Help You</a> 
                </h6>
                <hr
                  className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                  width="60px"
                />
                <p>
                  <a href="#!">Your Account</a>
                </p>
                <p>
                  <a href="#!">Applications</a>
                </p>
                <p>
                  <a href="#!">Your Resume</a>
                </p>
                <p>
                  <a href="#!">Help</a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase font-weight-bold"><a href="">Contact</a> </h6>
                <hr
                  className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                  width="60px"
                />
                <p>
                    <a href=""><InstagramIcon /> Follow us on Instagram</a>
                  
                </p>
                <p>
                  <a href=""><TwitterIcon /> Follow us on Twitter</a> 
                </p>
                <p>
                  <a href="">< LinkedInIcon /> Follow us on LinkedIn</a> 
                </p>
                <p>
                   <a href=""><FacebookIcon /> Follow us on FaceBook</a> 
                </p>
              </div>
            </div>
          </div>

          <div className="footer-copyright text-center py-3">
            {" "}
            © 2022 Copyright:
            <a href="#"> JobConnect.com</a>
          </div>
        </footer>
            </div>
            </>
        );
    }
}
 
export default Footer;
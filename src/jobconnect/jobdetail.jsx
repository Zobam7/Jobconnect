import React from "react";
import "./jobdetail.css"
import CreditCard from "@mui/icons-material/CreditCard";
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PersonIcon from '@mui/icons-material/Person';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import LocationOnIcon from '@mui/icons-material/LocationOn';


class Jobdescpri extends React.Component {
    render() {
        return (
            <>
                <div
                    className="registerpic"
                    style={{ backgroundImage: `url(images/background9.jpg)` }}
                >
                    <div className="mask rgba-gradient align-items-center">
                        <div className="container">
                            <div className="row justify-content-center align-items-center">
                                <div
                                    className="textbg col-md-6 white-text text-center text-md-center wow fadeInLeft justify-content-center align-items-center"
                                    data-wow-delay="0.3s"
                                >
                                    <h1
                                        className="h1-responsive font-weight-bold mt-4"
                                        style={{ color: "black" }}
                                    >
                                        JOB DETAILS
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid mb-0 pb-0">
                    <div className="row">
                        <div className="col-md-8 col-12 p-4">
                            <div className="row jobdetailcard">
                                <div className="col-md-4 col-12 ">
                                    <div className="card d-flex justify-content-center align-items-center border-0">
                                        <div className="card-body d-flex flex-column align-items-center justify-content-center">
                                            <img
                                                src="images/profilepic2.png"
                                                className="card-img"
                                                alt="..."
                                            />
                                            <h5 className="card-title">MicroSoft Inc</h5>
                                            <p className="card-text m-0">Web Dev</p>
                                            <p className="card-text text-muted">Yaba, Lagos</p>
                                            <p className="card-text">
                                                <button className="btn btn-outline-danger">
                                                    Apply Now
                                                </button>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-8 p-3 ">
                                    <p><CreditCard /> 200K-400k/Month </p>
                                    <p><PhoneAndroidIcon/> 09023589304 </p>
                                    <p><EmailIcon/> Example@gmail.com</p>
                                    <p><CalendarTodayIcon/> Full Time </p>
                                    <p><PersonIcon/> 20 Open Position </p>
                                    <p><VerifiedUserIcon /> No Experience Needed </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-12 p-4 ">
                            <div className=" card jobdetailcard">
                                <div className="card-body ">
                                    <h5 className="card-title"><LocationOnIcon fontSize="large"  /> Location</h5>
                                    <hr style={{ backgroundColor: "red" }} />
                                    <p className="card-text ">Package: 20K To 50K/Month</p>
                                    <p className="card-text ">https://www.example.com</p>
                                    <p className="card-text">email@gmail.com</p>
                                    <p className="card-text">Bachelor Degree</p>
                                    <p className="card-text">91 234 567 8765</p>
                                    <p className="card-text">3 Year Exp.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-8 col-12 p-4 ">
                            <div className="row jobdetailcard">
                                <div className="p-0 col-12">
                                    <h4 className="bg-dark p-4 text-white"> QUALIFCATIONS & SKILLS NEEDED</h4>
                                </div>
                                <div className="col-12">
                                    <h4>QUALIFCATIONS</h4>
                                    <p>jdcnjci cb d kdc cbkH</p>
                                    <p>jdcnjci cb d kdc cbkH</p>
                                    <p>jdcnjci cb d kdc cbkH</p>
                                    <p>jdcnjci cb d kdc cbkH</p>
                                    <h4>SKILLS</h4>
                                    <p>jdcnjci cb d kdc cbkH</p>
                                    <p>jdcnjci cb d kdc cbkH</p>
                                    <p>jdcnjci cb d kdc cbkH</p>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-4 col-12 p-4">
                            <div className="card jobdetailcard">
                                <div className="card-body">
                                    <h5 className="card-title">Opening Hours</h5>
                                    <hr style={{ backgroundColor: "red" }} />
                                    <p className="card-text d-flex justify-content-between"><span className="ml-0">Monday</span><span className="">9am - 5pm</span></p>
                                    <p className="card-text d-flex justify-content-between"><span className="ml-0">Tuesday</span><span className="">9am - 5pm</span></p>
                                    <p className="card-text d-flex justify-content-between"><span className="ml-0">Wednesday</span><span className="">9am - 5pm</span></p>
                                    <p className="card-text d-flex justify-content-between"><span className="ml-0">Thursday</span><span className="">9am - 5pm</span></p>
                                    <p className="card-text d-flex justify-content-between"><span className="ml-0">Friday</span><span className="">9am - 5pm</span></p>
                                    <p className="card-text d-flex justify-content-between"><span className="ml-0">Saturday</span><span className="">9am - 5pm</span></p>
                                    <p className="card-text d-flex justify-content-between"><span className="ml-0">Sunday</span><span className="">Closed</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Jobdescpri;

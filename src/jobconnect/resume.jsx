import React from "react";
import "./resume.css"
import { withRouter } from "react-router-dom";

class Resume extends React.Component {
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
                                        RESUME
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid resume">
                    <div className="row">
                        <div className="col-12 d-flex align-items-center resumeheader">
                            <div className="col-5 col-md-3">
                                <img src="images/profilepic2.png" alt="" className="img-fluid w-100 h-100" height="100%" />
                            </div>
                            <div className="col-7 col-md-9">
                                <h3>MARY ABARA</h3>
                                <p>Senior Web Dev</p>
                                <p>11 Ameen Street</p>
                                <p>09023589304</p>
                                <button>Hire Me</button>
                            </div>
                        </div>
                    </div>
                    <div className="mt-3 p-3 details">
                        <h3>EDUCATION BACKGROUND</h3>
                        <hr />
                        <div className="row">
                            <div className="col-6 col-md-3">
                                <p>2011-2017</p>
                            </div>
                            <div className="col-6 col-md-9">
                                <div>
                                    <h5>Faith Academy Ota, Ogun State Nigeria</h5>
                                    <ul>

                                    <li className="text-muted">Secondary School</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 col-md-3">
                                <p>2018-2022</p>
                            </div>
                            <div className="col-6 col-md-9">
                                <div>
                                    <h5>University Of Lagos Lagos, Nigeria</h5>
                                    <ul>

                                    <li className="text-muted">B.sc Biochemistry</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-3 p-3 details">
                        <h3>EXPERIENCE</h3>
                        <hr />
                        <div className="row">
                            <div className="col-6 col-md-3">
                                <p>2019-2021</p>
                            </div>
                            <div className="col-6 col-md-9">
                                <div>
                                    <h5>Reddington Hospital</h5>
                                    <ul>
                                    <li className="text-muted">Ikeja Lagos, Nigeria</li>
                                    <li >Junior Nurse</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 col-md-3">
                                <p>2021-Till Date</p>
                            </div>
                            <div className="col-6 col-md-9">
                                <div>
                                    <h5>Embassy Pharmacy</h5>
                                    <ul>
                                    <li className="text-muted">Victoria IsLand Lagos, Nigeria</li>
                                    <li >Biochemist</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-3 p-3 details">
                        <h3>SKILLS</h3>
                        <hr />
                        <div className="row">
                            <div className="col-6 col-md-3">
                                <p>WEB DEVELOPMENT</p>
                            </div>
                            <div className="col-6 col-md-9">
                                <div>
                                    <ul>
                                        <li>JavaScript</li>
                                        <li>React Js</li>
                                        <li>VuE Js</li>
                                        <li>React Native</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
            </>
        );
    }
}

export default withRouter(Resume);

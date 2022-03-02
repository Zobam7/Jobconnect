import React from 'react';
import WorkIcon from '@mui/icons-material/Work';
import BackupIcon from '@mui/icons-material/Backup';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import "./dashboard.css"
import { Link, NavLink, withRouter } from "react-router-dom"
import PublishIcon from '@mui/icons-material/Publish';
import AttachmentIcon from '@mui/icons-material/Attachment';
import bsCustomFileInput from 'bs-custom-file-input'

class Dashboard extends React.Component {
    render() {
        return (
            <>
                <div className="">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card mb-3 topcards" >
                                <div className="row no-gutters d-flex align-items-center justify-content-center">
                                    <div className="col-md-4 d-flex align-items-center justify-content-center">
                                        <span><WorkIcon fontSize='large' /></span>
                                    </div>
                                    <div className="col-md-8 text-center text-md-left">
                                        <div className="card-body">
                                            <h5 className="card-title">Jobs Posted</h5>
                                            <p className="card-text">120</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-3 topcards" >
                                <div className="row no-gutters">
                                    <div className="col-md-4 d-flex align-items-center justify-content-center">
                                        <span><BackupIcon fontSize='large' /></span>
                                    </div>
                                    <div className="col-md-8 text-center text-md-left">
                                        <div className="card-body">
                                            <h5 className="card-title">Jobs Applied</h5>
                                            <p className="card-text">300</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-3 topcards" >
                                <div className="row no-gutters">
                                    <div className="col-md-4 d-flex align-items-center justify-content-center">
                                        <span><RemoveRedEyeIcon fontSize='large' /></span>
                                    </div>
                                    <div className="col-md-8 text-center text-md-left">
                                        <div className="card-body">
                                            <h5 className="card-title">Views</h5>
                                            <p className="card-text">503</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-md-4 col-12">
                            <div className="jobnear bg-white p-3">
                                <span className="jobneartitle">Jobs Near You</span>
                                <ul className="jobnearlist">
                                    <li className="jobnearlistitem">
                                        <img src="images/profilepic2.png" alt="" className="jobnearimg" />
                                        <div className="jobnearname">
                                            <span className="jobnearnames">MicroSoft Inc</span>
                                            <span className="jobneartitles">Web Dev</span>
                                        </div>
                                        <button className="jobnearbutton">
                                            View
                                        </button>
                                    </li>
                                    <li className="jobnearlistitem">
                                        <img src="images/profilepic2.png" alt="" className="jobnearimg" />
                                        <div className="jobnearname">
                                            <span className="jobnearnames">FaceBook</span>
                                            <span className="jobneartitles">Web Dev</span>
                                        </div>
                                        <button className="jobnearbutton">
                                            View
                                        </button>
                                    </li>
                                    <li className="jobnearlistitem">
                                        <img src="images/profilepic2.png" alt="" className="jobnearimg" />
                                        <div className="jobnearname">
                                            <span className="jobnearnames">Chivita</span>
                                            <span className="jobneartitles">Sales Manager</span>
                                        </div>
                                        <button className="jobnearbutton">
                                            View
                                        </button>
                                    </li>
                                    <li className="jobnearlistitem">
                                        <img src="images/profilepic2.png" alt="" className="jobnearimg" />
                                        <div className="jobnearname">
                                            <span className="jobnearnames">Google</span>
                                            <span className="jobneartitles">Data Scientist</span>
                                        </div>
                                        <button className="jobnearbutton">
                                            View
                                        </button>
                                    </li>
                                    <li className="jobnearlistitem">
                                        <img src="images/profilepic2.png" alt="" className="jobnearimg" />
                                        <div className="jobnearname">
                                            <span className="jobnearnames">Lush Hair</span>
                                            <span className="jobneartitles">Product Manager</span>
                                        </div>
                                        <button className="jobnearbutton">
                                            View
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-8 col-12 mt-md-0 mt-3">
                            <div className="resume card">
                                <img src="images/resumepic2.jpg" alt="" className="resumepic card-img img-fluid" />
                                <div className="resumetext card-img-overlay">

                                    <div className='resumehead text-justify'>
                                        <h3 className='text-center'>
                                            Dont just find. Be found. Put your CV in front of great employers
                                        </h3>
                                        {/* <hr className="resumehr" /> */}
                                    </div>
                                    
                                    
                                        <input type="file" name="file" id="file" class="inputfile" />
                                        <label for="file"><PublishIcon /> UPLOAD RESUME</label>
                                    

                                    <div className="resumebottom text-center">

                                        <p>It helps you to increase your chances of finding a suitable job and let recruiters contact you about jobs that are not needed to pay for advertising.</p>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </>
        );
    }
}

export default withRouter(Dashboard);
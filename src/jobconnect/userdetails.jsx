import React from 'react';
import { Link } from 'react-router-dom';
import "./userdetails.css"

class Userdetails extends React.Component {
    render() {
        return (
            <>
                <div className="container userde">
                    <h3>USER DETAILS</h3>
                    <div className="row usersd">
                        <div className="col-3">
                            <p className='usertitle'>First Name</p>
                            <p className='userbody'>Olisa</p>
                        </div>
                        <div className="col-3">
                            <p className='usertitle'>Last Name</p>
                            <p className='userbody'>Okoli</p>
                        </div>
                        <div className="col-3 text-wrap">
                            <p className='usertitle'>Email</p>
                            <p className='userbody'>zobam@gmail.com</p>
                        </div>
                        <div className="col-3">
                            <p className='usertitle'>Mobile Number</p>
                            <p className='userbody'>09023589304</p>
                        </div>
                    </div>
                    <h5 className='text-center mt-2'><Link>View All Details</Link> </h5>
                    
                </div>
                <br />
            </>
        );
    }
}

export default Userdetails;
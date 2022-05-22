import React from 'react'
import onepic from "../Assets/profile_pic.png";
 
const About = () => {
    return(
        <>
        <div className="container emp-profile">
            <form method="">
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-img">
                        <img src={onepic} alt="name" />
                        </div>
                    
                    </div>
                    <div className="col-md-6">
                        <div className="profile-head mt-2">
                            <h5>hi prends</h5>
                            <h6>pani ledhu</h6>
                            
                            <ul className='nav nav-tabs mt-5' role="tablist">
                                <li className='nav-item'>
                                    <a className="nav-link active" id='home-tab' data-toggle="tab" href="#home" role="tab">About</a>
                                </li>
                                <li className='nav-item'>
                                <a className="nav-link active" id='profile-tab' data-toggle="tab" href="#profile" role="tab">Timeline</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-md-2'>
                        <input type="submit" className="profile-edit-btn" name="btnAddMore" value="Edit Profile" />
                    </div>

                </div>

                <div className='row'>
                    <div className="col-md-4">
                        <div className="profile-work">
                            <p>work link</p>
                            <a href="https://www.google.com">google</a> <br/>
                            <a href="https://www.google.com">google</a>  <br/>
                            <a href="https://www.google.com">google</a>  <br/>
                            <a href="https://www.google.com">google</a>  <br/>
                            <a href="https://www.google.com">google</a>  <br/>
                        </div>
                    </div>

                    <div className="col-md-8 pl-5 about-info">
                        <div className="tab-content rofile-tab" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>User ID</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>17468174871642</p>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-6">
                                        <label>Name</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>ekfkjj</p>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-6">
                                        <label>Name</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>ekfkjj</p>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-6">
                                        <label>Name</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>ekfkjj</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </form>
        </div>
        </>
    )
}

export default About
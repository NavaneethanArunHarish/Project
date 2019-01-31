import React from 'react';
import './Dashboard.css';

const SocialMediaPost = () => {

    return (

        <div className="card">
            <div className="header">
                <label className="task-title">SOCIAL MEDIA POST</label>
            </div>
            <div className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div>
                                <img src="https://soygrowers.com/wp-content/uploads/2017/02/default_bio_600x600.jpg" alt="Avatar" className="avatar" />
                                <label className="logo-labelOne">Sabir Ahmed liked your post on Facebook</label><br/>
                                <label className="logo-comp">7 mins</label>
                            </div>
                            <hr />
                            <div>
                                <img src="https://soygrowers.com/wp-content/uploads/2017/02/default_bio_600x600.jpg" alt="Avatar" className="avatar" />
                                <label className="logo-labelOne">Ryan Wilson followed you on Twitter</label><br/>
                                <label className="logo-comp">46 mins</label>
                            </div>
                            <hr />
                            <div>
                                <img src="https://soygrowers.com/wp-content/uploads/2017/02/default_bio_600x600.jpg" alt="Avatar" className="avatar" />
                                <label className="logo-labelOne">Poornima liked your post on LinkedIn</label><br/>
                                <label className="logo-comp">7 mins</label>
                            </div>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default SocialMediaPost;
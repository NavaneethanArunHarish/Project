import React, { Component } from 'react';
import '../Profile/profile.css';
import CreateProfile from './create-profile.js';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message1: false
        }
    }

    render() {
        return (
            <div className="content">
                <label className="main-title">Profile</label>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="content">
                                    <div className="centered">
                                        <div>
                                            <label className="let-label">Let’s create your Profile!</label>
                                        </div>
                                        <div>
                                            <button type="button" className="btn btn-color" data-toggle="modal" data-target="#myModal">Create</button>
                                        </div>
                                        <div>
                                            <label className="import-label">Import will bring in data from chosen website</label>
                                        </div>
                                    </div>
                                    <div id="myModal" className="modal fade" role="dialog">
                                        <div className="modal-dialog">
                                            <div className="modal-content" style={{ height: '600px' }}>
                                                <div className="modal-body">
                                                    <div className="pull-right">
                                                    <button type="button" className="close pull-right" data-dismiss="modal">&times;</button>
                                                    </div><br/>
                                                    <div className="title-body">
                                                        <label className="create-title">Create Profile</label><br />
                                                    </div>
                                                    <div>
                                                    <CreateProfile/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;
import React from 'react';
import './Dashboard.css';
import Stepper from 'react-stepper-horizontal';

const CurrentProject = () => {

    return (

        <div className="card">
            <div className="header">
                <label className="task-title">CURRENT PROJECT</label>
            </div>
            <div className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div>
                                <div className="card">
                                    <div className="content">
                                        <img src="https://soygrowers.com/wp-content/uploads/2017/02/default_bio_600x600.jpg" alt="Avatar" className="avatar" />
                                        <label className="logo-labelTwo">Logo Design Prototype</label><br />
                                        <label className="logo-compOne">Inspizen</label>
                                        <div className="due-body">
                                            <button className="btn btn-success btn-fill due-btn">On Time</button>
                                            <label className="due-label">Due Date 26/01/2019</label>
                                            <label className="due-label">Payment Due 10,000</label>
                                        </div>
                                        <div>
                                            <Stepper steps={[{ title: 'Milestone 1' }, { title: 'Milestone 2' }, { title: 'Milestone 3' }, { title: 'Milestone 4' }]} activeStep={0} />
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="content">
                                        <img src="https://soygrowers.com/wp-content/uploads/2017/02/default_bio_600x600.jpg" alt="Avatar" className="avatar" />
                                        <label className="logo-labelTwo">Web Design Prototype</label><br />
                                        <label className="logo-compOne">ABC</label>
                                        <div className="due-body">
                                            <button className="btn btn-warning btn-fill due-btn">Delay</button>
                                            <label className="due-label">Due Date 26/01/2019</label>
                                            <label className="due-label">Payment Due 10,000</label>
                                        </div>
                                        <div>
                                            <Stepper steps={[{ title: 'Milestone 1' }, { title: 'Milestone 2' }, { title: 'Milestone 3' }, { title: 'Milestone 4' }]} activeStep={1} />
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="content">
                                        <img src="https://soygrowers.com/wp-content/uploads/2017/02/default_bio_600x600.jpg" alt="Avatar" className="avatar" />
                                        <label className="logo-labelTwo">Logo Design Prototype</label><br />
                                        <label className="logo-compOne">Inspizen</label>
                                        <div className="due-body">
                                            <button className="btn btn-success btn-fill due-btn">On Time</button>
                                            <label className="due-label">Due Date 26/01/2019</label>
                                            <label className="due-label">Payment Due 10,000</label>
                                        </div>
                                        <div>
                                            <Stepper steps={[{ title: 'Milestone 1' }, { title: 'Milestone 2' }, { title: 'Milestone 3' }, { title: 'Milestone 4' }]} activeStep={2} />
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
};

export default CurrentProject;
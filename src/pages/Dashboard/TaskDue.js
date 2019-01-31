import React from 'react';
import './Dashboard.css';

const TaskDue = () => {

    return (
        <div className="card">
            <div className="header">
                <label className="task-title">TASK DUE</label>
            </div>
            <div className="content">
                <div className="content buttons-with-margin">
                    <button type="button" className="btn btn-color">
                        Over Due
                    </button>

                    <button type="button" className="btn btn-color">
                        Past
                    </button>

                    <button type="button" className="btn btn-color">
                        Present
                    </button>

                    <button type="button" className="btn btn-color">
                        Upcoming
                    </button>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            <div>
                                <img src="https://soygrowers.com/wp-content/uploads/2017/02/default_bio_600x600.jpg" alt="Avatar" className="avatar" />
                                <label className="logo-label">Logo Design Prototype</label>
                                <label className="logo-comp">Inspizen</label>
                                <label className="logo-date">26/12/2018</label>
                            </div>
                            <div>
                                <img src="https://soygrowers.com/wp-content/uploads/2017/02/default_bio_600x600.jpg" alt="Avatar" className="avatar" />
                                <label className="logo-label">Logo Design Prototype</label>
                                <label className="logo-comp">ABC</label>
                                <label className="logo-date">26/12/2018</label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div>
                                <img src="https://soygrowers.com/wp-content/uploads/2017/02/default_bio_600x600.jpg" alt="Avatar" className="avatar" />
                                <label className="logo-label">Illustration for book</label>
                                <label className="logo-comp">Inspizen</label>
                                <label className="logo-date">26/12/2018</label>
                            </div>
                            <div>
                                <img src="https://soygrowers.com/wp-content/uploads/2017/02/default_bio_600x600.jpg" alt="Avatar" className="avatar" />
                                <label className="logo-label">Logo Design Prototype</label>
                                <label className="logo-comp">ABC</label>
                                <label className="logo-date">26/12/2018</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default TaskDue;
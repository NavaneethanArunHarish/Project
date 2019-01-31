import React from 'react';
import TaskDue from './TaskDue';
import CurrentProject from './CurrentProject';
import SocialMediaPost from './SocialMediaPost';
import './Dashboard.css';

const Dashboard = () => (
  <div className="content">
    <label className="main-title">Overview</label>
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <TaskDue />
        </div>
        <div className="col-md-12">
          <CurrentProject />
        </div>
        <div className="col-md-12">
          <SocialMediaPost />
        </div>
      </div>
      {/* <div className="row">
        <div className="col-md-6">
          <SocialMediaPost />
        </div>
      </div> */}
    </div>
  </div>
);

export default Dashboard;
import React, { Component } from 'react';
import '../Profile/profile.css';

class Background extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.handleNext = this.handleNext.bind(this);
    }

    handleNext = () => {
        this.props.switch(3);
    }

    render() {
        return (
            <div className="centeredone">
                <form>
                    <div className="form-group">
                        <label for="email">PROJECT NAME</label>
                        <input type="text" className="form-control" id="email" />
                    </div>
                    <div className="form-group">
                        <label for="pwd">JOB TITLE</label><br />
                        <select class="form-control" id="sel1">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label for="email">COMPANY NAME</label>
                        <input type="text" className="form-control" id="email" />
                    </div>
                    <div className="form-group">
                        <label>ADDED</label><br />
                        <div className="service-div">
                            <img src="https://soygrowers.com/wp-content/uploads/2017/02/default_bio_600x600.jpg" alt="Avatar" className="avatarOne" />
                            <label className="service-title">Inspizen</label>
                            <label className="service-title">Dec 2018 to Jan 2019</label>
                            <label className="service-title">X</label>
                        </div>
                        <div className="service-div">
                            <img src="https://soygrowers.com/wp-content/uploads/2017/02/default_bio_600x600.jpg" alt="Avatar" className="avatarOne" />
                            <label className="service-title">Exit Design</label>
                            <label className="service-title">Dec 2018 to Jan 2019</label>
                            <label className="service-title">X</label>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-color pull-right" onClick={this.handleNext}>Next</button>
                </form>
            </div>
        );
    }
}

export default Background;
import React, { Component } from 'react';
import '../Profile/profile.css';

class Tools extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.handleNext = this.handleNext.bind(this);
    }

    handleNext = () => {
        this.props.switch(4);
    }

    render() {
        return (
            <div className="centeredone">
                <form>
                    <div className="form-group">
                        <label for="email">SEARCH TOOLS</label>
                        <input type="text" className="form-control" id="email" />
                    </div>
                    <div className="form-group">
                        <label>ADDED</label><br />
                        <div className="service-div">
                            <img src="https://soygrowers.com/wp-content/uploads/2017/02/default_bio_600x600.jpg" alt="Avatar" className="avatarOne" />
                            <label className="service-title">Adobe Xd</label>
                            <label className="service-title">X</label>
                        </div>
                        <div className="service-div">
                            <img src="https://soygrowers.com/wp-content/uploads/2017/02/default_bio_600x600.jpg" alt="Avatar" className="avatarOne" />
                            <label className="service-title">Sketch App</label>
                            <label className="service-title">X</label>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-color pull-right" onClick={this.handleNext}>Next</button>
                </form>
            </div>
        );
    }
}

export default Tools;
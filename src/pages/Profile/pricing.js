import React, { Component } from 'react';
import '../Profile/profile.css';

class Pricing extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.handleNext = this.handleNext.bind(this);
    }

    handleNext = () => {
        this.props.switch(0);
    }

    render() {
        return (
            <div className="centeredone">
                <form>
                    <div className="form-group">
                        <label>PRICING STRUCTURE</label><br/>
                        <button type="submit" className="btn btn-color">Hourly</button>
                        <button type="submit" className="btn btn-color">Per Project</button>
                    </div>
                    <div className="form-group">
                        <label for="email">YOUR PRICE</label>
                        <input type="text" className="form-control" id="email" />
                    </div>
                    <div className="title-body">
                        <label>₹ xxxx Per hour</label>
                    </div>
                    <button type="submit" className="btn btn-color pull-right" data-dismiss="modal" onClick={this.handleNext}>Submit</button>
                </form>
            </div>
        );
    }
}

export default Pricing;
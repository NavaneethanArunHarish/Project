import React, { Component } from 'react';
import '../Profile/profile.css';

class BasicInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.handleNext = this.handleNext.bind(this);
    }

    handleNext = () => {
        this.props.switch(1);
    }

    render() {
        return (
            <div className="centeredone">
                <form>
                    <div className="form-group">
                        <label for="email">FULL NAME</label>
                        <input type="text" className="form-control" id="email" />
                    </div>
                    <div className="form-group">
                        <label for="pwd">JOB TITLE</label><br/>
                        <select class="form-control" id="sel1">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label for="pwd">ABOUT ME</label><br />
                        <textarea class="form-control" rows="7" cols="45" id="comment"></textarea>
                    </div>
                    <button type="submit" className="btn btn-color pull-right" onClick={this.handleNext}>Next</button>
                </form>
            </div>
        );
    }
}

export default BasicInfo;
import React, { Component } from 'react';
import '../Portfolio/portfolio.css';
import Alert from 'sweetalert-react';

class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message1: false
        }
    }

    render() {
        return (
            <div className="content">
                <label className="main-title">Portfolio</label>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="content">
                                    <div className="centered">
                                        <div>
                                            <label className="let-label">Let’s create your portfolio!</label>
                                        </div>
                                        <div>
                                            <button type="button" className="btn btn-color" onClick={() => this.setState({ message1: true })}>Create</button>
                                            <button type="button" className="btn btn-color">Import</button>
                                        </div>
                                        <div>
                                            <label className="import-label">Import will bring in data from chosen website</label>
                                        </div>
                                    </div>
                                    <Alert
                                        title=""
                                        show={this.state.message1}
                                        text="Here's a message!"
                                        onConfirm={() => this.setState({ message1: false })} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Portfolio;
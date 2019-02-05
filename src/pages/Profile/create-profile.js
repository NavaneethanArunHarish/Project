import React, { Component } from 'react';
import '../Profile/profile.css';
import Stepper from 'react-stepper-horizontal';
import BasicInfo from './basic-info.js';
import ServiceOffered from './service-offered.js';
import Background from './background.js';
import Tools from './tools';
import Pricing from './pricing';

class CreateProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        }
        this.handleSwitch = this.handleSwitch.bind(this);
    }

    handleSwitch(data) {
        this.setState({ value: data });
    }

    render() {
        return (
            <div>
                <Stepper steps={[{ title: 'Basic Information' }, { title: 'Services Offered' }, { title: 'Background' }, { title: 'Tools' }, { title: 'Pricing' }]} activeStep={this.state.value} />
                {this.state.value === 0 ? <BasicInfo switch={this.handleSwitch}/> : ''}
                {this.state.value === 1 ? <ServiceOffered switch={this.handleSwitch}/> : ''}
                {this.state.value === 2 ? <Background switch={this.handleSwitch}/> : ''}
                {this.state.value === 3 ? <Tools switch={this.handleSwitch}/> : ''}
                {this.state.value === 4 ? <Pricing switch={this.handleSwitch}/> : ''}
            </div>
        );
    }
}

export default CreateProfile;
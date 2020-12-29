'use strict';

import React, {Component} from 'react';
import './index.css';

export default class DeleteButton extends Component {
    render() {
        return (
        <button isdeletebutton="" className="button" onClick={this.props.onClick}/>
        );      
    }
}
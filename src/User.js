'use strict';

import React, {Component} from 'react';
import './index.css';

export default class User extends Component {
    render() {
        return(
            <div className="user">{this.props.userName}</div>
        );
    }
}
'use strict';

import React, {Component} from 'react';

export default class TextOfTheComment extends Component {
    render() {
        return(
            <div>{this.props.text}</div>
        );
    }
}
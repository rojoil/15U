import React, { Component} from "react";
import User from './User';
import TextOfTheComment from './TextOfTheComment';
import DeleteButton from './DeleteButton';
import './index.css';

export default class Comment extends Component{
    setDate() {
        const date = new Date();
        return date.toLocaleString();
    };

    render() {
        return(
            <div number={this.props.number} className="comment">
                <User userName={this.props.userName}/>
                <TextOfTheComment className="text" text={this.props.text}/>
                <div className="comment-bottom">
                    <div className="date">{this.setDate()}</div>
                    <DeleteButton onClick={this.props.onClick}/>
                </div>
            </div>
        );
    };
}
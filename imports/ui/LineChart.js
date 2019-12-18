import {Meteor} from "meteor/meteor";
import React from 'react';

export default class LineChart extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                {this.props.list}
            </div>
        );
    }
}
import {Meteor} from "meteor/meteor";
import React from 'react';

export default class LineChart extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            data:[4,5,6]
        };

    }
    componentDidMount() {
        const one = this.props.list;
        this.setState({data:one})
    }

    render() {
        const one = this.props.list;

        return(
            <div>
                {one}
                {this.state.data}
            </div>
        );
    }
}
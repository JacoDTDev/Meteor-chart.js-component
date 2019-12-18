import {Meteor} from "meteor/meteor";
import React from 'react';
import {CustomerOne} from "../api/customerOne";

export default class LineChart extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            data:[]
        };

    }
    componentDidMount() {
    this.tracker= Tracker.autorun(()=>{
        const one = CustomerOne.find().fetch();
        const three = one.map((x)=>{return x.value});
        this.setState({data:three})
    })
    }
    render() {

        const two = this.state.data;
        return(
            <div>
                {two}
            </div>
        );
    }
}
import {Meteor} from "meteor/meteor";
import React from 'react';
import {CustomerOne} from "../api/customerOne";
import {Line} from 'react-chartjs-2'

export default class LineChart extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            data:{
                num1:[],
                num2:[{num3:[9,8,7]},{}]
            }

        };

    }
    componentDidMount() {
    this.tracker= Tracker.autorun(()=>{
         const one = CustomerOne.find().fetch();
         const three = one.map((x)=>{return x.value});
        // this.setState({data:three})
        this.setState({data:{num2:[{num3:three}]}})
    })
    }
    render() {

        const two = this.state.data.num2[0].num3;
        return(
            <div>
                {two}
            </div>
        );
    }
}
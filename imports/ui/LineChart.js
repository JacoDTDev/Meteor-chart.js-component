import {Meteor} from "meteor/meteor";
import React from 'react';
import {CustomerOne} from "../api/customerOne";
import {Line} from 'react-chartjs-2'

export default class LineChart extends React.Component{

    constructor(props) {
        super(props);
        // this.state = {
        //     data:{
        //         num1:[],
        //         num2:[{num3:[9,8,7]},{}]
        //     }
        //
        // };
        this.state = {
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', "July", 'August', 'September', 'October', 'November', 'December'],
                datasets: [
                    {
                        label: "",
                        backgroundColor: '',
                        data: []
                    }
                ]
            }
        }

    }
    componentDidMount() {
        this.tracker=Tracker.autorun(()=>{
            const one = CustomerOne.find().fetch();
            const three = one.map((x)=>{return x.value});
            this.setState({data:{datasets:[{label: "CustomerOne",
                        backgroundColor: 'rgba(255,0,255,0.75)',data: three},{label: "CustomerTwo",
                        backgroundColor: 'rgba(0,255,0,0.75)',
                        data: [14, 15, 21, 0, 12, 2, 12, 25, 11, 5, 9, 30]}]}});

        })
    }

    // componentDidMount() {
    // this.tracker= Tracker.autorun(()=>{
    //      const one = CustomerOne.find().fetch();
    //      const three = one.map((x)=>{return x.value});
    //     // this.setState({data:three})
    //     this.setState({data:{num2:[{num3:three}]}})
    // })
    // }
    // render() {
    //
    //     const two = this.state.data.num2[0].num3;
    //     return(
    //         <div>
    //             {two}
    //         </div>
    //     );
    // }
    render() {
        return (
            <div style={{position: 'relative', width: 600, height: 550}}>
                <h3>LineChart</h3>
                <Line
                    options={{
                        responsive: true
                    }}
                    data={this.state.data}
                />
            </div>

        );
    }
}
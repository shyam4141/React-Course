import React, { Component } from 'react';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showValue: false,
            count : 0,
        };
        console.log('constuctor will be called first', props);
         this.handleToggle = this.handleToggle.bind(this);
    }

    componentWillMount() {
        // deprecated but it can be used until react v17..
        console.log('Component will mount before render');
    }

    componentDidMount() {
        // Component is mounted, perform initialization
        // make calls to an API that fetch data and update the state with that response
        console.log('Component mounted');
    }

    componentDidUpdate(prevProps,prevState){
        console.log("calls for every data change");
        if (this.props.data !== prevProps.data) {
            // Perform specific actions when `props.data` changes
            // Code here will only execute when `props.data` changes
            console.log("calls when props changes ", this.props.data);
          }

          if (this.state.showValue !== prevState.showValue) {
            // Perform specific actions when `showValue` changes
            // Code here will only execute when `showValue` changes
            console.log("calls when state data changed", this.state.showValue);
          }
    }

    

    componentWillUnmount() {
        // Component is unmounting, perform cleanup or unsubscribe here
        console.log('Component unmounted');
    }

    // handleToggle1 = () => {
    //     this.setState({ showValue: !this.state.showValue})
    //     // this.setState({ count: this.state.count + 1 })
    // };

    handleToggle(){
        this.setState({ showValue: !this.state.showValue})
        this.setState({ count: this.state.count + 1 })
    };


    render() {
        return (
            <div>
                <p style={{paddingTop:'30px'}}>button in main.js which change the state inside this component</p>
                <button onClick={this.handleToggle}>Toggle in Main</button>
              
                {/* <button onClick={this.handleToggle1}>Toggle in Main</button> */}
                {this.state.showValue ? <p>The value is true</p> : <p>The value is false</p>}
                {/* {this.state.count} */}
            </div>
        );
    }
}

export default Main;
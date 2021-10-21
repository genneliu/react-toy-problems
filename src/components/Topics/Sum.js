import React, {Component} from 'react';


export default class Sum extends Component {

    constructor() {
        super();

        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    handleChange(val) {
        this.setState({ number1: val })
    }

    handleChange2(val) {
        this.setState({ number2: val })
    }

   calculateSum(number1, number2) {
       let parse1 = parseInt(this.state.number1)
       let parse2 = parseInt(this.state.number2)
       
        let sumBoth = parse1+parse2
        this.setState({sum: sumBoth})
    }

    render() {
        return (
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <span className="resultsBox"> The Sum is: { JSON.stringify(this.state.sum, null, 10)}</span>
                <input className="inputLine" onChange={ (e, f) => this.handleChange(e.target.value)}></input>
                <button className="confirmationButton" onClick={ () => {this.calculateSum(this.state.number1, this.state.number2, 10)}}></button>
            </div>
        )
    }
};
import React, { Component } from 'react';

export default class FilterString extends Component {

    constructor() {
        super();

        this.state = {
            unfilteredArray: ["Luna", "is", "the", "best", "dog"],
            userInput: '',
            filteredArray: [],
        }
    }

    //create onchange prop for input element
    handleChange(val) {
        this.setState({ userInput: val })
    }

    //onclick prop calls method
    filterString() {
        var UnArray = this.state.unfilteredArray
        var filter = this.state.userInput

        var filteredString = (UnArray.indexOf(filter) > -1);

        this.setState({ filteredArray: filteredString })
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB"> 
                <h4>Filter String</h4>
                <span className="puzzleText"> String: {JSON.stringify(this.state.unfilteredString)}</span>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value)}></input>
                <button className="confirmationbutton" onClick={ () => {this.filterString(this.state.filteredString)}}></button>
                <span className="resultsBox filterStringRB"></span>
            </div>
        )
    }
}
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
    filterString(userInput) {
        var UnArray = this.state.unfilteredArray
        var filteredString = [];
    
        for (let i = 0; i < UnArray.length; i++) {
            if (UnArray[i].includes(userInput)) {
                filteredString.push(UnArray[i]);
            }
        }

            


        this.setState({ filteredArray: filteredString })
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB"> 
                <h4>Filter String</h4>
                <span className="puzzleText"> String: {JSON.stringify(this.state.unfilteredArray, null, 10)}</span>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value)}></input>
                <button className="confirmationButton" onClick={ () => {this.filterString(this.state.filteredArray)}}>Filter String!</button>
                <span className="resultsBox filterStringRB">Filtered String: {JSON.stringify(this.state.filteredArray, null, 10)}</span>
            </div>
        )
    }
}
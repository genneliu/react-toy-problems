import React, { Component } from 'react';

export default class FilterObject extends Component {

    constructor() {
        super();

        this.state = {
            unfilteredArray: {
                fruit: [
                { 
                    name: "Watermelon",
                    type: "fruit"
                },
                { 
                    name: "Blueberry",
                    type: "fruit"
                },
                { 
                    name: "Peach",
                    type: "fruit"
                },
                { 
                    name: "Spinach",
                    type: "vegetable"
                },
            ]
        },


            userInput: '',
            filteredArray: []
        }
    }

    handleChange(val) {
        this.setState({ userInput: val });
      }

    assignFilterObject(prop) {
        var fruits = this.state.unfilteredArray.fruit;
        var filteredFruit = [];


        for ( var i = 0; i < fruits.length; i++ ) {
            if (fruits[i].hasOwnProperty(prop)) {
                filteredFruit.push(fruits[i]);
            }
        }

        this.setState({ filteredArray: filteredFruit })
    }


    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText"> Original: { JSON.stringify(this.state.unfilteredArray.fruit, null, 10) }</span>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
                <button className="confirmationButton" onClick={ () => { this.assignFilterObject(this.state.userInput) }}>Filter</button>
                <span className="resultsBox filterObjectRB"> Filtered: { JSON.stringify(this.state.filteredArray, null, 10) }</span>
            </div>
        )
    }
}

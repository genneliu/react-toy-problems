import React, { Component } from 'react';

export default class Palindrome extends Component {

    constructor() {
        super();

        this.state = {
            userInput: '',
            palindrome: ''
        };
    }

    //onchange
    handleChange(val) {
        this.setState({ userInput: val })
    }

    //onclikc
    checkPalindrome(userInput) {
        var checkedP = userInput.split('').reverse().join('');

        if(checkedP === userInput) {
            this.setState({ palindrome: 'true' })
        } else {
            this.setState({ palindrome: 'false'})
        }
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value)}></input>
                <button className="confirmationButton" onClick={ () => {this.checkPalindrome(this.state.userInput)}}>Palindrome?</button>
                <span className="resultsBox"> Result: {(this.state.palindrome)}</span>
            </div>
        )
    }
}
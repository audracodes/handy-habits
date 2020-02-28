import React, { Component } from 'react';

// This needs to appear/disappear

class Instructions extends Component {
    render() {
        return (
            <ul>
                <li>Select the day</li>
                <li>Check the box to make the habit as done, enter a note if you'd like</li>
                <li>Click submit</li>
                <li>The days you have completed your habit will be blue, and days you have added a note have a dot. </li>
            </ul>
        );
    }
}

export default Instructions;
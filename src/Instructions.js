import React, { Component } from 'react';

// This needs to appear/disappear

class Instructions extends Component {
    render() {
        return (
            <ul className='instructions wrapper' >
                <li>Select the day.</li>
                <li>Check the box to mark the habit as done, and enter a note if you'd like.</li>
                <li>Click submit to store it!</li>
                <li>Your habit logs will appear below the tracker.</li>
            </ul>
        );
    }
}

export default Instructions;
import React, { Component } from 'react';

// This needs to appear/disappear

class Instructions extends Component {
    render() {
        return (
            <ul className='instructions' >
                <li>Select the day.</li>
                <li>Check the box to mark the habit as done, and enter a note if you'd like.</li>
                <li>Click submit to store it!</li>
                <li>The days you have completed your habit will be blue, and days you have added a note have a dot. </li>
                <li>To retrieve your data: select the day and click "get info".</li>
            </ul>
        );
    }
}

export default Instructions;
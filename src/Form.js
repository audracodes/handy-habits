// Form Component

import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
            <div className=' wrapper' >
                <form action="submit" onSubmit = {this.props.handleFormSubmitFunc} className='form' >
                    <label htmlFor="habitDone">Habit done?</label>
                    <input type="checkbox" id="habitDone" name="done"
                    onChange={this.props.handleHabitDoneChangeFunc}/>

                    <label htmlFor="notesFromUser">Add a note:</label>
                    <input 
                    type="text" 
                    id = "notesFromUser"
                    onChange = {this.props.handleHabitChangeFunc}
                    />
                    <button type = 'submit'>Submit</button>
                </form>
            </div>
        );
    }
}

export default Form
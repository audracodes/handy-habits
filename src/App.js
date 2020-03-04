import React, { Component } from 'react';
import firebase from './firebase.js';
import Instructions from './Instructions.js';
import Form from './Form.js';
import './App.css';

class HabitApp extends Component {

    constructor() {
        super();

        this.state = {
            radioButton: 0,
            habitHistory: [],
            habitDone: false,
            userInput: ''
        }
    }

    componentDidMount() {
        const dbRef = firebase.database().ref();

        dbRef.on('value', (response) => {
            const notesFromDb = response.val();

            const stateToBeSet = [];

            for (let key in notesFromDb) {
                const habitInfo = {
                    key: key,
                    day: notesFromDb[key].day,
                    done: notesFromDb[key].done,
                    notes: notesFromDb[key].habit,
                }

                stateToBeSet.push(habitInfo);
            }

            this.setState({
                habitHistory: stateToBeSet,
            })
        })
    }

    handleHabitDoneChange = (e) => {
        this.setState ({
            habitDone: e.target.checked
        })

    }

    handleHabitChange = (event) => {
        this.setState ({
            userInput: event.target.value
        })
    }

    handleFormSubmit = (event) => {
        event.preventDefault();

        // The tracker needs a day to store information
        // Because some days the habit might not get done or users will not want to enter a note, the form will submit with only one input filled out (but needs at least one).

        if (this.state.radioButton === 0) {
            alert('Please select a day!')
        } else {

            if (this.state.userInput === "" && this.state.habitDone === false) {
                alert('Please mark off the habit or enter a note!')
            } else {
                
                const dbRef = firebase.database().ref();
        
                const objectReadyForDatabase = {
                    day: this.state.radioButton,
                    done: this.state.habitDone,
                    habit: this.state.userInput,
                }
        
                dbRef.push(objectReadyForDatabase);
        
                // This is used to reset the values of the checkbox and the text field. The radio buttons (day selector) doesn't get reset to allow for multiple logs for the same day.
                this.setState ({
                    userInput: '',
                    habitDone: false, 
                }) 
            }
          }
        }


    handleRadioButtonSelect = (event) => {
        this.setState ({
            radioButton: event.target.value,
        })
    }

    removeLog = (logKey) => {
        const dbRef = firebase.database().ref();
        dbRef.child(logKey).remove();
    }

    render() {
        return (
            <div className = 'wrapper'>
                <header>
                    <h1>Handy Habits</h1>
                    <h4>Creating a habit takes time. Track your habit over 30 days!</h4>
                </header>
                <main>
                    <Instructions /> 
                    <Form 
                    handleHabitDoneChangeFunc = {this.handleHabitDoneChange}
                    handleFormSubmitFunc = {this.handleFormSubmit}
                    handleHabitChangeFunc = {this.handleHabitChange}
                    handleRadioButtonSelectFunc = {this.handleRadioButtonSelect}
                    stateFromParent = {this.state}
                    />
                    <div className='habitLog border'>
                        <h2>Habit Log</h2>
                        <ul>
                            {this.state.habitHistory.map((log, index) => {
                                return (
                                    <li key={log.key}>
                                        <p>Day: {log.day}       Habit Done: {log.done}       Notes: {log.notes} </p>
                                        <button onClick={() => {this.removeLog(log.key)}}>Remove Log</button>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </main>
            </div>
        );
    }
}

export default HabitApp;

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
                console.log(notesFromDb[key]);
                console.log(key);
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
        console.log(e.target.checked);
        this.setState ({
            habitDone: e.target.checked
        })

    }

    handleHabitChange = (event) => {
        this.setState ({
            userInput: event.target.value
        }, ()=>{
            console.log(this.state.userInput)
        })
    }

    handleFormSubmit = (event) => {
        event.preventDefault();

        const dbRef = firebase.database().ref();

        const objectReadyForDatabase = {
            day: this.state.radioButton,
            done: this.state.habitDone,
            habit: this.state.userInput,
        }

        console.log(event);
        dbRef.push(objectReadyForDatabase);


        this.setState ({
            userInput: '',
            radioButton: 0,
            habitDone: false, 
        })
    }

    handleRadioButtonSelect = (event) => {
        console.log(event.target.value)
        this.setState ({
            radioButton: event.target.value,
        })
    }

    removeLog = (logKey) => {
        console.log(logKey);
        const dbRef = firebase.database().ref();
        dbRef.child(logKey).remove();
    }

    render() {
        console.log(this.state.habitHistory)
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
                    />
                    <div className='habitLog border'>
                        <h2>Habit Log</h2>
                        <ul>
                            {this.state.habitHistory.map((log, index) => {
                                return (
                                    <li key={log.key}>
                                        <p>Day:{log.day} Notes: {log.notes} </p>
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

import React, { Component } from 'react';
import firebase from './firebase.js';
import Instructions from './Instructions.js'
import DayGrid from './DayGrid.js'
import Form from './Form.js'
import './App.css';

class HabitApp extends Component {

    constructor() {
        super();

        this.state = {
            array: [],
            habitDone: '',
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
                    name: notesFromDb[key],
                }

                stateToBeSet.push(habitInfo);
            }

            this.setState({
                array: stateToBeSet,
                // userNotes: stateToBeSet,
                // userInput: '',

            })
        })
    }

    handleHabitDoneChange = (e) => {
        this.setState ({
            habitDone: e.target.value
        }, ()=>{
            console.log(this.state.habitDone);
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

        const object = {
            done: this.state.habitDone,
            habit: this.state.userInput,
        }

        console.log(object);
        dbRef.push(object);


        this.setState ({
            userInput: '',
        })
    }

    render() {
        return (
                <main className = 'wrapper'>
                <header>
                    <h1>Handy Habits</h1>
                    <h4>Creating a habit takes time. Track your habit over 30 days!</h4>
                </header>
                <main>
                    <Instructions /> 
                    <DayGrid />
                    <Form 
                    handleHabitDoneChangeFunc = {this.handleHabitDoneChange}
                    handleFormSubmitFunc = {this.handleFormSubmit}
                    handleHabitChangeFunc = {this.handleHabitChange} 
                    />
                </main>
                </main>
        );
    }
}

export default HabitApp;

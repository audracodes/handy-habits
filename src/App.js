import React, { Component } from 'react';
import firebase from './firebase.js';
import Instructions from './Instructions.js'
import DayGrid from './DayGrid.js'
import logo from './logo.svg';
import './App.css';




class HabitApp extends Component {
    render() {
        return (
            <div className = 'wrapper'>
              <h1>Handy Habits</h1>
              <p>Creating a habit takes time. Track your habit over 30 days!</p>
              <Instructions /> 
              <DayGrid />
            </div>
        );
    }
}

export default HabitApp;

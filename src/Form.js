// Form Component

import React, { Component } from 'react';

class Form extends Component {

    render() {
        // const clearRadio = document.getElementById([`${this.props.stateFromParent.radioButton}`]).attr('checked',false);

        return (
            <div>
                <form 
                      action="submit" 
                      onSubmit = {this.props.handleFormSubmitFunc}
                      className='border'>

                    <fieldset
                      className = "dayGrid" 
                      onChange = {this.props.handleRadioButtonSelectFunc}
                      checked = {this.props.stateFromParent.radioButton}> 
                        <legend>Day</legend>
                        <h2>Day</h2>

                        <label htmlFor="1" tabIndex="1">1
                            <input type="radio" id="1" name="day" value="1"/>
                        </label>

                        <label htmlFor="2" tabIndex="1">2</label>
                        <input type="radio" id="2" name="day" value="2" />

                        <label htmlFor="3" tabIndex="1">3</label>
                        <input type="radio" id="3" name="day" value="3" />

                        <label htmlFor="4" tabIndex="1">4</label>
                        <input type="radio" id="4" name="day" value="4" />

                        <label htmlFor="5" tabIndex="1">5</label>
                        <input type="radio" id="5" name="day" value="5" />

                        <label htmlFor="6" tabIndex="1">6</label>
                        <input type="radio" id="6" name="day" value="6" />

                        <label htmlFor="7" tabIndex="1">7</label>
                        <input type="radio" id="7" name="day" value="7" />

                        <label htmlFor="8" tabIndex="1">8</label>
                        <input type="radio" id="8" name="day" value="8" />

                        <label htmlFor="9" tabIndex="1">9</label>
                        <input type="radio" id="9" name="day" value="9" />

                        <label htmlFor="10" tabIndex="1">10</label>
                        <input type="radio" id="10" name="day" value="10" />

                        <label htmlFor="11" tabIndex="1">11</label>
                        <input type="radio" id="11" name="day" value="11" />

                        <label htmlFor="12" tabIndex="1">12</label>
                        <input type="radio" id="12" name="day" value="12" />

                        <label htmlFor="13" tabIndex="1">13</label>
                        <input type="radio" id="13" name="day" value="13" />

                        <label htmlFor="14" tabIndex="1">14</label>
                        <input type="radio" id="14" name="day" value="14" />

                        <label htmlFor="15" tabIndex="1">15</label>
                        <input type="radio" id="15" name="day" value="15" />

                        <label htmlFor="16" tabIndex="1">16</label>
                        <input type="radio" id="16" name="day" value="16" />

                        <label htmlFor="17" tabIndex="1">17</label>
                        <input type="radio" id="17" name="day" value="17" />

                        <label htmlFor="18" tabIndex="1">18</label>
                        <input type="radio" id="18" name="day" value="18" />

                        <label htmlFor="19" tabIndex="1">19</label>
                        <input type="radio" id="19" name="day" value="19" />

                        <label htmlFor="20" tabIndex="1">20</label>
                        <input type="radio" id="20" name="day" value="20" />

                        <label htmlFor="21" tabIndex="1">21</label>
                        <input type="radio" id="21" name="day" value="21" />

                        <label htmlFor="22" tabIndex="1">22</label>
                        <input type="radio" id="22" name="day" value="22" />

                        <label htmlFor="23" tabIndex="1">23</label>
                        <input type="radio" id="23" name="day" value="23" />

                        <label htmlFor="24" tabIndex="1">24</label>
                        <input type="radio" id="24" name="day" value="24" />

                        <label htmlFor="25" tabIndex="1">25</label>
                        <input type="radio" id="25" name="day" value="25" />

                        <label htmlFor="26" tabIndex="1">26</label>
                        <input type="radio" id="26" name="day" value="26" />

                        <label htmlFor="27" tabIndex="1">27</label>
                        <input type="radio" id="27" name="day" value="27"/>

                        <label htmlFor="28" tabIndex="1">28</label>
                        <input type="radio" id="28" name="day" value="28" />

                        <label htmlFor="29" tabIndex="1">29</label>
                        <input type="radio" id="29" name="day" value="29" />

                        <label htmlFor="30" tabIndex="1">30</label>
                        <input type="radio" id="30" name="day" value="30" />


                    </fieldset>

                    <label 
                    htmlFor="habitDone">Habit done?</label>
                    <input 
                        type="checkbox" 
                        id="habitDone" 
                        name="done"
                        onChange={this.props.handleHabitDoneChangeFunc}
                        checked = {this.props.stateFromParent.habitDone}/>

                    <label 
                    htmlFor="notesFromUser"
                    className='leftMove'>Add a note:</label>
                    <input 
                        type="text" 
                        id = "notesFromUser"
                        onChange = {this.props.handleHabitChangeFunc} 
                        value = {this.props.stateFromParent.userInput}
                    />
                    <button type = 'submit'>Submit</button>
                </form>
            </div>
        );
    }
}

export default Form
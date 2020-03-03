// Form Component

import React, { Component } from 'react';

class Form extends Component {

    render() {
        return (
            <div>
                <form 
                      action="submit" 
                      onSubmit = {this.props.handleFormSubmitFunc}
                      className='border'>

                    <fieldset
                      className = 'dayGrid' 
                      onChange = {this.props.handleRadioButtonSelectFunc}> 
                        <legend>Day</legend>
                        <h2>Day</h2>

                        <label htmlFor="1">1</label>
                        <input type="radio" id="1" name="day" value="1" />

                        <label htmlFor="2">2</label>
                        <input type="radio" id="2" name="day" value="2" />

                        <label htmlFor="3">3</label>
                        <input type="radio" id="3" name="day" value="3" />

                        <label htmlFor="4">4</label>
                        <input type="radio" id="4" name="day" value="4" />

                        <label htmlFor="5">5</label>
                        <input type="radio" id="5" name="day" value="5" />

                        <label htmlFor="6">6</label>
                        <input type="radio" id="6" name="day" value="6" />

                        <label htmlFor="7">7</label>
                        <input type="radio" id="7" name="day" value="7" />

                        <label htmlFor="8">8</label>
                        <input type="radio" id="8" name="day" value="8" />

                        <label htmlFor="9">9</label>
                        <input type="radio" id="9" name="day" value="9" />

                        <label htmlFor="10">10</label>
                        <input type="radio" id="10" name="day" value="10" />

                        <label htmlFor="11">11</label>
                        <input type="radio" id="11" name="day" value="11" />

                        <label htmlFor="12">12</label>
                        <input type="radio" id="12" name="day" value="12" />

                        <label htmlFor="13">13</label>
                        <input type="radio" id="13" name="day" value="13" />

                        <label htmlFor="14">14</label>
                        <input type="radio" id="14" name="day" value="14" />

                        <label htmlFor="15">15</label>
                        <input type="radio" id="15" name="day" value="15" />

                        <label htmlFor="16">16</label>
                        <input type="radio" id="16" name="day" value="16" />

                        <label htmlFor="17">17</label>
                        <input type="radio" id="17" name="day" value="17" />

                        <label htmlFor="18">18</label>
                        <input type="radio" id="18" name="day" value="18" />

                        <label htmlFor="19">19</label>
                        <input type="radio" id="19" name="day" value="19" />

                        <label htmlFor="20">20</label>
                        <input type="radio" id="20" name="day" value="20" />

                        <label htmlFor="21">21</label>
                        <input type="radio" id="21" name="day" value="21" />

                        <label htmlFor="22">22</label>
                        <input type="radio" id="22" name="day" value="22" />

                        <label htmlFor="23">23</label>
                        <input type="radio" id="23" name="day" value="23" />

                        <label htmlFor="24">24</label>
                        <input type="radio" id="24" name="day" value="24" />

                        <label htmlFor="25">25</label>
                        <input type="radio" id="25" name="day" value="25" />

                        <label htmlFor="26">26</label>
                        <input type="radio" id="26" name="day" value="26" />

                        <label htmlFor="27">27</label>
                        <input type="radio" id="27" name="day" value="27" />

                        <label htmlFor="28">28</label>
                        <input type="radio" id="28" name="day" value="28" />

                        <label htmlFor="29">29</label>
                        <input type="radio" id="29" name="day" value="29" />

                        <label htmlFor="30">30</label>
                        <input type="radio" id="30" name="day" value="30" />


                    </fieldset>

                    <label htmlFor="habitDone">Habit done?</label>
                    <input 
                        type="checkbox" 
                        id="habitDone" 
                        name="done"
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
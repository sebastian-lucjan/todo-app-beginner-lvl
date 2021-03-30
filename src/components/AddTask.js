import React, { Component } from 'react';
import './AddTask.css';

class AddTask extends Component {
  minDate = new Date().toISOString().slice(0, 10);

  state = {
    text: '',
    checked: false,
    date: new Date().toISOString().slice(0, 10),
  };

  // handleText = (e) => {
  //   this.setState({
  //     text: e.target.value,
  //   });
  // };
  // handleCheckbox = (e) => {
  //   this.setState({
  //     text: e.target.checked,
  //   });
  // };

  handleText = (e) => {
    this.setState({ text: e.target.value });
  };

  handleChange = (e, type) => {
    if (type === 'checkbox') this.setState({ checked: e.target.checked });
    else this.setState({ date: e.target.value });
  };

  handleClick = () => {
    const { text: taskText, checked: isImportant, date } = this.state;

    if (taskText.length > 2) {
      const add = this.props.handleAddTask(taskText, date, isImportant);

      if (add) {
        this.setState({
          text: '',
          checked: false,
          date: this.minDate,
        });
      }
    } else {
      console.warn('za krótki opis zadania');
    }
  };

  render() {
    const maxDate = this.minDate.slice(0, 4) * 1 + 2 + '-12-31';

    return (
      <>
        <div className="form">
          <input
            type="text"
            placeholder="dodaj zadanie..."
            value={this.state.text}
            onChange={this.handleText}
          />
          <input
            type="checkbox"
            id="important"
            checked={this.state.checked}
            onChange={(e) => this.handleChange(e, 'checkbox')}
          />
          <label htmlFor="important">priorytet</label>
          <br />
          <label htmlFor="date">Do kiedy zrobić</label>
          <input
            type="date"
            value={this.state.date}
            min={this.minDate}
            max={maxDate}
            onChange={this.handleChange}
          />
          <br />
          <button onClick={this.handleClick}>Dodaj</button>
        </div>
      </>
    );
  }
}

export default AddTask;

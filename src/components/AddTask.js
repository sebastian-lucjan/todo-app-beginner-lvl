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
    console.log(this.state.text);
  };

  handleChange = (e, type) => {
    if ((type = 'checkbox')) this.setState({ date: e.target.checked });
    else this.setState({ date: e.target.value });
  };

  render() {
    const maxDate = this.minDate.slice(0, 4) * 1 + 2 + '-12-31';
    console.log(maxDate);

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
            onChange={(e) => this.handleChange(e, 'checkbox')}
          />
          <label htmlFor="important">Priorytet</label>
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
          <button>Dodaj</button>
        </div>
      </>
    );
  }
}

export default AddTask;

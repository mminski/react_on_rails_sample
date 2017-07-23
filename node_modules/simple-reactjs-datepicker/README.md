# Simple ReactJS Datepicker
Simple three field select type react datepicker

## Installation

- The package can be installed via NPM :

```
npm install simple-reactjs-datepicker --save
```

## To build the **new** examples locally :
  
  - ``` git clone git@github.com:lf-kiranpariyar/simple-reactjs-datepicker.git ```
  - ``` npm install ```
  - ``` npm start ```

## Usage

Below is a simple example on how to use the Datepicker in a React view.

```js
//React dependencies
import React from 'react';
import DatePicker from 'simple-reactjs-datepicker'

//Libraries
import moment from 'moment';

class DatePickerExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      date: {}
    };
  }

  handleDateChange(date) {
    console.log('date', date);
  }

  render() {
    return (
      <DatePicker date={moment()}
                  onChange={this.handleDateChange} />
    );
  }
}

```

## Configuration

The most basic use of the DatePicker can be described with:

```js
<DatePicker selected={this.state.date} onChange={this.handleChange} />
```

## PropTypes options

| Parameter | Type | Description |
|:---|:---|:---|
| date | `Object`, `required` | Current date in datepicker |
| onChange | `function`, `required` | Call back function for getting current date |
| noOfYear | `number`, `non-required` | Total number of year in datepicker |
| dateFormat | `String`, `non-required` | Date format of any |

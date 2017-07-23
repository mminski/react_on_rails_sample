import React, {Component} from 'react';



export default class NewRequest extends Component{
    constructor(props){
      super(props)
    }
    start_date(){
     $('#start_date').fdatepicker('show') 
    }
    end_date(){
     $('#end_date').fdatepicker('show') 
    }

  render(){
    return(
          <div>
        <h5>{'Send a new vacation request to your supervisor'}</h5>
        <form onSubmit={this.onSubmit}>
        {'Start Date'}
        <input id='start_date' onClick={this.start_date} type='text'></input>
        {'End Date'} 
        <input id='end_date' onClick={this.end_date} type='text'></input>
        </form>
        </div>
    )
  }
}


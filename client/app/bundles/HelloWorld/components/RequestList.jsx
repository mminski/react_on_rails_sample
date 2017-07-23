import PropTypes from 'prop-types';
import React from 'react';

export default class RequestList extends React.Component {

  /**
   * @param props - Comes from your rails view.
   * @param _railsContext - Comes from React on Rails
   */
  constructor(props, _railsContext) {
    super(props);

    // How to set initial state in ES6 className syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classNamees
  }

  clickedButton(x) {
    alert("clicked" + x);
  }

  render() {
    
    return (
      <div className='column'> 
      <h4> My Request list </h4>  
      <table className='striped'>
        <thead>
        </thead>
        <tbody>
        {this.props.requests.map(function(e){return(<tr key={e.id}><td>{e.status}</td><td>{e.employee_id}</td><td>{e.start_date}</td><td>{e.end_date}</td><td>{e.employee}</td><td><input className="button success" onClick={this.clickedButton.bind(this, e.id)} type="button" value="Hello"></input></td></tr>)}, this)}</tbody>
        </table>       
        </div>
    );
  }
}

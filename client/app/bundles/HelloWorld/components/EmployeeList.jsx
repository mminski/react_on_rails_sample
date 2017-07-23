
import PropTypes from 'prop-types';
import React from 'react';
export default class EmployeeList extends React.Component {

  /**
   * @param props - Comes from your rails view.
   * @param _railsContext - Comes from React on Rails
   */
  constructor(props, _railsContext) {
    super(props);

    // How to set initial state in ES6 className syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classNamees
  }

    render() {
    
    return (
      <div> 
      <h4> Employee list </h4>  
      <tbody className='table'>
        {this.props.employees.map(function(e){return(<tr key={e.id}><td>{e.name}</td><td>{e.email}</td></tr>)})}
        </tbody>       
        </div>
    );
  }
}

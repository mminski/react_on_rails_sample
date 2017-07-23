import PropTypes from 'prop-types';
import React from 'react';
import EmployeeList from './EmployeeList';
import SupervisorList from './SupervisorList';
import RequestList from './RequestList';
import NewRequest from './NewRequest';
import EmployeeRequestList from './EmployeeRequestList';
import {Router, Route} from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory'
import {Link} from 'react-router-dom';
const newHistory = createBrowserHistory();

export default class SupervisorView extends React.Component {

  /**
   * @param props - Comes from your rails view.
   * @param _railsContext - Comes from React on Rails
   */
  constructor(props, _railsContext) {
    super(props);
    // How to set initial state in ES6 class syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
    this.state = { employees: this.props.employees, 
                   user: this.props.current_user,
                   supervisors: this.props.supervisors,
                   requests: this.props.requests,
                   my_employees_requests: this.props.my_employees_requests};
   
  }

  updateEmployees = (employees) => {
    this.setState({ employees });
  };




  render() {
    
    return (
      <Router history={newHistory} > 
       <div className='container'>  

        <div className="top-bar">
         <div className="top-bar-left">
           <ul className="dropdown menu" >
             <li className="menu-text">Username: {this.state.user.name} {this.state.user.supervisor_id}</li>
        <br></br>
        <li><Link to='/my_requests'>My Requests</Link></li>
        <li><Link to='/employees_requests'>Employee Request List</Link></li>
         <li><Link to="/new_request">New Request</Link></li>
        <li><Link to="/employee_list">Employee List</Link></li>
         <li><Link to="/supervisor_list">Supervisor List</Link></li>
        </ul>
         </div>
        {this.props.children}
       </div>
        <Route path='/supervisor_list' render={(props) => (<SupervisorList {...props} supervisors={this.state.supervisors} />)} ></Route>         
        <Route path='/employees_requests' render={(props) => (<EmployeeRequestList {...props} my_employees_requests={this.state.my_employees_requests} />)} ></Route>         
         <Route path='/employee_list' render={(props) => (<EmployeeList {...props} employees={this.state.employees} /> )}  ></Route>
       <Route path='/my_requests' render={(props) => (<RequestList {...props} requests={this.state.requests} />)} ></Route>         
        <Route path='/new_request' render={(props) => (<NewRequest {...props} supervisors={this.state.supervisors} />)} ></Route>         
        {/*       // <Navbar user={this.state.user}/>
        // <EmployeeList employees={this.state.employees}/>
        // <br />
        // <hr />
        // <hr />
        // <SupervisorList supervisors={this.state.supervisors} /> 
        // <RequestList requests= {this.state.requests} />
        // <form >
        //   <label htmlFor="employees">
        //     Say hello to:
        //   </label>
        //   <input
        //     className="button"
        //     id="employees"
        //     type="text"
        //     value={this.state.employees}
        //     onChange={(e) => this.updateEmployees(e.target.value)}
        //   />
        // </form>
          // */}
</div>
        </Router>
    );
  }
}

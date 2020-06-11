import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router , Switch, Route, Link } from 'react-router-dom'
import { createBrowserHistory as history} from 'history';

import HappyFaces from './components/HappyFaces'
import List from './components/List'

class Employee extends React.Component {
    constructor(props) {
        super(props);
        this.home = this.home.bind(this);
        this.state = { //state is by default an object
         employees: [
            { id: 1, name: 'Wasif', age: 21, email: 'wasif@email.com', url: 'https://cdn.shrm.org/image/upload/c_crop,h_705,w_1254,x_0,y_15/c_fit,f_auto,q_auto,w_767/v1/Legal%20and%20Compliance/reviewing_paperwork_and_on_computer_pierld?databtoa=eyIxNng5Ijp7IngiOjAsInkiOjE1LCJ4MiI6MTI1NCwieTIiOjcyMCwidyI6MTI1NCwiaCI6NzA1fX0%3D' },
            { id: 2, name: 'Alisa', age: 19, email: 'ali@email.com', url: 'https://www.socialchorus.com/wp-content/uploads/2019/07/ic_blog_792x479.jpg' },
            { id: 3, name: 'Saad', age: 16, email: 'saad@email.com', url: 'https://www.servicenow.com/content/dam/servicenow-assets/public/en-us/images/stock-photography/hr/usecase-marquee-hr.jpg' },
            { id: 4, name: 'Asad', age: 25, email: 'asad@email.com', url: 'https://relationshipmatters.com.au/wp-content/uploads/2019/11/iStock-532792219-eap-1024x512.jpg' }   
         ]
      }
    }


    link(button, path) {
        return (
        <Link to={{ pathname: path, 
                          state: {
                            employees: this.state.employees
                    } 
        }}> 
        <button>{button}</button>
        </Link> 
        )
    }

    home(){
        return  <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
                <span> {this.link("Employee", "/employees")} | {this.link("List", "/lists")} </span> 
                </div>
    }

    render() {
      return (

        <Router history={history}>
            <Switch>
                <Route path="/" exact component={this.home} />
                <Route path="/employees" exact component={HappyFaces} />
                <Route path="/lists" exact component={List} />
            </Switch>
        </Router>
        
          );
        }
    }
    
export default Employee;

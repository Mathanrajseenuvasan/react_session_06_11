import React from 'react';
import './css/image.css';

import Container from '@material-ui/core/Container';
import { BrowserRouter as Router , Switch, Route, Link, useHistory } from 'react-router-dom'



class HappyFaces extends React.Component {
    constructor(props) {
        super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
      this.state = { //state is by default an object
         employees: this.props.location.state.employees
      }
   }
   

    renderImages() {
      return this.state.employees.map((employee, index) => {
        return (  
          <Link to={{ pathname: "/lists", 
                          state: {
                            employees: this.state.employees
                    } 
        }}> <img key={index} src={employee.url} /> </Link>
        )         
      })
    }
    
    

    render() {

      return (
        <div>
        <Container fixed>
            {this.renderImages()}<br />
            <button onClick={() => this.props.history.push('/')}>Back</button>
        </Container>
        </div>
          );
        }
    }
    
export default HappyFaces;

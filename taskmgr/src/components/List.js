import React from 'react';
import './css/table.css';



class List extends React.Component {
   constructor(props) {
      super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
      this.state = { //state is by default an object
         employees: this.props.location.state.employees
      }
   }

  renderTableHeader() {
      let header = Object.keys(this.state.employees[0])
      return header.map((key, index) => {
         return <th key={index}>{key.toUpperCase()}</th>
      })
   }

   renderTableData() {
      return this.state.employees.map((employee, index) => {
         const { id, name, age, email, url } = employee //destructuring
         return (
            <tr key={id}>
               <td>{id}</td>
               <td>{name}</td>
               <td>{age}</td>
               <td>{email}</td>
               <td>{url}</td>
            </tr>
         )
      })
   }

   render() {
      return (
      
         <div>
            <table id='employees'>
               <tbody>
                    <tr>{this.renderTableHeader()}</tr>
                    {this.renderTableData()}<br />
                    <button onClick={() => this.props.history.push('/')}>Back</button>
               </tbody>
            </table>
         </div>
      )
   }
}

export default List;
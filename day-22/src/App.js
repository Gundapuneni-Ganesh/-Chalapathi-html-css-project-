/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App; */


/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/

//used to contain data or information about the component. The state in a component can change over time. A component with the state is known as stateful components. It is the heart of the react component which determines the behavior of the component and how it will render. A state must be kept as simple as possible. It can be set by using the setState() method and calling setState() method triggers UI updates. To set an initial state before any interaction occurs, we need to use the getInitialState() method.To define a state, you have to first declare a default set of values for defining the component's initial state. To do this, add a class constructor which assigns an initial state using this.state. The 'this.state' property can be rendered inside render() method.
/*
import React from 'react';  
class App extends React.Component {  
 constructor() {  
      super();        
      this.state = { myinfo: true };  
      }  
      render() {  
          const mango = this.state.myinfo ? (  
              <div>  
                  <p><h3>used to contain data or information about the component. The state in a component can change over time. A component with the state is known as stateful components. It is the heart of the react component which determines the behavior of the component and how it will render. A state must be kept as simple as possible. It can be set by using the setState() method and calling setState() method triggers UI updates. To set an initial state before any interaction occurs, we need to use the getInitialState() method.To define a state, you have to first declare a default set of values for defining the component's initial state. To do this, add a class constructor which assigns an initial state using this.state. The 'this.state' property can be rendered inside render() method.</h3></p>   
            </div>  
              ) : null;  
              return (  
                  <div>  
                      <h1> Welcome to Mango city </h1>  
                      { mango }   
                  </div>  
              );  
     }  
}  
export default App; */


/*import Meenakshi from 'react';  
class App extends Meenakshi.Component {  
 constructor() {  
      super();        
      this.state = { myinfo: false };  
      //console.log('Component this', this);  
      this.togglemyBio = this.togglemyBio.bind(this);  
      }  
      togglemyBio(){  
          this.setState({myinfo: !this.state.myinfo});  
          }  
      render() {  
          return (  
              <div>  
                  <h1>Welcome to Mango city</h1>  
                  {  
                      this.state.myinfo ? (   
                          <div>  
                              <form id="registerForm">
        <h2 style={{ textAlign: 'center' }}>LOGIN</h2>
        <div style={{ display: 'grid', justifyContent: 'space-evenly', border: '10px', padding: '10px 30px 10px 35px' }}>
          <div style={{ borderStyle: 'ridge', padding: '40px' }}>
            <label htmlFor="newUsername">Username:</label>
            <input type="text" id="newUsername" name="newUsername" required /><br /><br />
            <label htmlFor="Password">Password:</label>
            <input type="password" id="Password" name="Password" required /><br /><br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <button type="button">Login</button>
            </div>
          </div>
        </div>
      </form>
                              <button onClick={this.togglemyBio}> Show Less </button>  
                        </div>  
                          ) : (  
                              <div>  
                                  <button onClick={this.togglemyBio}> Read More </button>  
                              </div>  
                          )  
                  }  
             </div>  
        )  
    }  
}  
export default App;*/
/*
import React from 'react';  
class App extends React.Component {  
  constructor() {  
      super();  
      this.state = {age: '100'};  
      this.handleChange = this.handleChange.bind(this);  
      this.handleSubmit = this.handleSubmit.bind(this);  
  }  
  handleChange(event) {  
      this.setState({age: event.target.value});  
  }  
  handleSubmit(event) {  
      alert('You have submitted the input successfullys: ' + this.state.age);  
      //event.preventDefault();  
  }  
  render() {  
      return (  
          <form onSubmit={this.handleSubmit}>  
            <h1>Chalapathi staff control forms</h1>  
            <label>  
                Name:  
                <input type="text" value={this.state.age} onChange={this.handleChange} />  
            </label>  
            <input type="submit" value="Submit" />  
         </form>  
      );  
  }  
}  
export default App;  


///import React from 'react';  
///class App extends React.Component {  
 //  render() {     
//      return (  
 //         <div>  
 //           <h1> Mangos are imported from { this.props.name } </h1>    
//           <p> <h4> Welcome to Mango city </h4> </p>          
 //         </div>  
 //     );  
//   }  
//}  
//export default App;  */

/*
import React from 'react';  
class App extends React.Component {  
   render() {     
      return (  
          <div>  
              <h1>Thats the property </h1>  
            <h3>Welcome to {this.props.name}</h3>   
            <p>Mango city are guntur or salem?</p>          
          </div>  
        );  
    }  
}  
App.defaultProps = {  
   name: "Salem"  
}  
export default App;
*/

import React from 'react';
import ReactDOM from 'react-dom/client';
class Fruits extends React.Component{
  render(){
    return (
      <div style={{ display:"flex", justifyContent:"space-between"}}>
        <Login/>
        <Register/>
        <Table/>
      
       
      </div>
    );
  }
}
class Login extends React.Component{
  render(){
    return (
      <div className="login">
      <form id="registerForm">
        <h2 style={{ textAlign: 'center' }}>LOGIN</h2><br />

        <div style={{ display: 'grid', justifyContent: 'space-evenly', border: '10px solid', padding: '10px 30px 10px 35px' }}>
          <div style={{ borderStyle: 'ridge', padding: '40px' }}>
            <label htmlFor="newUsername">Username:</label>
            <input type="text" id="newUsername" name="newUsername" required /><br /><br />
            <label htmlFor="Password">Password:</label>
            <input type="password" id="Password" name="Password" required /><br /><br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <button type="button" onClick={this.props.handleLogin}>Login</button>
            </div>
          </div>
        </div>
      </form>
       
      </div>
    );
  }
}
class Register extends React.Component{
  render(){
    return (
      <div style={{ display:"grid",justifyContent:"space-evenly",padding:"50px 50px 50px"}}>
        
        
      </div>
    );
  }
}
class Table extends React.Component{
  render(){
    return (
      <div className="table">
        <div style={{ display: 'grid', justifyContent: 'space-evenly', padding: '70px 10px 140px', background: 'transparent' }}>
        <h1 style={{ textAlign: 'center' }}>Employee details</h1>

        <table border="10" style={{ background: 'pink' }}>
          <thead>
            <tr>
              <th>Empid</th>
              <th>Empname</th>
              <th>Age</th>
              <th>Email</th>
              <th>Address</th>
              <th>Salary</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input type="number" name="empid" value="1" readOnly /></td>
              <td><input type="text" name="empname" value="Sashi" readOnly /></td>
              <td><input type="number" name="age" value="19" readOnly /></td>
              <td><input type="email" name="email" value="sessi@gmail.com" readOnly /></td>
              <td><input type="text" name="address" value="guntur" readOnly /></td>
              <td><input type="number" name="salary" value="8765456" readOnly /></td>
              <td>
                <button onClick={(e) => this.editRow(e.target)} style={{ color: 'skyblue', display: 'inline' }}>
                  <i className="fa fa-pencil-square-o" aria-hidden="true"></i> Edit
                </button>
                <button onClick={(e) => this.deleteRow(e.target)} style={{ color: 'skyblue', display: 'inline' }}>
                  <i className="fa fa-trash-o" aria-hidden="true"></i> Delete
                </button>
              </td>
            </tr>
            <tr>
              <td><input type="number" name="empid" value="2" readOnly /></td>
              <td><input type="text" name="empname" value="Aslam" readOnly /></td>
              <td><input type="number" name="age" value="19" readOnly /></td>
              <td><input type="email" name="email" value="sei@gmail.com" readOnly /></td>
              <td><input type="text" name="address" value="tirupati" readOnly /></td>
              <td><input type="number" name="salary" value="764356" readOnly /></td>
              <td>
                <button onClick={(e) => this.editRow(e.target)} style={{ color: 'skyblue', display: 'inline' }}>
                  <i className="fa fa-pencil-square-o" aria-hidden="true"></i> Edit
                </button>
                <button onClick={(e) => this.deleteRow(e.target)} style={{ color: 'skyblue', display: 'inline' }}>
                  <i className="fa fa-trash-o" aria-hidden="true"></i> Delete
                </button>
              </td>
            </tr>
            <tr>
              <td><input type="number" name="empid" value="3" readOnly /></td>
              <td><input type="text" name="empname" value="Ali" readOnly /></td>
              <td><input type="number" name="age" value="19" readOnly /></td>
              <td><input type="email" name="email" value="sasmi@gmail.com" readOnly /></td>
              <td><input type="text" name="address" value="narasarao" readOnly /></td>
              <td><input type="number" name="salary" value="6543456" readOnly /></td>
              <td>
                <button onClick={(e) => this.editRow(e.target)} style={{ color: 'skyblue', display: 'inline' }}>
                  <i className="fa fa-pencil-square-o" aria-hidden="true"></i> Edit
                </button>
                <button onClick={(e) => this.deleteRow(e.target)} style={{ color: 'skyblue', display: 'inline' }}>
                  <i className="fa fa-trash-o" aria-hidden="true"></i> Delete
                </button>
              </td>
            </tr>
            <tr>
              <td><input type="number" name="empid" value="4" readOnly /></td>
              <td><input type="text" name="empname" value="ranbir" readOnly /></td>
              <td><input type="number" name="age" value="19" readOnly /></td>
              <td><input type="email" name="email" value="barfi@gmail.com" readOnly /></td>
              <td><input type="text" name="address" value="dubai" readOnly /></td>
              <td><input type="number" name="salary" value="8783456" readOnly /></td>
              <td>
                <button onClick={(e) => this.editRow(e.target)} style={{ color: 'skyblue', display: 'inline' }}>
                  <i className="fa fa-pencil-square-o" aria-hidden="true"></i> Edit
                </button>
                <button onClick={(e) => this.deleteRow(e.target)} style={{ color: 'skyblue', display: 'inline' }}>
                  <i className="fa fa-trash-o" aria-hidden="true"></i> Delete
                </button>
              </td>
            </tr>
            <tr>
              <td><input type="number" name="empid" value="5" readOnly /></td>
              <td><input type="text" name="empname" value="shah rukh" readOnly /></td>
              <td><input type="number" name="age" value="19" readOnly /></td>
              <td><input type="email" name="email" value="shan@gmail.com" readOnly /></td>
              <td><input type="text" name="address" value="delhi" readOnly /></td>
              <td><input type="number" name="salary" value="8765456" readOnly /></td>
              <td>
                <button onClick={(e) => this.editRow(e.target)} style={{ color: 'skyblue', display: 'inline' }}>
                  <i className="fa fa-pencil-square-o" aria-hidden="true"></i> Edit
                </button>
                <button onClick={(e) => this.deleteRow(e.target)} style={{ color: 'skyblue', display: 'inline' }}>
                  <i className="fa fa-trash-o" aria-hidden="true"></i> Delete
                </button>
              </td>
            </tr>
            <tr>
              <td><input type="number" name="empid" value="6" readOnly /></td>
              <td><input type="text" name="empname" value="Salman" readOnly /></td>
              <td><input type="number" name="age" value="19" readOnly /></td>
              <td><input type="email" name="email" value="salmai@gmail.com" readOnly /></td>
              <td><input type="text" name="address" value="bombay" readOnly /></td>
              <td><input type="number" name="salary" value="8765456" readOnly /></td>
              <td>
                <button onClick={(e) => this.editRow(e.target)} style={{ color: 'skyblue', display: 'inline' }}>
                  <i className="fa fa-pencil-square-o" aria-hidden="true"></i> Edit
                </button>
                <button onClick={(e) => this.deleteRow(e.target)} style={{ color: 'skyblue', display: 'inline' }}>
                  <i className="fa fa-trash-o" aria-hidden="true"></i> Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table><br />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button style={{ width: '55px' }} onClick={this.props.handleLogout}>Logout</button>
        </div>
      
      </div>
       
      </div>
    );
  }
}


export default Fruits;
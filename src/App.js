import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import ReactDOM from 'react-dom';

class App extends Component {
  constructor(){
    super();
    this.state={
      nilai1: null,
      nilai2: null,
      nilai3: null,
      operator: null,
      hasil:null
    }
  }

  handleSumbit(e){
    e.preventDefault();

    const nilai1 = parseInt(this.refs.nilai1.value);
    const nilai2 = parseInt(this.refs.nilai2.value);
    const operator = this.refs.operator.value;

    var hasil;
    switch(operator){
      case '+':
      hasil = nilai1 + nilai2;
      break;
      case '-':
      hasil = nilai1 - nilai2;
      break;
      case '*':
      hasil = nilai1 * nilai2;
      break;
      case '/':
      hasil = nilai1 / nilai2;
      break;
    }

    this.setState({nilai1, nilai2, operator, hasil});

    this.refs.nilai1.value = null;
    this.refs.nilai2.value=  null;
  }

  renderHasil(){

    const {nilai1, nilai2, operator, hasil} = this.state;

    if (this.state.hasil){
      return (
        <div>
        <p className="alert alert-success">
        {nilai1+operator+nilai2 +'='+hasil}
        </p>
        </div>
      );
    }

  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSumbit.bind(this)}>
        <label>Nilai:</label>
        <br />
        <input type="number" ref="nilai1" className="form-conrol"/>
        <br />
        <input type="number" ref="nilai2" className="form-conrol"/>
        <br />
        <label>Operator:   </label>
        <br />
        <select ref="operator" className="from-control">
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
        </select><br />
        <button className="btn btn-ptimary">Lihat renderHasil</button>
        </form>
        {this.renderHasil()}
      </div>

    );
  }
}
// ReactDOM.render(
//   <App />,
//  document.getElementById('container')
// );
export default App;
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Page from './components/Page';
import './themestr.css';
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    axios.post('http://127.0.0.1:8000/api/login', {
      email: 'jwill@example.net',
      password: 'word'
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }


  render() {
    return (
      <>
        <Navbar />

        <form>
          <label>
            Email
          <input type="text" name="name" />
          </label>
          <label>
            Password
          <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </>

    );
  }
}

export default App;

import React, { Component } from 'react';
import UserList from './UserList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
    this.fetchGithubUsers = this.fetchGithubUsers.bind(this);
  }

  componentDidMount() {
    console.log("le composant a été inséré");
    this.fetchGithubUsers();
  }

  fetchGithubUsers() {
    fetch('https://api.github.com/users')
      .then(res => res.json())
      .then(users => this.setState({
        users: users
      }));
  }

  render() {
    console.log("le composant a été affiché");
    return (
      <div className="App">
      <h1>API</h1>
      <button onClick={this.fetchGithubUsers}>
        Get users
      </button>

      <UserList users={this.state.users} />
      </div>
    );
  }
}

export default App;

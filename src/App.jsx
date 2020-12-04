import React from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import axios from "axios";
import Serach from "./components/users/Serach";

class App extends React.Component {
  state = {
    users: [],
    loading: false,
  };
  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data, loading: false });
  }
  searchUsers = (text) => {
    console.log(text);
  }
  render() {
    return (
      <div className='App'>
        <Navbar title='Gihub Finder' icon='fab fa-github' />
        <Serach searchUsers={this.searchUsers} />
        <div className='conainter'>
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;

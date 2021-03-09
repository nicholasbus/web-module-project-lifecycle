import React from 'react';
import axios from 'axios'
import UserCard from './components/UserCard'
import Followers from './components/Followers'
import styled from 'styled-components'

const Container = styled.div`
  width: 50%;
  margin: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

class App extends React.Component {
  state = {
    userInfo: {},
    userFollowers: [],
    user: 'nicholasbus'
  }
  
  componentDidMount() {
    axios.get(`https://api.github.com/users/${this.state.user}`)
      .then(res => this.setState({ userInfo: res.data }))
      .catch(err => console.log(err))
    axios.get(`https://api.github.com/users/${this.state.user}/followers`)
      .then(res => this.setState({ userFollowers: res.data }))
      .catch(err => console.log(err))
  }

  handleChange = e => {
    this.setState({
      user: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    axios.get(`https://api.github.com/users/${this.state.user}`)
      .then(res => this.setState({ userInfo: res.data }))
      .catch(err => console.log(err))
    axios.get(`https://api.github.com/users/${this.state.user}/followers`)
      .then(res => this.setState({ userFollowers: res.data }))
      .catch(err => console.log(err))
  }

  render(){
    return(
      <Container>
        <form onSubmit={this.handleSubmit}>
          <input placeholder='username' onChange={this.handleChange} value={this.state.user} />
          <button>Search</button>
        </form>
        <UserCard userInfo={this.state.userInfo} />
        <h2>{this.state.userInfo.login}'s followers</h2>
        <Followers followers={this.state.userFollowers} />
      </Container>
    )
  }
}

export default App;

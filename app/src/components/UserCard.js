import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    box-shadow: 1px 1px 15px black;
    background-color: #f1faee;
    border-radius: 15px;
    padding: 2rem;
    width: 100%;

    div[id=info] {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-evenly;
    }

    div[id=name-and-avatar] {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        width: 35%;
    }

`

class UserCard extends React.Component {
    render(){
        const { login, avatar_url, followers, following, public_repos } = this.props.userInfo
        return(
            <StyledDiv>
                <div id='name-and-avatar'>
                    <img src={avatar_url} alt="avatar" width="100" />
                    <h2>{login}</h2>
                </div>
                <div id='info'>
                    <p>Followers: {followers}</p>
                    <p>Following: {following}</p>
                    <p>Public Repos: {public_repos}</p>
                </div>
            </StyledDiv>
        )
    }
}

export default UserCard
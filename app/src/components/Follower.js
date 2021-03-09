import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: 1px 1px 15px black;
    background-color: #f1faee;
    border-radius: 15px;
    padding: 3rem;
    width: 50%;

    div[id=info] {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-evenly;
    }

    div[id=name-and-avatar] {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

`

class Follower extends React.Component {
    render(){
        const { login, avatar_url } = this.props.info
        return(
            <StyledDiv>
                <div id='name-and-avatar'>
                    <img src={avatar_url} alt="avatar" width="100" />
                    <h2>{login}</h2>
                </div>
            </StyledDiv>
        )
    }
}

export default Follower
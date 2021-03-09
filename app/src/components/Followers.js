import React from 'react'
import Follower from './Follower'
import styled from 'styled-components'

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`

class Followers extends React.Component {
    render(){
        
        return(
            <StyledDiv>
                {
                    this.props.followers.map((follower, i) => {
                        return <Follower info={follower} key={i} />
                    })
                }
            </StyledDiv>
        )
    }
}

export default Followers
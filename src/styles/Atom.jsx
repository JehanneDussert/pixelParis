import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Tab = styled.h3 `
    border: 1px solid white;
    border-radius: 5px;
    text-align: center;
    margin: 0vw 5vw 0vw 5vw;
    padding: 1vw 3vw 1vw 3vw;
    margin-top: 40vh;
`

export const LinkPage = styled.a `
    text-decoration: none;
    color: inherit;
`

export const BoxContainer = styled.div  `
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 2vw;
    // border: 1px solid white;
`

export const NavBar = styled.div  `
    display: flex;
    flex-direction: column;
    // border: 1px solid white;
    color: #EFEFEF;
    font-size: 4vh;
    font-family: Copperplate Gothic;
`

export const DivContainer = styled.div `
    // border: 1px solid white;
    display: flex;
    flex-direction: row;
    color: #EFEFEF;
    font-family: Optima, Goudy Old Style;
    justify-content: center;
`

export const DivPage = styled.div `
    // border: 1px solid white;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`

export const StyledLink = styled(Link)`
  padding: 10vw 10vw 10vw 2vw;
  color: #EFEFEF;
  text-decoration: none;
  text-align: center;
`
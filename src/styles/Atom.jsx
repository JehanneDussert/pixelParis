import styled from 'styled-components'
import { Link } from 'react-router-dom'

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
    position: sticky;
    flex-direction: column;
    // border: 1px solid white;
    color: #EFEFEF;
    font-size: 4vh;
    font-family: Copperplate Gothic;
    top: 3vh;
`

export const Separator = styled.div `
    border-top: 1px solid #EFEFEF;
    width: 30vw;
    margin-left: auto;
    margin-right: auto;
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
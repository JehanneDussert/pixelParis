import styled from 'styled-components'

export const LinkPage = styled.a `
    text-decoration: none;
    color: inherit;
`

export const BoxContainer = styled.div  `
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 2vw;
`

export const NavBar = styled.div  `
    display: flex;
    position: sticky;
    flex-direction: column;
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
    display: flex;
    flex-direction: row;
    color: #EFEFEF;
    font-family: Optima, Goudy Old Style;
    justify-content: center;
`

export const DivPage = styled.div `
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`
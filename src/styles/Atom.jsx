import styled from 'styled-components'

export const LinkPage = styled.a `
    text-decoration: none;
    color: inherit;
`

export const HomeLink = styled.a `
    text-decoration: none;
    color: inherit;
    margin-left: 2vw;
`

export const BoxContainer = styled.div  `
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    // padding: 2vw;
    // border: 1px solid #EFEFEF;
`

export const NavBar = styled.div  `
    display: flex;
    position: sticky;
    flex-direction: row;
    color: #EFEFEF;
    font-size: 4vh;
    font-family: Copperplate, Copperplate Gothic Light, fantasy;
    top: 3vh;
`

export const Contact = styled.a  `
    display: flex;
    position: sticky;
    top: 3vh;
    display: block;
    margin-left: auto;
    margin-right: 2vw;
`

export const Logo = styled.img  `
    width: 2vw;
`

export const Separator = styled.div `
    border-top: 1px solid #EFEFEF;
    width: 20vw;
    margin-left: auto;
    margin-right: auto;
`

export const DivContainer = styled.div `
    display: flex;
    // flex-wrap: wrap;
    flex-direction: row;
    width: 90%;
    color: #EFEFEF;
    font-family: Copperplate, Copperplate Gothic Light, fantasy;
    justify-content: center;
    // border: 1px solid #EFEFEF;
`

export const DivPage = styled.div `
    min-height: 100vh;
    min-width: 100vw;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    // border: 1px solid #EFEFEF;
`
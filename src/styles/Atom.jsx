import styled from 'styled-components'

export const LinkPage = styled.a `
    text-decoration: none;
    color: white;
`

export const HomeLink = styled.a `
    text-decoration: none;
    color: white;
    margin-left: 4vw;
    cursor: pointer;
`

export const BoxContainer = styled.div  `
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
`

export const Photo = styled.img`
    width: 300px;
    height: 300px;
    border-radius: 5px;
    align-self: center;
    margin: 15px;
`

export const Logo = styled.img  `
    width: 2vw;
`

export const Separator = styled.div `
    border-bottom: 1px solid #EFEFEF;
    width: 20vw;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 7vh;
    margin-top: 2vh;
`

export const DivContainer = styled.div `
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    color: #EFEFEF;
    display: flex;
    flex-direction: row;
    font-family: Copperplate, Copperplate Gothic Light, fantasy;
    justify-content: center;
`

export const DivPage = styled.div `
    min-height: 100vh;
    min-width: 100vw;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
`

export const HomeButton = styled.a`
    border: 1px solid white;
    color: white;
    cursor: pointer;
    text-decoration: none;
    transition-duration: 1s;
    &:hover {
        background-color: #99999922;
        transition-duration: 1s;
    }

    border-radius: 5px;
    text-align: center;
    margin: 0vw 5vw;
    padding: 1vw 3vw;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`
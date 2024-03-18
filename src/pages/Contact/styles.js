import styled from "styled-components"

export const Container = styled.div`
    width: 100vw;
`

export const Content = styled.div`
    width: 65vw;
    padding: 0 15vw;
    display: flex;
    flex-direction: column;
    gap: 40px;
`

export const Text = styled.div`
    width: 100%;

    > h1 {
        font-family: 'DM Serif Display', serif;
        font-size: 32px;
        margin-bottom: 8px;
    }
`

export const NameEmail = styled.div`
    width: 100%;
    justify-content: space-between;
    display: flex;
    flex-direction: row;
`

export const Name = styled.div`
    width: 45%;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const Email = styled.div`
    width: 45%;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const Form = styled.form`
    display: flex;
    margin-top: 8px;
    flex-direction: column;
    gap: 30px;

    > select {
    padding: 5px;
    font-size: 16px;
    height: 48px;
    width: 100%;
    padding: 10px;
    border: 0.5px solid black;
    background-color: #FFF4EE;
    -webkit-box-shadow: -4px 0px 15px 0px rgba(0,0,0,0.30);
    -moz-box-shadow: -4px 0px 15px 0px rgba(0,0,0,0.30);
    box-shadow: -4px 0px 15px 0px rgba(0,0,0,0.30);
    }

    :invalid {
    color: #757575;
    }

    > textarea {
    padding: 5px;
    font-size: 16px;
    height: 10vw;
    padding: 10px;
    border: 0.5px solid black;
    background-color: #FFF4EE;
    -webkit-box-shadow: -4px 0px 15px 0px rgba(0,0,0,0.30);
    -moz-box-shadow: -4px 0px 15px 0px rgba(0,0,0,0.30);
    box-shadow: -4px 0px 15px 0px rgba(0,0,0,0.30);
    }

    > button {
    font-family: 'DM Serif Display', serif;
    font-size: 28px;
    width: fit-content;
    padding: 4px 40px;
    background-color: #0F0F0F;
    color: #FFF4EE;
    border: none;
    -webkit-box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);
    -moz-box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);
    box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);

    :hover {
        background-color: #7D6252;
        transition: all ease-in-out 500ms;
        transform: translateX(2px);
        }
    }
`

export const Input = styled.input`
    padding: 5px;
    font-size: 16px;
    height: 48px;
    width: 100%;
    padding: 10px;
    border: 0.5px solid black;
    background-color: #FFF4EE;
    -webkit-box-shadow: -4px 0px 15px 0px rgba(0,0,0,0.30);
    -moz-box-shadow: -4px 0px 15px 0px rgba(0,0,0,0.30);
    box-shadow: -4px 0px 15px 0px rgba(0,0,0,0.30);
`
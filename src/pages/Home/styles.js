import styled from "styled-components";

export const Container = styled.header`
    width: 100vw;
`

export const Content = styled.div`
    width: 100vw;
    padding: 0 15vw;
`


export const FirstSection = styled.div`
    margin-bottom: 80px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const TextArea = styled.div`
    width: 50%;
    background-color: #FFF4EE;
    padding: 15% 60px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    -webkit-box-shadow: -8px 8px 15px 0px rgba(0,0,0,0.30);
    -moz-box-shadow: -8px 8px 15px 0px rgba(0,0,0,0.30);
    box-shadow: -8px 8px 15px 0px rgba(0,0,0,0.30);

    > p {
        height: fit-content;
    }
`

export const Text = styled.p`
    font-size: 32px;
    font-weight: 400;
`

export const Button = styled.button`
    font-family: 'DM Serif Display', serif;
    font-size: 32px;
    width: fit-content;
    padding: 8px 24px;
    background-color: #0F0F0F;
    color: #FFF4EE;
    border: none;
    -webkit-box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);
    -moz-box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);
    box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);
`

export const ImageSection1 = styled.img`
    width: 53%;
    -webkit-box-shadow: 8px 8px 15px 0px rgba(0,0,0,0.30);
    -moz-box-shadow: 8px 8px 15px 0px rgba(0,0,0,0.30);
    box-shadow: 8px 8px 15px 0px rgba(0,0,0,0.30);
`
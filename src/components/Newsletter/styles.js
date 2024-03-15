import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    margin-top: 45px;
    margin-bottom: 30px;
`

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 80px;
`

export const NewsletterRight = styled.div`
    display: flex;
    flex-direction: column;
    text-align: start;
    width: 45%;
    gap: 10px;
`

export const Title = styled.h1`
    font-family: 'DM Serif Display', serfif;
    font-size: 32px;
`

export const FormNewsletter = styled.form`
    display: flex;
    justify-content: row;
    margin-top: 8px;
`

export const InputNewsletter = styled.input`
    padding: 5px;
    font-size: 16px;
    height: 48px;
    width: 62%;
    padding: 10px;
    border: none;
    background-color: #FFF4EE;
    -webkit-box-shadow: -8px 0px 15px 0px rgba(0,0,0,0.30);
    -moz-box-shadow: -8px 0px 15px 0px rgba(0,0,0,0.30);
    box-shadow: -8px 0px 15px 0px rgba(0,0,0,0.30);
`

export const Button = styled.button`
    font-family: 'DM Serif Display', serif;
    font-size: 24px;
    height: 48px;
    padding: 8px 24px;
    background-color: #0F0F0F;
    color: #FFF4EE;
    border: none;
    -webkit-box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);
    -moz-box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);
    box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);
`
import styled from "styled-components"

export const Container = styled.div`
    width: 100vw;
`

export const Content = styled.div`
    width: 100%;
    padding: 0 15vw;
    display: flex;
    flex-direction: column;
`

export const CartHeader = styled.div`
    margin-top: 20px;
`

export const CartInfo = styled.div`
    width: 100%;
    gap: 40px;
    display: flex;
    flex-direction: row;
    font-size: 20px;
    font-weight: regular;
    justify-content: space-between;

    > div {
        display: flex;
        flex-direction: row;
        gap: 40px;
    }
`

export const CartItems = styled.div`
`

export const LowerSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const Cupom = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
> p {
    font-size: 20px;
}

> div {
    display: flex;
    flex-direction: row;
    gap: 15px;
    margin-top: 15px;

    > button {
    font-family: 'DM Serif Display', serif;
    font-size: 24px;
    height: 44px;
    padding: 4px 32px;
    background-color: #0F0F0F;
    color: #FFF4EE;
    border: none;
    -webkit-box-shadow: -8px 0px 15px 0px rgba(0,0,0,0.30);
    -moz-box-shadow: -8px 0px 15px 0px rgba(0,0,0,0.30);
    box-shadow: -8px 0px 15px 0px rgba(0,0,0,0.30);
}
}
`

export const Input = styled.input`
    padding: 5px;
    font-size: 16px;
    height: 44px;
    width: 55%;
    padding: 15px;
    border: 1px solid black;
    background-color: #FFF4EE;
    -webkit-box-shadow: -8px 0px 15px 0px rgba(0,0,0,0.30);
    -moz-box-shadow: -8px 0px 15px 0px rgba(0,0,0,0.30);
    box-shadow: -8px 0px 15px 0px rgba(0,0,0,0.30);
`

export const Prices = styled.div`
    width: 40%;
    font-size: 20px;
    > div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
`
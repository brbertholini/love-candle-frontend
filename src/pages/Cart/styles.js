import styled from "styled-components"

export const Container = styled.div`
    width: 100vw;
`

export const Content = styled.div`
    width: 100%;
    padding: 0 15vw;
    display: flex;
    flex-direction: column;
    gap: 25px;
`

export const CartHeader = styled.div`

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
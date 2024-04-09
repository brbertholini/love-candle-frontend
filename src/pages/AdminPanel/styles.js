import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
`

export const Content = styled.div`
    margin-top: 65px;
    width: calc(100% - 180px);
    padding-left: 260px;
    padding-right: 80px;
    flex-grow: 1;
`

export const Orders = styled.div`
    > h1 {
        font-family: 'DM Serif Display', serif;
        font-size: 32px;
        margin-bottom: 8px;
    }

    > .description {
        width: 53%;
        padding-bottom: 50px;
    }

    > .quantity {
        padding-bottom: 8px;
    }
`

export const Clients = styled.div`
    > h1 {
        font-family: 'DM Serif Display', serif;
        font-size: 32px;
        margin-bottom: 8px;
    }

    > .description {
        width: 53%;
        padding-bottom: 50px;
    }

    > .quantity {
        padding-bottom: 8px;
    }
`
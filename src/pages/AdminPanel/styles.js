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

    > p {
        width: 53%;
        margin-bottom: 50px;
    }
`

export const Products = styled.div`
    > h1 {
        font-family: 'DM Serif Display', serif;
        font-size: 32px;
        margin-bottom: 8px;
    }

    > p {
        width: 53%;
        margin-bottom: 50px;
    }
`

export const Materials = styled.div`
    > h1 {
        font-family: 'DM Serif Display', serif;
        font-size: 32px;
        margin-bottom: 8px;
    }

    > p {
        width: 53%;
        margin-bottom: 50px;
    }
`

export const Clients = styled.div`
    > h1 {
        font-family: 'DM Serif Display', serif;
        font-size: 32px;
        margin-bottom: 8px;
    }

    > p {
        width: 53%;
        margin-bottom: 50px;
    }
`

export const Table = styled.table`
    border-collapse: collapse;
    width: 100%;
`

export const StyledTh = styled.th`
    padding-bottom: 3px;
    font-weight: 900;
`

export const StyledTd = styled.td`
 border-top: 1px solid black; 
 border-bottom: 1px solid black;
 padding-top: 0.65rem;
 padding-bottom: 0.65rem;
 text-align: left;
`;
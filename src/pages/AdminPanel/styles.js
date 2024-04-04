import styled from "styled-components";
import { HiMagnifyingGlass } from "react-icons/hi2";

export const SearchIcon = styled(HiMagnifyingGlass)`
    font-size: 22px;
    margin-right: 6px;
`

export const FilterArea = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

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

export const ButtonArea = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 24px;
`

export const Input = styled.input`
    font-size: 16px;
    height: 2.2rem;
    width: fit-content;
    padding: 10px;
    border: 0.5px solid black;
    background-color: #FFF4EE;
    -webkit-box-shadow: -4px 0px 15px 0px rgba(0,0,0,0.30);
    -moz-box-shadow: -4px 0px 15px 0px rgba(0,0,0,0.30);
    box-shadow: -4px 0px 15px 0px rgba(0,0,0,0.30);
`

export const Filter = styled.button`
    margin-left: 25px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    gap: 6px;
    height: 2.2rem;
    width: 6.5rem;
    padding: 10px;
    background-color: black;
    border: none;
    
    transition: background-color 600ms, color 600ms, border 600ms, transform 600ms;

    &:hover {
        background-color: transparent;
        color: black;
        border: 1px solid black;
        transform: scale(1.03);
        transition: all 600ms;
    }
`

export const NewProduct = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    gap: 6px;
    height: 2.2rem;
    width: fit-content;
    padding-left: 20px;
    padding-right: 20px;
    background-color: #17A500;
    border: none;

    transition: background-color 600ms, color 600ms, border 600ms, transform 600ms;

    &:hover {
    transform: scale(1.03);
    transition: all 600ms;
    background-color: #17A500;
    }
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

export const Products = styled.div`
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

export const Materials = styled.div`
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

export const Table = styled.table`
    border-collapse: collapse;
    width: 100%;
`

export const StyledTh = styled.th`
    padding-bottom: 0.4rem;
    font-weight: 900;
`

export const StyledTd = styled.td`
 border-top: 1px solid black; 
 border-bottom: 1px solid black;
 padding-top: 0.65rem;
 padding-bottom: 0.65rem;
 text-align: left;
`;
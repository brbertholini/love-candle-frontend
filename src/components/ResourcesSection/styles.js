import styled from "styled-components";
import { HiMagnifyingGlass } from "react-icons/hi2";

export const Container = styled.div`
    width: 100%;

    
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

export const NewResource = styled.button`
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
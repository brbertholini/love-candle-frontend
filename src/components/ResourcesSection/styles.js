import styled from "styled-components";
import { MdCancel } from "react-icons/md";

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

export const DeleteResource = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: auto;
    justify-content: center;
    font-size: 16px;
    gap: 6px;
    height: 2.2rem;
    width: fit-content;
    padding-left: 20px;
    padding-right: 20px;
    background-color: red;
    border: none;

    transition: background-color 600ms, color 600ms, border 600ms, transform 600ms;

    &:hover {
    transform: scale(1.03);
    transition: all 600ms;
    background-color: red;
    }
`

export const Cancel = styled.button`
    display: flex;
    flex-direction: row;
    margin-left: auto;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    gap: 6px;
    height: 2.2rem;
    width: fit-content;
    padding-left: 20px;
    padding-right: 20px;
    background-color: transparent;
    border: none;
    color: grey;

    transition: background-color 600ms, color 600ms, border 600ms, transform 600ms;

    &:hover {
    transition: all 600ms;
    background-color: transparent;
    color: black;
    }
`

export const Row2 = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    justify-content: space-between;
    padding-left: 2vw;
    padding-right: 2vw;
    padding-bottom: 30px;
    padding-top: 20px;

    > div {
        display: flex;
        flex-direction: column;

        > h2 {
            margin-bottom: 10px;
            font-size: 18px;
        }
    }
`

export const ModalContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;

    > h1 {
            font-size: 22px;
        }
`

export const CancelIcon = styled(MdCancel)`
    color: black;
    font-size: 20px;
    margin-bottom: -10px;
    
`

export const XButton = styled.button`
    background-color: transparent;
    border: none;
    margin-left: auto;

    &:hover {
        background-color: transparent;
    border: none;
    margin-left: auto; 
    }
`

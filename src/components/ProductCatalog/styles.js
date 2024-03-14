import styled from "styled-components";


export const Container = styled.header`
    width: 200px;
    height: 301px;
    display:flex;
    flex-direction: column;
>h1{
    padding: 0px 3px;
    font-weight: 400;
    font-size: 16px;
}
>h2{
    padding: 0px 3px 10px 3px;
    font-size: 16px;
    margin-top: auto;
}
`
export const Avaliacao = styled.div`
    width: 200px;
    padding: 7px 0px;
    display:flex;
    align-items:center;
    font-size: 12px;
>p {
    padding-top: 3px;
    padding-left: 5px;
}
`
import styled from "styled-components";

export const Container = styled.header`
    width: 100vw;

`

export const Content = styled.div`
    width: 100vw;
    padding: 0 15vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
`
export const CatalogFilter = styled.div`
    width: 70vw;
    height: 50px;
    border-bottom: 1px solid #A9A9A9;
    border-top: 1px solid #A9A9A9;
    display: flex;
    margin: auto;
    align-items: center;
    padding: 0 2vw;
    justify-content: space-between;
    text-align: center;
>div h3{
    font-size: 14px;
    font-weight: 400;
}
>div{
    display:flex;
    flex-direction: row;
}
>div h2{
    padding-left: 10px;
    font-size: 14px;
    font-weight: 500;
}
>img{
    margin-left: 50px;
}
`
export const CatalogContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 50px;
    gap: 30px;

`

import styled from "styled-components";

export const Container = styled.header`
    width: 100vw;
    margin-top: 45px;
`

export const Content = styled.div`
    width: 100%;
    padding: 0 15vw;
    justify-content: space-around;
    display: flex;
    flex-direction: row;
    gap: 50px;
`

export const Menu = styled.div`
    display: flex;
    text-align: start;
    gap: 5vw;
    margin: 30px 0;
`

export const Navigation = styled.nav`
> ul {
    display: flex;
    flex-direction: column;
    font-size: 16px;
    font-weight: 400;
    padding: 0;
    display: flex;
    list-style: none;
    color: #000000;
}

ul li {
    margin-top: 15px;
    cursor: pointer;
    position: relative;
}

ul li:hover {
    color: #7D6252;
    transition: 0.3s;
}
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`

export const Title = styled.h1`
    margin-bottom: 20px;
    font-size: 22px;
    font-weight: 500;
`

export const Social = styled.div`
    display: flex;
    flex-direction: column;

    > ul {
    display: flex;
    flex-direction: column;
    font-size: 16px;
    font-weight: 400;
    padding: 0;
    display: flex;
    list-style: none;
    color: #000000;
}

ul li {
    margin-top: 15px;
    cursor: pointer;
    position: relative;
}

ul li:hover {
    color: #7D6252;
    transition: 0.3s;
}
`
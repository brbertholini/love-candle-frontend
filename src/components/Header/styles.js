import styled from "styled-components";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { FiShoppingCart } from "react-icons/fi";

export const Container = styled.header`
    width: 100vw;
    margin-top: 45px;
    margin-bottom: 30px;
`

export const Content = styled.div`
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
>a:hover{
    transform: translateX(0);
}
`

export const Menu = styled.div`
    display: flex;
    margin: 30px 0 0 0;
`

export const Navigation = styled.nav`
> ul {
    font-size: 20px;
    font-weight: regular;
    padding: 0;
    display: flex;
    list-style: none;
    gap: 40px;
    color: #000000;
}


ul li {
    cursor: pointer;
    position: relative;
}

ul li:hover {
    color: #7D6252;
    transition: 0.3s;
}

ul li::after{
    content: "";
    position: absolute;
    display: block;
    height: 0.06rem;
    width: 0%;
    background: #7D6252;
    bottom: -0.05rem;
    transition: all ease-in-out 250ms;
}

ul li:hover::after{
   width: 60%;
}
`

export const MGlassIcon = styled(PiMagnifyingGlassBold)`
    margin-top: 7px;
    margin-left: 40px;
    font-size: 19px;
    color: #000000;
`

export const IconArea = styled.div`
    :hover {
        color: #7D6252;
        transition: all ease-in-out 200ms;
        cursor: pointer;
}
`

export const Cart = styled(FiShoppingCart)`
    margin-top: 7px;
    margin-left: 40px;
    font-size: 19px;
    color: #000000;
`
export const Link = styled.a`
    color:black;
`
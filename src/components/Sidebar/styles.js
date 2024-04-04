import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";
import { GiCardboardBoxClosed } from "react-icons/gi";
import { FaLeaf } from "react-icons/fa";
import { HiUsers } from "react-icons/hi2";

export const Container = styled.div`
    width: 180px;
    height: 100%;
    position: fixed;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;

    -webkit-box-shadow: 2px 0px 15px 0px rgba(0,0,0,0.30);
    -moz-box-shadow: 2px 0px 15px 0px rgba(0,0,0,0.30);
    box-shadow: 2px 0px 15px 0px rgba(0,0,0,0.30);

    > img {
        margin-top: 50px;
        height: 70px;
    }
`

export const Navigation = styled.div`
    margin-top: 80px;
    gap: 58px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
`

export const CartIcon = styled(FaShoppingCart)`
    font-size: 28px;
    margin-right: 5px;
`

export const BoxIcon = styled(GiCardboardBoxClosed)`
    font-size: 32px;
`

export const LeafIcon = styled(FaLeaf)`
    font-size: 26px;
`

export const ClientsIcon = styled(HiUsers)`
    font-size: 28px;
`

export const IconArea = styled.div`
    position: relative;
    display: inline-block;

    :hover {
        color: #FFCF87;
        transition: all ease-in-out 200ms;
        cursor: pointer;
    }
`

export const Link = styled.a`
    color:black;
`
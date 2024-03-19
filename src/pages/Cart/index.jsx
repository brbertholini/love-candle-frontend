import { Container, Content, CartInfo } from "./styles"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Text } from "../Contact/styles"
import { DivisorLine } from "../../components/DivisorLine"

export function Cart() {
    return(
        <Container>
            <Header />
            <DivisorLine />
            <Content>
                <CartInfo>
                <Text>
                    <h1>MEU PEDIDO</h1>
                    <p>Confira os itens que estão no seu carrinho de compras.</p>
                </Text>
                </CartInfo>
            </Content>
            <Footer />
        </Container>
    )
}
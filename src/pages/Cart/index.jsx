import { Container, Content, CartHeader, CartInfo } from "./styles"
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
                <CartHeader>
                <Text>
                    <h1>MEU PEDIDO</h1>
                    <p>Confira os itens que estão no seu carrinho de compras.</p>
                </Text>
                </CartHeader>
                <CartInfo>
                    <p>ITENS</p>
                    <div>
                    <p>PREÇO</p>
                    <p>QUANTIDADE</p>
                    <p>TOTAL</p>
                    </div>
                </CartInfo>
            </Content>
            <Footer />
        </Container>
    )
}
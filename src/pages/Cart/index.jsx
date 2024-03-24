import { Container, Content, CartHeader, CartInfo, CartItems, Cupom, Input, LowerSection, Prices } from "./styles"
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
                <DivisorLine />
                <CartItems>

                </CartItems>
                <LowerSection>
                <Cupom>
                    <p>CÓDIGO DE CUPOM:</p>
                    <div>
                    <Input placeholder="Digite o código promocional" />
                    <button type="submit">Aplicar</button>
                    </div>
                </Cupom>
                <Prices>
                    <div><p>SUBTOTAL:</p><p>R$ 68,00</p></div>
                    <DivisorLine />
                    <div><p>ENTREGA:</p>R$ 10,00</div>
                    <DivisorLine />
                    <div><p>TOTAL:</p>R$ 78,00</div>
                </Prices>
                </LowerSection>
            </Content>
            <Footer />
        </Container>
    )
}
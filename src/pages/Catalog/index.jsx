import { Container, Content } from "./styles"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { ProductCatalog } from "../../components/ProductCatalog"
export function Catalog() {
    return(
        <Container>
            <Header />
            <Content>
                <ProductCatalog tittle={"Bom dia"} avaliacoes={20} stars={1} price={150000}/>
            </Content>
            <Footer />
        </Container>
    )
}
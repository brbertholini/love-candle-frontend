import { Container, Content, CatalogContainer } from "./styles"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { ProductCatalog } from "../../components/ProductCatalog"



export function Catalog() {

    let produtos = [
        { id: 1, name: "Vela", price: 40, stars: 4, avaliacoes: 15},
        { id: 2, name: "Vela 2", price: 35, stars: 3, avaliacoes: 100},
        { id: 3, name: "Difusor", price: 25, stars: 5, avaliacoes: 5},
        { id: 3, name: "Difusor", price: 25, stars: 5, avaliacoes: 5}
    ];
    let produtosHtml = []

    produtos.forEach((produto) => {
        produtosHtml.push(<ProductCatalog key={produto.id} tittle={produto.name} 
            avaliacoes={produto.avaliacoes} stars={produto.stars} price={produto.price}/>);
    });
        
    

    return(
        <Container>
            <Header />
            <Content>
                <CatalogContainer>
                    {produtosHtml}
                </CatalogContainer>
            </Content>
            <Footer />
        </Container>
    )
}
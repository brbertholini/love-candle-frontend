import { Container, Content, CatalogContainer, CatalogFilter} from "./styles"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { ProductCatalog } from "../../components/ProductCatalog"
import AromaticasTittle from "../../assets/images/VelasAromaticas.svg"


export function Catalog() {

    let produtos = [
        { id: 1, name: "Vela", price: 40, stars: 4, avaliacoes: 15},
        { id: 2, name: "Vela 2", price: 35, stars: 3, avaliacoes: 100},
        { id: 3, name: "Difusor", price: 25, stars: 5, avaliacoes: 5},
        { id: 4, name: "Difusor", price: 25, stars: 5, avaliacoes: 5}
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
                <CatalogFilter>
                    <div>
                        <h3>ORGANIZAR POR:</h3>
                        <h2>Mais vendidos</h2>
                    </div>
                    <img src={AromaticasTittle}/> 
                    <div>
                        <h3>MOSTRANDO RESULTADO DE:</h3>
                        <h2>4 produtos</h2>
                    </div>
                    
                </CatalogFilter>
                <CatalogContainer>
                    {produtosHtml}
                </CatalogContainer>
            </Content>
            <Footer />
        </Container>
    )
}
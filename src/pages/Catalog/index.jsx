import { Container, Content, CatalogContainer, CatalogFilter} from "./styles"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { ProductCatalog } from "../../components/ProductCatalog"
import AromaticasTittle from "../../assets/images/VelasAromaticas.svg"
import {useState, useEffect} from 'react';
import axios from 'axios';


export function Catalog() {
    const [productsHtml, setProductsHtml] = useState([]);

    async function getProducts() {
        try {
            const response = await axios.get('http://localhost:8080/products');
            const products = response.data;
            console.log(products);
            const htmls = products.map(product => (
                <ProductCatalog key={product.id} title={product.title} price={product.price} />
            ));
            setProductsHtml(htmls);
        } catch (error) {
            console.error('Erro ao buscar produtos:', error);
        }
    }

    useEffect(() => {
        getProducts();
    }, []);

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
                    {productsHtml}
                </CatalogContainer>
            </Content>
            <Footer />
        </Container>
    )
}
import { useState, useEffect } from "react"
import { Sidebar } from "../../components/Sidebar"
import { api } from "../../services/api.js";
import { Clients, Container, Content, Materials, Orders, Products } from "./styles.js"

export function AdminPanel() {
    const [activeIcon, setActiveIcon] = useState('');

    const [products, setProducts] = useState([]);

    useEffect(() => {
        api.get('/products')
            .then(response => {
                console.log(response.data);
                setProducts(response.data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);

    return (
        <Container>
            <Sidebar activeIcon={activeIcon} setActiveIcon={setActiveIcon} />
            <Content>
                {activeIcon === 'orders' && (
                    <Orders>
                        <h1>PEDIDOS</h1>
                        <p>Todos os pedios da sua loja estarão presentes nessa lista.
                            Você pode editar o status ou excluir algum pedido.</p>
                    </Orders>
                )}
                {activeIcon === 'products' && (
                    <Products>
                        <h1>PRODUTOS</h1>
                        <p>Todos os produtos disponíveis na sua loja estarão presentes nessa lista.
                            Você pode editá-los, excluí-los ou criar novos produtos.</p>
                        <ul>
                            {products.map(product => (
                                <li key={product.id}>{product.title}{product.category}{product.price}</li>
                            ))}
                        </ul>
                    </Products>
                )}
                {activeIcon === 'materials' && (
                    <Materials>
                        <h1>RECURSOS</h1>
                        <p>Todos os materiais de produção disponíveis no seu estoque
                            estarão presentes nessa lista. Você pode editá-los, excluí-los ou criar novos.</p>
                    </Materials>
                )}
                {activeIcon === 'clients' && (
                    <Clients>
                        <h1>CLIENTES</h1>
                        <p>Todos os usuários registrados na sua loja estarão presentes nessa lista.</p>
                    </Clients>
                )}
            </Content>
        </Container>
    )
}
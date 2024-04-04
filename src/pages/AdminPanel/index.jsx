import { useState, useEffect } from "react"
import { Sidebar } from "../../components/Sidebar"
import { api } from "../../services/api.js";
import { LuListFilter } from "react-icons/lu";
import { GoPlus } from "react-icons/go";

import { ButtonArea, Clients, Container, Content, Filter, FilterArea, Input, Materials, NewProduct, Orders, Products, SearchIcon, StyledTd, StyledTh, Table } from "./styles.js"

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
                        <p className="description">Todos os pedios da sua loja estarão presentes nessa lista.
                            Você pode editar o status ou excluir algum pedido.</p>
                        <p className="quantity" style={{ color: '#6D6D6D' }}>{ } pedidos encontrados</p>
                    </Orders>
                )}
                {activeIcon === 'products' && (
                    <Products>
                        <h1>PRODUTOS</h1>
                        <p className="description">Todos os produtos disponíveis na sua loja estarão presentes nessa lista.
                            Você pode editá-los, excluí-los ou criar novos produtos.</p>
                        <ButtonArea>
                            <FilterArea>
                            <SearchIcon /><Input placeholder="Buscar produto" />
                            <Filter><LuListFilter />Filtros</Filter>
                            </FilterArea>
                            <NewProduct><GoPlus style={{ marginRight: '10px'}} />Adicionar novo produto</NewProduct>
                        </ButtonArea>
                        <p className="quantity" style={{ color: '#6D6D6D' }}>{products.length} produtos encontrados</p>
                        <Table>
                            <thead>
                                <tr>
                                    <StyledTh style={{ textAlign: 'left' }}>CATEGORIA</StyledTh>
                                    <StyledTh style={{ textAlign: 'left' }}>TÍTULO</StyledTh>
                                    <StyledTh style={{ textAlign: 'left' }}>FRAGRÂNCIA</StyledTh>
                                    <StyledTh style={{ textAlign: 'left' }}>PESO(g/ml)</StyledTh>
                                    <StyledTh style={{ textAlign: 'left' }}>QUANTIDADE</StyledTh>
                                    <StyledTh style={{ textAlign: 'left' }}>VALOR</StyledTh>
                                    <StyledTh style={{ textAlign: 'left' }}>DETALHES</StyledTh>
                                    <StyledTh style={{ textAlign: 'left' }}>EDITAR</StyledTh>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map(product => (
                                    <tr key={product.id}>
                                        <StyledTd>{product.category}</StyledTd>
                                        <StyledTd>{product.title}</StyledTd>
                                        <StyledTd>{product.fragrance}</StyledTd>
                                        <StyledTd>{product.weight}</StyledTd>
                                        <StyledTd>{product.amount}</StyledTd>
                                        <StyledTd>{product.price}</StyledTd>
                                        <StyledTd>Clique para ver</StyledTd>
                                        <StyledTd>Editar</StyledTd>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Products>
                )}
                {activeIcon === 'materials' && (
                    <Materials>
                        <h1>RECURSOS</h1>
                        <p className="description">Todos os materiais de produção disponíveis no seu estoque
                            estarão presentes nessa lista. Você pode editá-los, excluí-los ou criar novos.</p>
                        <p className="quantity" style={{ color: '#6D6D6D' }}>{ } recursos encontrados</p>
                    </Materials>
                )}
                {activeIcon === 'clients' && (
                    <Clients>
                        <h1>CLIENTES</h1>
                        <p className="description">Todos os usuários registrados na sua loja estarão presentes nessa lista.</p>
                        <p className="quantity" style={{ color: '#6D6D6D' }}>{ } clientes encontrados</p>
                    </Clients>
                )}
            </Content>
        </Container>
    )
}
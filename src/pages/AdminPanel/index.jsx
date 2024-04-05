import { useState, useEffect } from "react"
import Modal from 'react-modal';
import { Sidebar } from "../../components/Sidebar"
import { api } from "../../services/api.js";
import { LuListFilter } from "react-icons/lu";
import { GoPlus } from "react-icons/go";

import { ButtonArea, Clients, Container, Content, DescriptionColumn, Filter, FilterArea, Form, Input, Materials, ModalContent, NewProduct, Orders, ProductInput, Products, Row, SearchIcon, StyledTd, StyledTh, Table, TextArea } from "./styles.js"

Modal.setAppElement('#root');

export function AdminPanel() {
    const [activeIcon, setActiveIcon] = useState('');
    const [products, setProducts] = useState([]);

    const [newProductModalIsOpen, setNewProductModalIsOpen] = useState(false);

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
                            <NewProduct onClick={() => setNewProductModalIsOpen(true)}><GoPlus style={{ marginRight: '10px' }} />Adicionar novo produto</NewProduct>
                        </ButtonArea>
                        <Modal
                            isOpen={newProductModalIsOpen}
                            onRequestClose={() => setNewProductModalIsOpen(false)}
                            style={{
                                overlay: {
                                    backgroundColor: 'rgba(0, 0, 0, 0.75)'
                                },
                                content: {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: '2px',
                                    height: '80%',
                                    padding: '40px',
                                    backgroundColor: '#FFF4EE',
                                    width: '65vw',
                                    margin: 'auto',
                                }
                            }}
                        >
                            <ModalContent>
                                <h1 style={{ marginBottom: '25px' }}>REGISTRAR PRODUTO</h1>
                                <Form>
                                    <Row>
                                        <div>
                                            <h2>Título</h2>
                                            <ProductInput placeholder="Título do produto" />
                                        </div>
                                        <div>
                                            <h2>Categoria</h2>
                                            <ProductInput placeholder="Categoria do produto" />
                                        </div>
                                        <div>
                                            <h2>Fragrância</h2>
                                            <ProductInput placeholder="Fragrância do produto" />
                                        </div>
                                    </Row>
                                    <Row>
                                        <div>
                                            <h2>Quantidade</h2>
                                            <ProductInput placeholder="Quantidade em estoque" />
                                        </div>
                                        <div>
                                            <h2>Peso</h2>
                                            <ProductInput placeholder="Peso em g ou ml" />
                                        </div>
                                        <div>
                                            <h2>Valor</h2>
                                            <ProductInput placeholder="Valor do produto" />
                                        </div>
                                    </Row>
                                    <Row>
                                        <DescriptionColumn>
                                            <h2>Descrição</h2>
                                            <TextArea placeholder="Descrição do produto"></TextArea>
                                        </DescriptionColumn>
                                    </Row>
                                    <NewProduct style={{ marginLeft: '5vw' }} type="submit">REGISTRAR PRODUTO</NewProduct>
                                </Form>
                            </ModalContent>
                        </Modal>
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
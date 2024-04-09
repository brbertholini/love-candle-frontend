import { useState, useEffect } from "react";
import Modal from 'react-modal';
import { api } from "../../services/api.js";
import { ButtonArea, FilterArea, NewProduct, SearchIcon, Filter, Input, ModalContent, Form, Row, ProductInput, TextArea, Table, StyledTh, StyledTd, DescriptionColumn, Container, Update } from "./styles.js";
import { GoPlus } from "react-icons/go";
import { LuListFilter } from "react-icons/lu";
import { RxUpdate } from "react-icons/rx";
import { CancelIcon, XButton } from "../ResourcesSection/styles.js";


Modal.setAppElement('#root');

export function ProductsSection() {
    const [products, setProducts] = useState([]);
    const [newProductModalIsOpen, setNewProductModalIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        title: "",
        category: "",
        fragrance: "",
        quantity: "",
        weight: "",
        price: "",
        description: ""
    });

    const [, setLoading] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        api.post('/products', formData)
            .then(response => {
                console.log('Produto registrado com sucesso:', response.data);

                setFormData({
                    title: "",
                    category: "",
                    fragrance: "",
                    amount: "",
                    weight: "",
                    price: "",
                    description: ""
                });
                setNewProductModalIsOpen(false);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    const fetchProducts = () => {
        console.log("Carregando");
        setLoading(true);
        api.get('/products')
            .then(response => {
                setProducts(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error:', error);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <Container>
            <h1>PRODUTOS</h1>
            <p className="description">Todos os produtos disponíveis na sua loja estarão presentes nessa lista.
                Você pode editá-los, excluí-los ou criar novos produtos.</p>
            <ButtonArea>
                <FilterArea>
                    <SearchIcon /><Input placeholder="Buscar produto" />
                    <Filter><LuListFilter />Filtros</Filter>
                </FilterArea>
                <Update onClick={fetchProducts} ><RxUpdate /></Update>
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
                        height: '580px',
                        width: '860px',
                        padding: '40px',
                        backgroundColor: '#FFF4EE',
                        margin: 'auto',
                    }
                }}
            >
                <ModalContent>
                    <XButton onClick={() => setNewProductModalIsOpen(false)} ><CancelIcon style={{ marginLeft: 'auto' }} /></XButton>
                    <h1 style={{ marginBottom: '25px' }}>REGISTRAR PRODUTO</h1>
                    <Form>
                        <Row>
                            <div>
                                <h2>Título</h2>
                                <ProductInput
                                    name="title"
                                    value={formData.title}
                                    onChange={handleInputChange}
                                    placeholder="Título do produto" />
                            </div>
                            <div>
                                <h2>Categoria</h2>
                                <ProductInput 
                                    name="category"
                                    value={formData.category}
                                    onChange={handleInputChange}
                                    placeholder="Categoria do produto" />
                            </div>
                            <div>
                                <h2>Fragrância</h2>
                                <ProductInput 
                                    name="fragrance"
                                    value={formData.fragrance}
                                    onChange={handleInputChange}
                                    placeholder="Fragrância do produto" />
                            </div>
                        </Row>
                        <Row>
                            <div>
                                <h2>Quantidade</h2>
                                <ProductInput 
                                    name="amount"
                                    value={formData.amount}
                                    onChange={handleInputChange}
                                    placeholder="Quantidade em estoque" />
                            </div>
                            <div>
                                <h2>Peso</h2>
                                <ProductInput 
                                    name="weight"
                                    value={formData.weight}
                                    onChange={handleInputChange} 
                                    placeholder="Peso em g ou ml" />
                            </div>
                            <div>
                                <h2>Valor</h2>
                                <ProductInput 
                                    name="price"
                                    value={formData.price}
                                    onChange={handleInputChange} 
                                    placeholder="Valor do produto" />
                            </div>
                        </Row>
                        <Row>
                            <DescriptionColumn>
                                <h2>Descrição</h2>
                                <TextArea 
                                    name="description"
                                    value={formData.description}
                                    onChange={handleInputChange} 
                                    placeholder="Descrição do produto"></TextArea>
                            </DescriptionColumn>
                        </Row>
                        <NewProduct style={{ marginLeft: '2vw' }} onClick={handleSubmit} type="submit">REGISTRAR PRODUTO</NewProduct>
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
                            <StyledTd>R$ {product.price}</StyledTd>
                            <StyledTd>Clique para ver</StyledTd>
                            <StyledTd>Editar</StyledTd>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}
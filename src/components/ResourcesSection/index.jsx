import { Cancel, CancelIcon, Container, DeleteResource, ModalContent, NewResource, Row2, StyledTd, StyledTh, Table, XButton } from "./styles.js";
import { api } from "../../services/api.js";
import Modal from 'react-modal';
import { useState, useEffect } from "react";
import { ButtonArea, Filter, FilterArea, Form, Input, Row, SearchIcon, Update } from "../ProductsSection/styles.js";
import { LuListFilter } from "react-icons/lu";
import { GoPlus } from "react-icons/go";
import { RxUpdate } from "react-icons/rx";
import { FaEdit } from "react-icons/fa";



export function ResourcesSection() {
    const [resources, setResources] = useState([]);
    const [newResourceModalIsOpen, setNewResourceModalIsOpen] = useState(false);
    const [newEditResourceModalIsOpen, setEditResourceModalIsOpen] = useState(false);
    const [selectedResource, setSelectedResource] = useState(null);
    const [formData, setFormData] = useState({
        title: "",
        category: "",
        fragrance: "",
        quantity: "",
        price: "",
        quantityInStock: ""
    });

    const [, setLoading] = useState(false);

    const fetchResources = () => {
        console.log("Carregando");
        setLoading(true);
        api.get('/resources')
            .then(response => {
                setResources(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error:', error);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchResources();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSaveSubmit = (e) => {
        e.preventDefault();
        api.post('/resources', formData)
            .then(response => {
                console.log('Recurso registrado com sucesso:', response.data);

                setFormData({
                    title: "",
                    category: "",
                    fragrance: "",
                    amount: "",
                    price: "",
                    quantityInStock: ""
                });
                setNewResourceModalIsOpen(false);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    const handleEditSubmit = (e) => {
        e.preventDefault();
        api.put(`/resources/${selectedResource.id}`, formData)
           .then(response => {
             console.log('Recurso atualizado com sucesso:', response.data);
             setEditResourceModalIsOpen(false);
             fetchResources(); // update
           })
           .catch(error => {
             console.error('Error:', error);
           });
       };

    return (
        <Container>
            <h1>RECURSOS</h1>
            <p className="description">Todos os materiais de produção disponíveis no seu estoque
                estarão presentes nessa lista. Você pode editá-los, excluí-los ou criar novos.</p>

            <ButtonArea>
                <FilterArea>
                    <SearchIcon /><Input placeholder="Buscar produto" />
                    <Filter><LuListFilter />Filtros</Filter>
                </FilterArea>
                <Update onClick={fetchResources} ><RxUpdate /></Update>
                <NewResource onClick={() => setNewResourceModalIsOpen(true)}><GoPlus style={{ marginRight: '10px' }} />Adicionar novo recurso</NewResource>
            </ButtonArea>
            <Modal
                isOpen={newResourceModalIsOpen}
                onRequestClose={() => setNewResourceModalIsOpen(false)}
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
                        height: '480px',
                        width: '860px',
                        padding: '30px',
                        backgroundColor: '#FFF4EE',
                        margin: 'auto',
                    }
                }}
            >
                <ModalContent>
                <XButton onClick={() => setNewResourceModalIsOpen(false)} ><CancelIcon style={{ marginLeft: 'auto' }} /></XButton>
                    <h1 style={{ marginBottom: '25px', fontWeight:'800' }}>REGISTRAR RECURSO</h1>
                    <Form>
                        <Row>
                            <div>
                                <h2>Título</h2>
                                <Input
                                    name="title"
                                    value={formData.title}
                                    onChange={handleInputChange}
                                    placeholder="Título do recurso" />
                            </div>
                            <div>
                                <h2>Categoria</h2>
                                <Input
                                    name="category"
                                    value={formData.category}
                                    onChange={handleInputChange}
                                    placeholder="Categoria do produto" />
                            </div>
                            <div>
                                <h2>Fragrância</h2>
                                <Input
                                    name="fragrance"
                                    value={formData.fragrance}
                                    onChange={handleInputChange}
                                    placeholder="Fragrância do produto" />
                            </div>
                        </Row>
                        <Row>
                            <div>
                                <h2>Quantidade</h2>
                                <Input
                                    name="amount"
                                    value={formData.amount}
                                    onChange={handleInputChange}
                                    placeholder="Quantidade em estoque" />
                            </div>
                            <div>
                                <h2>Valor</h2>
                                <Input
                                    name="price"
                                    value={formData.price}
                                    onChange={handleInputChange}
                                    placeholder="Valor do produto" />
                            </div>
                            <div>
                                <h2>Quantidade (g ou ml)</h2>
                                <Input
                                    name="quantityInStock"
                                    value={formData.quantityInStock}
                                    onChange={handleInputChange}
                                    placeholder="Quantidade em g ou ml" />
                            </div>
                        </Row>
                        <Row2>
                        <Cancel onClick={() => setNewResourceModalIsOpen(false)}>Cancelar</Cancel>
                        <NewResource onClick={handleSaveSubmit} type="submit">Registrar produto</NewResource>
                        </Row2>
                    </Form>
                </ModalContent>
            </Modal>
            <p className="quantity" style={{ color: '#6D6D6D' }}>{ } recursos encontrados</p>
            <Table>
                <thead>
                    <tr>
                        <StyledTh style={{ textAlign: 'left' }}>CATEGORIA</StyledTh>
                        <StyledTh style={{ textAlign: 'left' }}>TÍTULO</StyledTh>
                        <StyledTh style={{ textAlign: 'left' }}>FRAGRÂNCIA</StyledTh>
                        <StyledTh style={{ textAlign: 'left' }}>UNIDADES</StyledTh>
                        <StyledTh style={{ textAlign: 'left' }}>QUANTIDADE (G/ML)</StyledTh>
                        <StyledTh style={{ textAlign: 'left' }}>VALOR</StyledTh>
                        <StyledTh style={{ textAlign: 'left' }}>EDITAR</StyledTh>
                    </tr>
                </thead>
                <tbody>
                    {resources.map(resource => (
                        <tr key={resource.id}>
                            <StyledTd>{resource.category}</StyledTd>
                            <StyledTd>{resource.title}</StyledTd>
                            <StyledTd>{resource.fragrance}</StyledTd>
                            <StyledTd>{resource.amount}</StyledTd>
                            <StyledTd>{resource.quantityInStock}</StyledTd>
                            <StyledTd>R$ {resource.price}</StyledTd>
                            <StyledTd><FaEdit
                                onClick={() => {
                                    setSelectedResource(resource);
                                    setEditResourceModalIsOpen(true);
                                }} style={{ fontSize: '20px', marginLeft: '18px' }} /></StyledTd>

                        </tr>

                    ))}
                </tbody>
            </Table>
            <Modal
                isOpen={newEditResourceModalIsOpen}
                onRequestClose={() => setEditResourceModalIsOpen(false)}
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
                        height: '480px',
                        width: '860px',
                        padding: '30px',
                        backgroundColor: '#FFF4EE',
                        margin: 'auto',
                    }
                }}
            >
                <ModalContent>
                    <XButton onClick={() => setEditResourceModalIsOpen(false)} ><CancelIcon style={{ marginLeft: 'auto' }} /></XButton>
                    <h1 style={{ marginBottom: '25px', fontWeight:'800' }}>EDITAR RECURSO</h1>
                    <Form>
                        <Row>
                            <div>
                                <h2>Título</h2>
                                <Input
                                    name="title"
                                    value={formData.title}
                                    onChange={handleInputChange}
                                    placeholder="Título do recurso" />
                            </div>
                            <div>
                                <h2>Categoria</h2>
                                <Input
                                    name="category"
                                    value={formData.category}
                                    onChange={handleInputChange}
                                    placeholder="Categoria do produto" />
                            </div>
                            <div>
                                <h2>Fragrância</h2>
                                <Input
                                    name="fragrance"
                                    value={formData.fragrance}
                                    onChange={handleInputChange}
                                    placeholder="Fragrância do produto" />
                            </div>
                        </Row>
                        <Row>
                            <div>
                                <h2>Quantidade</h2>
                                <Input
                                    name="amount"
                                    value={formData.amount}
                                    onChange={handleInputChange}
                                    placeholder="Quantidade em estoque" />
                            </div>
                            <div>
                                <h2>Valor</h2>
                                <Input
                                    name="price"
                                    value={formData.price}
                                    onChange={handleInputChange}
                                    placeholder="Valor do produto" />
                            </div>
                            <div>
                                <h2>Quantidade (g ou ml)</h2>
                                <Input
                                    name="quantityInStock"
                                    value={formData.quantityInStock}
                                    onChange={handleInputChange}
                                    placeholder="Quantidade em g ou ml" />
                            </div>
                        </Row>
                        <Row2>
                        <DeleteResource>Excluir recurso</DeleteResource>
                        <NewResource onClick={handleEditSubmit} type="submit">Atualizar recurso</NewResource>
                        </Row2>
                    </Form>
                </ModalContent>
            </Modal>
        </Container>
    )
}
import { Container, NewResource, StyledTd, StyledTh, Table } from "./styles.js";
import { api } from "../../services/api.js";
import Modal from 'react-modal';
import { useState, useEffect } from "react";
import { ButtonArea, Filter, FilterArea, Input, SearchIcon } from "../ProductsSection/styles.js";
import { LuListFilter } from "react-icons/lu";
import { GoPlus } from "react-icons/go";

export function ResourcesSection() {
    const [resources, setResources] = useState([]);
    const [newResourceModalIsOpen, setNewResourceModalIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        title: "",
        category: "",
        fragrance: "",
        quantity: "",
        price: "",
        quantityInStock: ""
    });

    useEffect(() => {
        api.get('/resources')
            .then(response => {
                setResources(response.data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);

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
                <NewResource onClick={() => setNewResourceModalIsOpen(true)}><GoPlus style={{ marginRight: '10px' }} />Adicionar novo recurso</NewResource>
            </ButtonArea>
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
                            <StyledTd>Editar</StyledTd>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    )
}
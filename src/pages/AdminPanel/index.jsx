import { useState } from "react"
import Modal from 'react-modal';
import { Sidebar } from "../../components/Sidebar"

import { Clients, Container, Content, Materials, Orders } from "./styles.js"
import { ProductsSection } from "../../components/ProductsSection/index.jsx";

Modal.setAppElement('#root');

export function AdminPanel() {
    const [activeIcon, setActiveIcon] = useState('');

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
                    <ProductsSection />
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
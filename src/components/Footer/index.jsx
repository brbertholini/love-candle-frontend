import LOVECANDLE from '../../assets/images/LOVECANDLE.svg';
import { Container, Content, Menu, Navigation, Info, Title, Social } from "./styles";

export function Footer() {
    return (
        <Container>
            <Content>
                <img src={LOVECANDLE} alt="Logo do site" />
                <Menu>
                    <Info>
                        <Title>INFORMAÇÕES</Title>
                        <p>(11) 99024-6137</p>
                        <p>lovecandle@gmail.com</p>
                    </Info>
                    <Navigation>
                        <Title>NAVEGAR</Title>
                        <ul>
                            <li>Início</li>
                            <li>Catálogo</li>
                            <li>Contato</li>
                        </ul>
                    </Navigation>
                    <Social>
                        <Title>REDES SOCIAIS</Title>
                        <ul>
                            <li>Instagram</li>
                            <li>Whatsapp</li>
                        </ul>
                    </Social>
                </Menu>
            </Content>
        </Container>
    )
}
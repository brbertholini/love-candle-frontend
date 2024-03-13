import { Container, Content, Menu, Navigation, MGlassIcon, Cart, IconArea } from "./styles";
import LOVECANDLE from '../../assets/images/LOVECANDLE.svg';

export function Header() {
    return (
        <Container>
            <Content>
                <img src={LOVECANDLE} alt="Logo do site" />
                <Menu>
                    <Navigation>
                        <ul>
                            <li>INÍCIO</li><li>CATÁLOGO</li><li>CONTATO</li>
                        </ul>
                    </Navigation>
                    <IconArea><MGlassIcon /></IconArea>
                    <IconArea><Cart /></IconArea>
                </Menu>
            </Content>
        </Container>
    )
}
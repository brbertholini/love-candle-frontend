import { Container, Content, Menu, Navigation, MGlassIcon, Cart, IconArea, Link } from "./styles";
import LOVECANDLE from '../../assets/images/LOVECANDLE.svg';

export function Header() {
    return (
        <Container>
            <Content>
                <Link href="/"><img src={LOVECANDLE} alt="Logo do site" /></Link>
                <Menu>
                    <Navigation>
                        <ul>
                            <li><Link href="/">INÍCIO</Link></li>
                            <li><Link  href="/Catalogo">CATÁLOGO</Link></li>
                            <li>CONTATO</li>
                        </ul>
                    </Navigation>
                    <IconArea><MGlassIcon /></IconArea>
                    <IconArea><Cart /></IconArea>
                </Menu>
            </Content>
        </Container>
    )
}
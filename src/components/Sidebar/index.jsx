import { CartIcon, BoxIcon, Container, Navigation, LeafIcon, ClientsIcon, IconArea } from "./styles"
import LOVECANDLEcenter from '../../assets/images/LOVECANDLEcenter.svg';

export function Sidebar() {
    return(
        <Container>
            <img src={LOVECANDLEcenter} alt="Logo" />
            <Navigation>
                <IconArea>
                <CartIcon />
                </IconArea>
                <IconArea>
                <BoxIcon />
                </IconArea>
                <IconArea>
                <LeafIcon />
                </IconArea>
                <IconArea>
                <ClientsIcon />
                </IconArea>
            </Navigation>
        </Container>
    )
}
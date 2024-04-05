import { CartIcon, BoxIcon, Container, Navigation, LeafIcon, ClientsIcon, IconArea } from "./styles.js"
import LOVECANDLEcenter from '../../assets/images/LOVECANDLEcenter.svg';
import PropTypes from 'prop-types';

export function Sidebar({ activeIcon, setActiveIcon }) {

    const handleIconClick = (icon) => {
        setActiveIcon(icon);
    };

    console.log(activeIcon);

    return(
        <Container>
            <img href="/" src={LOVECANDLEcenter} alt="Logo" />
            <Navigation>
                <IconArea onClick={() => handleIconClick('orders')}>
                <CartIcon />
                </IconArea>
                <IconArea onClick={() => handleIconClick('products')}>
                <BoxIcon />
                </IconArea>
                <IconArea onClick={() => handleIconClick('materials')}>
                <LeafIcon />
                </IconArea>
                <IconArea onClick={() => handleIconClick('clients')}>
                <ClientsIcon />
                </IconArea>
            </Navigation>
        </Container>
    )
}

Sidebar.propTypes = {
    activeIcon: PropTypes.string.isRequired,
    setActiveIcon: PropTypes.func.isRequired
};
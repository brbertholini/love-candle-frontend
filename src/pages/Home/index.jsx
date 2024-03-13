import { Container, Content, FirstSection, TextArea, Text, Button, ImageSection1 } from "./styles"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import RightImageSection1 from '../../assets/images/RightImageSection1.svg';

export function Home() {
    return(
        <Container>
            <Header />
            <Content>
                <FirstSection>
                    <TextArea>
                        <Text>Aqui criamos velas, difusores, lembrancinhas dentre outros diversos produtos artesanais, feitos a mão e com muito amor para você!</Text>
                        <Button>Conhecer</Button>
                    </TextArea>
                    <ImageSection1 src={RightImageSection1} alt="Imagem de um difusor com rosas" />
                </FirstSection>

            </Content>
            <Footer />
        </Container>
    )
}
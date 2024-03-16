import { Container, Content, Text, Form, NameEmail, Name, Email, Input } from "./styles"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"

export function Contact() {
    return(
        <Container>
            <Header />
            <Content>
            <Text>
                <h1>ENTRE EM CONTATO</h1>
                <p>Envie sua mensagem para qualquer dúvida ou sugestão.</p>
            </Text>
            <Form>
                <NameEmail>
                <Name>
                <h2>NOME</h2>
                <Input  type="name" required placeholder="Digite seu nome" ></Input>
                </Name>
                <Email>
                <h2>EMAIL</h2>
                <Input type="email" required placeholder="Digite seu email" />
                </Email>
                </NameEmail>
                <h2>QUAL SERIA O ASSUNTO?</h2>
                <select required>
                    <option value="" disabled selected>Selecione uma categoria</option>
                </select>
                <h2>MENSAGEM</h2>
                <textarea placeholder="Digite a mensagem"></textarea>
                <button type="submit">Enviar</button>
            </Form>
            </Content>
            <Footer />
        </Container>
    )
}
import { Container, Content, Text, Form, NameEmail, Name, Email, Input, LeftContent, RightContent, LocalIcon, Section, SectionInstagram, PhoneIcon, InstaIcon } from "./styles"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { DivisorLine } from "../../components/DivisorLine"

export function Contact() {
    return (
        <Container>
            <Header />
            <DivisorLine />
            <Content>
                <LeftContent>
                    <Text>
                        <h1>ENTRE EM CONTATO</h1>
                        <p>Envie sua mensagem para qualquer dúvida ou sugestão.</p>
                    </Text>
                    <Form>
                        <NameEmail>
                            <Name>
                                <h2>NOME</h2>
                                <Input type="name" required placeholder="Digite seu nome" ></Input>
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
                </LeftContent>
                <RightContent>
                    <h1>DETALHES DE CONTATO</h1>
                    <Section>
                    <p>Estamos disponíveis para responder suas perguntas o mais rápido possível. Aqui estão todas as informações de contato para quando você precisar!</p>
                    </Section>
                    <h1>ENDEREÇO</h1>
                    <Section>
                    <LocalIcon /><p>Tv. Jesus Álvares Cruz, casa 6- Vila Alpina, São Paulo - SP, 03204-035</p>
                    </Section>
                    <h1>TELEFONE</h1>
                    <Section>
                    <PhoneIcon /><p>(11) 9 9024-6137<br/>(11) 9 94424-9012</p>
                    </Section>
                    <h1>INSTAGRAM</h1>
                    <SectionInstagram>
                    <p>Siga a Love Candle no Instagram e acompanhe as novidades e promoções!</p>
                    <Section>
                    <InstaIcon /><p>@lovecandle.mahria</p>
                    </Section>
                    </SectionInstagram>

                </RightContent>
            </Content>
            <Footer />
        </Container>
    )
}
import { Container, Content, NewsletterRight, Title, InputNewsletter, Button, FormNewsletter } from "./styles";
import LOVECANDLEstart from '../../assets/images/LOVECANDLEstart.svg';
import { useState } from "react";

export function Newsletter() {

    const [email, setEmail] = useState('');

    const handleInputChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Email enviado:', email);
      setEmail('');
    };

    return (
        <Container>
            <Content>
                <img src={LOVECANDLEstart} alt="Logo do site" />
                <NewsletterRight>
                    <Title>Assine nossa Newsletter</Title>
                    <p>
                        Assine nossa Newsletter e receba novidades da Love Candle. Enviaremos mensalmente as
                        nossas atualizações para que você esteja sempre por dentro do que fazemos por aqui!
                    </p>
                    <FormNewsletter onSubmit={handleSubmit}>
                    <InputNewsletter type="email" value={email} onChange={handleInputChange} required placeholder="Digite seu email" />
                    <Button type="submit">Inscrever-se</Button>
                    </FormNewsletter>
                </NewsletterRight>
            </Content>
        </Container>
    )
}
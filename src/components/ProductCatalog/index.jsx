import { Container, Avaliacao } from "./styles";
import SampleProductImage from '../../assets/images/SampleProductImage.svg';
import FullStar from '../../assets/images/FullStar.svg';
import EmptyStar from '../../assets/images/EmptyStar.svg';



export function ProductCatalog(props) {

    const star = [EmptyStar, FullStar];
    const stars = props.stars;
    let starsimage = [];
    let avaliacoes = props.avaliacoes;
    let productTitle = props.title;
    let price = props.price;
    for(let i =0; i<5; i++){
        if(i < stars){
            starsimage.push(<img key={i} src={FullStar}/>);
        }
        else{
            starsimage.push(<img key={i} src={EmptyStar}/>);
        }
    };
    return (
        <Container>
            <img src={SampleProductImage}/>
            <Avaliacao>
                {starsimage}
                <p>({avaliacoes})</p>
            </Avaliacao>
            <h1>{productTitle}</h1>
            <h2>R${price}</h2>
        </Container>
    )
}
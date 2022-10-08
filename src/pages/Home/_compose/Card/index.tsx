import {
  Container,
  Row,
  TextContainer,
  Number,
  Image,
  Rate,
  Icon,
  Text,
  Category,
  Title,
  Videos,
  Play,
  Subtitle,
} from './styles';

interface CardProps {
  image: string;
  rate: string;
  category: string;
  title: string;
  videos: string;
  subtitle: string;
}

function Card({ image, rate, category, title, videos, subtitle }: CardProps) {
  return (
    <Container>
      <Image src={image} />
      <TextContainer>
        <Row>
          <Rate>
            <Icon />
            <Text></Text>
          </Rate>
        </Row>
        <Category></Category>
        <Row>
          <Title></Title>
          <Videos>
            <Play />
            <Number></Number>
          </Videos>
        </Row>
        <Subtitle></Subtitle>
      </TextContainer>
    </Container>
  );
}

export default Card;

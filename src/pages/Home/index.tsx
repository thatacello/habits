import {
  Cards,
  CardsRow,
  Color,
  Column,
  Container,
  FlipperContainer,
  FooterContainer,
  Icon,
  Nav,
  ProfilesContainer,
  Row,
} from './styles';
import home from '../../assets/icons/home.svg';
import conteudo from '../../assets/icons/conteudo.svg';
import conta from '../../assets/icons/conta.svg';
import { cardContent, profileContent, talksContent } from './content';
import Card from './_compose/Card';
import Profile from './_compose/Profile';
import Flipper from './_compose/Flipper';

function Home() {
  return (
    <Container>
      <Nav>
        <ul>
          <li>
            <Icon src={home} /> Home
          </li>
          <li>
            <Icon src={conteudo} /> Conteúdo
          </li>
          <li>
            <Icon src={conta} /> Conta
          </li>
        </ul>
      </Nav>

      <Cards>
        <Row>
          <div>
            <h1 className="first-text">Pequenas escolhas&nbsp;</h1>
            <Color>mudam o mundo</Color>
          </div>
          <input type="text" placeholder="Pesquise por assuntos" />
        </Row>
        <CardsRow>
          {cardContent.map((item, index) => (
            <Card
              key={item.rate + index}
              image={item.image}
              rate={item.rate}
              category={item.category}
              title={item.title}
              videos={item.videos}
              subtitle={item.subtitle}
            />
          ))}
        </CardsRow>
      </Cards>

      <FooterContainer>
        <Column>
          <h2>Atendimento disponíveis</h2>
          <p>Segunda-feira</p>
          <ProfilesContainer>
            {profileContent.map((item, index) => (
              <Profile
                key={item.name + index}
                profission={item.profission}
                name={item.name}
                time={item.time}
                photo={item.photo}
              />
            ))}
          </ProfilesContainer>
        </Column>

        <Column>
          <h2>Palestras da semana</h2>
          <FlipperContainer>
            {talksContent.map((item, index) => (
              <Flipper
                key={item.title + index}
                image={item.image}
                title={item.title}
                time={item.time}
              />
            ))}
          </FlipperContainer>
        </Column>
      </FooterContainer>
    </Container>
  );
}

export default Home;

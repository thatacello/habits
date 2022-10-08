import { Cards, Color, Container, Icon, Nav, Row } from './styles';
import home from '../../assets/icons/home.svg';
import conteudo from '../../assets/icons/conteudo.svg';
import conta from '../../assets/icons/conta.svg';

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
          <input type="text" placeholder='Pesquise por assuntos' />
        </Row>
        
      </Cards>
    </Container>
  );
}

export default Home;

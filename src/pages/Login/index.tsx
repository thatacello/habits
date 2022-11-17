import { Color, Column, Container, Content, FormContainer } from './styles';

function Login() {
  return (
    <Container>
      <Content>
        <Column className="left-column">
          <h1>
            Venha mudar o <Color>mundo</Color> e os seus <Color>hábitos</Color>{' '}
            também
          </h1>
        </Column>
        <Column className="right-column">
          <h3>Preencha conforme os dados da sua empresa:</h3>
          <FormContainer>
            <form>
              <input type="text" name="" placeholder="funcional" />
              <input type="password" name="" placeholder="e-mail" />
              <input type="password" name="" placeholder="senha" />
            </form>
            <a href="/interesses">
              Login
            </a>
            <button>
              Cadastre-se
            </button>
          </FormContainer>
        </Column>
      </Content>
    </Container>
  );
}

export default Login;

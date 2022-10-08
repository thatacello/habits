import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
`;

export const Nav = styled.div`
  box-sizing: border-box;
  width: 100%;
  background-color: #0c0636;
  color: #29d799;
  font-weight: 700;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  ul {
    display: flex;
    flex-direction: row;
    list-style-type: none;

    li {
      margin-right: 2rem;
      display: flex;
      align-items: top;
      align-content: top;
    }
  }
`;

export const Icon = styled.img`
  width: 1rem;
  height: 1rem;
  margin-right: 0.5rem;
`;

export const Cards = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background-color: #29d799;
  padding: 1rem 2rem;
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: row;
  }

  .first-text {
    font-size: 1.5rem;
    color: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  input {
    border: none;
    border-radius: 10px;
    padding: 0 1rem;
    width: 15rem;

    ::placeholder {
      color: #29d799;
      font-size: 1rem;
      font-weight: 700;
    }
  }
`;

export const Color = styled.h1`
  color: #102948;
  font-size: 1.5rem;
`;

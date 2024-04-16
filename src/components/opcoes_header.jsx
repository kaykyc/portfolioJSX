import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Opcoes = styled.ul`
  display: flex;
  justify-content: flex-end;
  

  @media screen and (max-width: 768px) {
    display:flex;
    align-items: flex-start;
    background-color: #5A0220; 
    padding: 1.25rem; 
    position: fixed;
    top: 1.5rem;
    right: 0;
    z-index: 100;
    width: 100%;
    height: 44vh; 
    overflow-y: auto; 
    flex-direction: column;

  

`;

const Opcao = styled.li`
  font-family: 'Poppins';
  font-weight: 600;
  font-size: 1.125rem;
  color: white;
  margin-left: 2.813rem;
  list-style-type: none;
  text-align: left;
  margin-right: 0;

  @media screen and (max-width: 768px) {
    font-family: 'Poppins';
    font-weight: 600;
    font-size: 1.125rem;
    color: white;
    list-style-type: none;
    margin-bottom: 15px; 

  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const textoOpcoes = [
  { text: 'Home', path: '/' }, 
  { text: 'Projetos', path: '/' }, 
  { text: 'Sobre Mim', path: '/' },
];

function OpcoesHeader() {
  return (
    <Opcoes>
      {textoOpcoes.map((opcao, index) => (
        <Opcao key={index}>
          <Link to={opcao.path}><p>{opcao.text}</p></Link>
        </Opcao>
      ))}
    </Opcoes>
  );
}

export default OpcoesHeader;
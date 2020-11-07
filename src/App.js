import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import Frase from './Frase';

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 5rem;
`;

const Button = styled.button`
  background: -webkit-linear-gradient(top left, #007d23 0%, #007d23 20%, cyan 100% );
  background-size: 300;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 5rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: none;
  :hover{
    cursor: pointer;
  }
`;

function App() {

  const [ frase, setFrase ] = useState({});

  const callAPI = async () => {
    const api = await fetch('http://breaking-bad-quotes.herokuapp.com/v1/quotes')
    const frase = await api.json()
    setFrase(frase[0])
  }

  useEffect( () =>{
    callAPI()
  }, [])

  return (
    <Contenedor>
      <Button
        onClick={() => callAPI()}
      >
        Obtener frase
      </Button>
      <Frase
        frase={frase}
      />
    </Contenedor>
  );
}

export default App;




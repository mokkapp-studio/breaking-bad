import React from 'react';
import styled from '@emotion/styled';

const ConenedorFrase = styled.div`
    padding: 3rem;
    border-radius: 10px;
    background-color: #ffffff;
    max-width: 700px;
    margin-top: 1em;
`

const Frase = ({frase}) => {


    return ( 
        <ConenedorFrase>
            <h2>{frase.author}</h2>
            <br/>
            <p>{frase.quote}</p>
        </ConenedorFrase>
        
     );
}
 
export default Frase;
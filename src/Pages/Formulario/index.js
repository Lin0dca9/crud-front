import React, {useState} from 'react';
import * as Styles from './styled';
import {Link} from 'react-router-dom';
import api from '../../services/api';



function Formulario(){
    return(
        <Styles.Container>
            <Styles.Card>
                <h2>Formulário</h2>
                <input type="text" placeholder='nome'/>
                  <input type="number"placeholder='telefone'/>
                  <input type="email" placeholder='e-mail'/>
                  <input type="text" placeholder='endereço'/>
                   <input type="text" placeholder='endereço'/>z
                  <Link to="/tabela">
                    <button type="submit">Cadastrar</button>
                </Link>
              
            </Styles.Card>
        </Styles.Container>
    );
}

export default Formulario;
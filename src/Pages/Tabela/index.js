import React from 'react';
import * as Styles from '../Tabela/styled';
import { Table } from 'react-bootstrap'
import Header from '../../components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
function Tabela (){
    
    return(
    <Styles.Container>
        <Header/>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Telefone</th>
                        <th>Endereço</th>
                        <th>Opções</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>teste</th>
                        <th>teste</th>
                        <th>teste</th>
                        <th>teste</th>
                        <th>
                            <button type="submit">atualizar</button>
                            
                            <button type="submit">excluir</button>
                        
                        </th>
                        
                    </tr>
                    <tr>
                        <th>teste</th>
                        <th>teste</th>
                        <th>teste</th>
                        <th>teste</th>
                    </tr>
                </tbody>
            </Table>
    </Styles.Container>
    );
};

export default Tabela;
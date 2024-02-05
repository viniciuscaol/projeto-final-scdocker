import { useState, useEffect } from 'react'
import {    Container, Title, Slogan, Eventos, EventosLista,
            EventosItem, EventoTitulo, EventoImagem, EventoDataHora } from './homepage.styles'
import axios from 'axios'

import Cabecalho from '../../components/Cabecalho/cabecalho'
import Rodape from '../../components/Rodape/rodape'
function Homepage() {

    const [eventos, setEventos] = useState([]);

    useEffect(() => {
        const listarEventos = async () => {
            try {
                const response = await axios.get('http://localhost:3000/eventos');
                setEventos(response.data);
            } catch (error) {
                console.error('Erro ao buscar eventos', error);
            }
        }
        listarEventos();
    })
    return (
        <>
            <Cabecalho />
            <Container>
                <Title>Bem vindo a Casa de eventos!</Title>
                <Slogan>Essa é a casa de festas que realiza sonhos.</Slogan>
                <Eventos>
                    <EventosLista>
                        { eventos.map((evento, index) => (
                        <EventosItem key={index}>
                            <EventoTitulo>{ evento.titulo }</EventoTitulo>
                            <EventoImagem src={ evento.url_da_imagem } alt={ evento.titulo } />
                            <br />
                            <EventoDataHora>Data e Hora: { evento.data } - { evento.horario }</EventoDataHora>
                        </EventosItem>
                        ))}
                    </EventosLista>
                </Eventos>               
            </Container>
            <Rodape />
        </>
    )
}

export default Homepage
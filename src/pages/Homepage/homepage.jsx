import { useState, useEffect } from 'react'
import { Container, Title, Slogan, Eventos, EventosLista } from './homepage.styles' 
import axios from 'axios'

import Cabecalho from '../../components/Cabecalho/cabecalho'
import Rodape from '../../components/Rodape/rodape'
import Card from '../../components/Card/card'
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
                        <Card
                            key={ index }
                            titulo={ evento.titulo } 
                            urlImagem={evento.url_da_imagem}
                            data={ evento.data }
                            horario={ evento.horario }
                            id={ evento.id }
                        />
                        ))}
                    </EventosLista>
                </Eventos>               
            </Container>
            <Rodape />
        </>
    )
}

export default Homepage
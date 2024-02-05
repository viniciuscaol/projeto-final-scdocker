import { useState, useEffect } from 'react'
import axios from 'axios'

import Cabecalho from '../../components/Cabecalho/cabecalho'
import Rodape from '../../components/Rodape/rodape'
function ListaEventos() {

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
            <h1>Área administrativa</h1>
            <h2>Lista de Eventos</h2>
            { eventos.map((evento, index) => (
            <div key={index}>
                <h3>{ evento.titulo }</h3>
                <img src={ evento.url_da_imagem } alt={ evento.titulo } />
                <br />
                <p>Data e Hora: { evento.data } - { evento.horario }</p>
            </div>
            ))}
            <Rodape />
        </>
    )
}
export default ListaEventos
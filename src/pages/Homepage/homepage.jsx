import { Container, Title, Slogan } from './homepage.styles'

import Cabecalho from '../../components/Cabecalho/cabecalho'
import Rodape from '../../components/Rodape/rodape'
function Homepage() {
    return (
        <>
            <Cabecalho />
            <Container>
                <Title>Bem vindo a Casa de eventos!</Title>
                <Slogan>Essa é a casa de festas que realiza sonhos.</Slogan>
            </Container>
            <Rodape />
        </>
    )
}

export default Homepage
import { useRef } from 'react'

function Exercicios () {
    // EXEMPLO COM USEREF
    const paragraphRef = useRef(null);
    const adicionarTexto = () => {
        if (paragraphRef.current) {
            paragraphRef.current.innerText += ' Texto adicionado ';
        }
    };
    return (
        <>
            <h1>Exemplo de useRef</h1>
            <p ref={paragraphRef}>Este é um parágrafo.</p>
            <button onClick={adicionarTexto}>Adicionar texto</button>
        </>
    )
}

export default Exercicios
export default function Second(props) {
    const status = props.nota >= 7 ? 'Aprovado' : 'Reprovado'
    return (
        <>
            <h2> {props.titulo} </h2>
            <p> {props.aluno} tem nota {props.nota} e esta <strong> {status} </strong></p>
        </>
    )
} 
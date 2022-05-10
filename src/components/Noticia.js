function Noticia() {
    const noticia ={
        titulo: 'Curso de React 2022',
        descripcion: 'Esta es una descripcion de desectructuracion de objetos'
    }
    const {titulo, descripcion} = noticia;
    return (
        <div className="mi-clase">
            <h1 className="mi-titulo">{titulo}</h1>
            <h2 className="mi-descripcion">{descripcion}</h2>
        </div>
    )
}
export default Noticia;
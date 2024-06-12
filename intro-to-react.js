// Componente Funcional
function Saludo() {
    return <h1>Hola, Mundo</h1>
}

// Componente de Clase
class Saludo extends React.Component {
    render() {
        return <h1>Hola, Mundo</h1>
    }
}

const elemento = <h1>Hola, Mundo</h1>

class Bienvenida extends React.Component {
    render() {
        return <h1 className={this.props.className}>Hola, {this.props.name} {this.props.lastname}</h1>
    }
}

function Bienvenida(props) { // { name: 'Luis', lastname: 'Rodriguex' }
    return <h1 className={props.className}>Hola, {props.name} {props.lastname}</h1>
}

{/* <input id="" name="" type="" class="" style="" /> */ }

<Bienvenida name="Luis" lastname="Rodriguez" className="box" />

/* Hooks */
/* 
useState
useEffect
useRef
useContext

custom Hooks
useCallback
useReduce

*/


import React, { Fragment } from 'react' // <= 17 o >= 18
import ReactDOM from 'react-dom'  // <= 17
//import ReactDOM from 'react-dom/client'  // >= 18

function Bienvenida(props) {
    return <h1>Hola, {props.name}</h1>
}

function Main() {
    return (
        <h1>Contenido</h1>
    )
}

const Saludo = (props) => {
    return (
        <>
            <Bienvenida name={props.name} />
            <Main />
        </>
    )
}

// v17
ReactDOM.render(<Saludo name="Luis" />, document.querySelector('#root'))

// v18
ReactDOM.createRoot(document.querySelector('#root')).render(<Saludo name="Luis" />)
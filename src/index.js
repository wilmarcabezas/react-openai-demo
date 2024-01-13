import ReactDOM from "react-dom";
import ConnectAPI from "./components/ConnectAPI";
import { useState } from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
        <h1>Welcome to ReactOPENAI</h1>
        <Formulario/>
        <hr />
        
    </>
)

function Formulario() {
    const [message, setMessage]=  useState('')

    const handleInput = (event)=>{
        console.log(event.target.value)
        setMessage(event.target.value)
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        console.log(message)
    }

    return (
        <form onSubmit={handleSubmit}>
            <textarea onChange={handleInput} name="prompt" placeholder="Write a prompt" /><br />
            <button type="submit">Enviar</button>
        </form>
    )
}
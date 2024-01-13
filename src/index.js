import ReactDOM from "react-dom";
import { useState } from "react";
import ConnectAPI from "./components/ConnectAPI";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
        <h1>Welcome to ReactOPENAI</h1>
        <Formulario/>
        <ConnectAPI />
        <hr />
        
    </>
)

function Formulario() {
    const [messagePrompt, setMessagePrompt]=  useState('')

    const handleInput = (event)=>{
        setMessagePrompt(event.target.value)
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        console.log(messagePrompt)
    }

    return (
        <form onSubmit={handleSubmit}>
            <textarea 
            onChange={handleInput} 
            name="prompt" 
            placeholder="Write a prompt" />
            
            <br />

            <button type="submit">Enviar</button>
        </form>
    )
}
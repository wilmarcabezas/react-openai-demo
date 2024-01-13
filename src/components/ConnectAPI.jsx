function ConnectAPI(props) {

    //const message="Escribe el pais mas poblado del Mundo,  solo usa cinco letras";

    fetch('https://api.openai.com/v1/chat/completions',{
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer "
        },
        body: JSON.stringify({
            "model": "gpt-3.5-turbo",
            "messages": [{"role": "user", "content":props.message }],
            "temperature": 0,
            "max_tokens":10,
        })
    })
    .then(response => response.json())
    .then(data=>console.log(data))

    return (
        <>
            Connect to OPENAPI
        </>
    )


//   curl https://api.openai.com/v1/chat/completions \
//   -H "Content-Type: application/json" \
//   -H "Authorization: Bearer $OPENAI_API_KEY" \
//   -d '{
//      "model": "gpt-3.5-turbo",
//      "messages": [{"role": "user", "content": "Say this is a test!"}],
//      "temperature": 0.7
//    }'
//    Bearer Token: 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 
}

export default ConnectAPI;
import app from "./app";

function main() {
    try {
    app.listen(3020, 'localhost', () => {console.log("Servidor conectado")})    
    } catch (error) {
    console.log('Erro ao iniciar o Servidor, ', error)    
    }
}

main()
import app from './server.js';
import parseArgs from 'minimist';

const options = { default: { port: 8080 } }

const PORT = process.env.PORT;

const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))

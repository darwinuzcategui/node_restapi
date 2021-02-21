import  dotenv  from "dotenv";
import Server from './models/server';

//Configurar dot.env 
dotenv.config();
export const nombre = 'Darwin!!!';
console.log(nombre);


const server = new Server();

server.listen();

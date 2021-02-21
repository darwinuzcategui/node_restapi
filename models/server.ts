// caso uno import express from "express";
// recomendada es asi--> desetructuracion
import express, {Application  } from "express";
import userRoutes from "../routes/usuario";
import cors from "cors";
import db from "../db/connection";


class Server {

    //definimos las propiedades
    // caso uno private app:express.Application;
    private app: Application;
    private port:string ;
    private apiPaths = {
        usuarios: '/api/usuarios',
    }


    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';

        this.dbConnection();

         //llamamos nuestros middlewares primero tenemo que llamar los middlewares 
         // Metodos iniciales
         this.middlewares();

        //definimos mis rutas
        this.routes();
       
    }

    async dbConnection() {
        try {
            
            await db.authenticate();
            console.log('Basedatos Online');


        } catch (error) {
            throw new Error(error);
            
        }
        
    }


    //middlewares son funciones que se ejecuta ante de que pase nuestra ruta
    middlewares() {

        // CORS
        this.app.use( cors() );

        // Lectura del body
        this.app.use(express.json() );

        // Carpeta Publica
        this.app.use(express.static('public'));


    }

    routes() {
        this.app.use(this.apiPaths.usuarios, userRoutes)
    }


    listen() {
        this.app.listen(this.port,()=>{
            console.log('servidor Corriendo puert ' +this.port);
        })
    }
}

export default Server;
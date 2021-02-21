import { DataType, DataTypes } from "sequelize";
import db from "../db/connection";


const Usuarios = db.define("Usuarios",{

    nombre: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    estado: {
        type: DataTypes.BOOLEAN
    },

});

export default Usuarios;
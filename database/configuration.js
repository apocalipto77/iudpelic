const mongoose = require('mongoose');



  async function mongoConn() {
    try{
        await mongoose.connect(process.env.MONGO_URI, {
            // Configuraciones si las necesitas
        });
        


        console.log("conexion OK")
    } catch (e) {
        console.log("error de Conexion", e);
        throw new Error("error de conexion");
    }
    
    
} 
module.exports = { mongoConn };
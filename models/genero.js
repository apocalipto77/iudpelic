const {Schema, model } = require ('mongoose') //ORM : mapeo relacinal objeto-calse esquema para conversion o mapeo, funcion model

const GeneroSchema =({
    nombre: {
        type: String,
        require: [ true, 'Nombre genero requerido'],
        minlength : 1 // minimo que sea un capo obligatorio 

    },
    estado: { //si esta activo o inactivo,alamcena un estado o un genero que se creo por default le ponga verdadedo "true" y que sea requerido
        type: Boolean,
        default: true,
        require: true,


    },
    fechaCreacion1: {
        type: Date,
        default: new Date ()//si no le pongo fecha me la de automaticamente


    },
    fechaActualizacion: {
        type: Date,
        default: new Date ()

    },
    descripcion: {
        type: String,

    }

})

module.exports = model('genero', GeneroSchema)
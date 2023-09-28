const {Schema, model } = require ('mongoose') //ORM : mapeo relacinal objeto-calse esquema para conversion o mapeo, funcion model

const MediaSchema =({
    serial:{
        type: String,
        required: [true, 'media ya existe']

    },
    titulo: {
        type: String,
        required: [ true, 'Nombre titulo requerido'],
       //resto de atrivutos
    },
    URLPelicula:{
        type: String,
        unique: true,

    },
    Sinopsis: {
        type: String
    },    
    ImagenPortada: {
        type: String, //  usar String para almacenar la URL de la imagen o Buffer para almacenar la imagen directamente en la base de datos
       required: true, // imagen obligatoria
  
     },
     FechaCreacion: {
        type: Date,
        default: new Date()
    },
    FechaActualizacion: {
        type: Date,
        default: new Date()
    },


     anoEstreno: {
        type: Number,
        required: true, //  año de estreno  obligatorio
        min: 1900, // El año mínimo permitido
        max: new Date().getFullYear(), // El año máximo permitido (el año actual)
        
      },

    genero: { 
      type: schrma.Types.ObjetId, //llave foranea de un esquema
      ref: 'Genero',GeneroSchema,  // aque modelo es la referencia
      required : true
    }

})

module.exports = model('Media',MediaSchema)
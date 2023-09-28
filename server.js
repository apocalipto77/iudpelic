
const app = require('./app') // import el archivo



app.set('port',process.env.PORT || 4000) // asignar un puerto de escucha con el metodo set; process.env.( para traer el valor )
// A la instancia de experss (APP) le asignamos la variables .set('port',process.env.PORT)



app.listen(app.get('port'),() => {
    console.log(`Servidor arrancó en puerto: ${app.get('port')}`)

    
})
const {Router} = require('express') //destructurin
const { testing } = require('../controllers/test') //como controler esta adentro pongo dod puntos para salirme 

const router =  Router() //Intancia de la clase

router.get('/test', testing)

module.exports = router
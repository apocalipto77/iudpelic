
const { request, response } = require ('express')

const testing = (req= request, res = response) => { //endponit
    const{} = req.query
    return res.json({
      msj : `${req.query.msj} ${req.query.msj2}`

    })


}

module.exports = { testing }


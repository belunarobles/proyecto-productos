const express = require('express')
const router = express.Router()

const { body, validationResult } = require('express-validator')

router.get('/contacto', (req, res) => {
    res.render('contacto', { values : {} })
})

router.post('/contacto', [
    body('nombre', 'Ingresar nombre').exists().isLength(3).trim().escape(),
    body('email', 'Ingresar email').exists().isEmail().trim().normalizeEmail(),
    body('mensaje', 'Ingresar mensaje').exists().notEmpty(),
], (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        res.render('contacto', { values: req.body, errors: errors.array() }) //al haber un error en el formulario, vuelve a recargar el formulario.
    } else {
        res.send('Enviando...')
    }
})

module.exports = router
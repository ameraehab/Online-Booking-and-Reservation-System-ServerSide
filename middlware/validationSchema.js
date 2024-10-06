const {body} = require('express-validator')
exports.validationSchema = ()=>{
   return  [
        body('productName')
            .notEmpty()
            .withMessage('name is required')
            .isLength({min : 3 })
            .withMessage('min length is 3 '),
        body('price')
            .notEmpty()
            .withMessage('price is required')
    ]
}
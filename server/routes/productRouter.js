const router = require('express').Router()
const productCtrl = require('../controllers/productCtrl')
const auth = require('../middleware/auth')
const upload = require('../middleware/multer')


router.route('/products')
.get(productCtrl.getProducts)
.post(upload.single("img"),productCtrl.createProducts
)
  

router.route('/products/:id')
.delete(productCtrl.deleteProduct)
.put(productCtrl.updateProduct)     

module.exports = router       
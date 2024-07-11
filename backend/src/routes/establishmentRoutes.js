const express = require('express');
const router = express.Router();
const establishmentController = require('../controllers/establishmentController');
const { uploadEstablishments } = require('../config/multer');
const auth = require('../middlewares/decodeJWT');

router.get('/', auth, establishmentController.EstablishmentList);
router.get('/validar', auth, establishmentController.EstabelecimentosPorValidar);
router.get('/mobile', establishmentController.estabelecimentosMobile); 
router.post('/', auth, uploadEstablishments.single('foto'), establishmentController.EstablishmentCreate);
router.post('/mobile', auth, uploadEstablishments.single('foto'), establishmentController.criarEstabelecimentoMobile);
router.put('/:id', uploadEstablishments.single('foto'), establishmentController.EstablishmentEdit);
router.get('/:id', establishmentController.EstablishmentGet);
router.delete('/:id', establishmentController.EstablishmentDelete);


module.exports = router;

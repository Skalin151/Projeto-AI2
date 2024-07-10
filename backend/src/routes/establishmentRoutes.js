const express = require('express');
const router = express.Router();
const establishmentController = require('../controllers/establishmentController');
const { uploadEstabelecimentos } = require('../config/multer');
const auth = require('../middlewares/decodeJWT');

router.get('/', auth, establishmentController.EstablishmentList);
router.get('/validar', auth, establishmentController.EstabelecimentosPorValidar);
router.get('/mobile', establishmentController.estabelecimentosMobile); 
router.post('/', auth, uploadEstabelecimentos.single('foto'), establishmentController.EstablishmentCreate);
router.post('/mobile', auth, uploadEstabelecimentos.single('foto'), establishmentController.criarEstabelecimentoMobile);
router.put('/:id', uploadEstabelecimentos.single('foto'), establishmentController.EstablishmentEdit);
router.get('/:id', establishmentController.EstablishmentGet);
router.delete('/:id', establishmentController.EstablishmentDelete);


module.exports = router;

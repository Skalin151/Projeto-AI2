const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');
const { uploadEventos } = require('../config/multer');
const auth = require('../middlewares/decodeJWT');


router.get('/', auth, eventController.EventList);
router.get('/validar', auth, eventController.EventosPorValidar);
router.post('/mobile', auth, uploadEventos.single('foto'), eventController.CriarEventoMobile);
router.get('/mobile', eventController.eventosMobile);
router.post('/', auth, uploadEventos.single('foto'), eventController.EventCreate);
router.delete('/:id', eventController.EventDelete);
router.get('/:id', eventController.EventGet);
router.put('/:id', uploadEventos.single('foto'), eventController.EventEdit);
router.get('/:id/inscricao', eventController.getInscricaoEvento);
router.post('/inscrever/:id', auth, eventController.EventSubscribe);
router.delete('/desinscrever/:id', auth, eventController.EventUnsubscribe);
router.get('/inscricao/:id', auth, eventController.SubscriptionVerify);



module.exports = router;    
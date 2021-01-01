import { Router } from 'express';
import multer from 'multer';
import uploadConfig from './config/upload';
import Controller from './controllers/Controller';

import OrphanagesController from './controllers/OrphanagesController';

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanage/:id', OrphanagesController.show);
routes.get('/live', Controller.index);
routes.post('/orphanages', upload.array('images'), OrphanagesController.create);


export default routes;
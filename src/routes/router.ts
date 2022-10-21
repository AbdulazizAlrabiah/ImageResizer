import express from 'express';
import resizeImage from './api/resizeImage';

const routes = express.Router();

routes.get('/images', resizeImage.resizeImageAPI);

export default routes;

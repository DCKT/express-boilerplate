/**
* Videos Route
* path: /videos
******************** */

import express from "express";
import Controller from "../controllers/VideosController";

var router = express.Router();


router.get('/', Controller.index.get);
router.get('/:slug', Controller.show.get);

export default router;

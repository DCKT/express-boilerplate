/**
* Series Route
* path: /series
******************** */

import express from "express";
import Controller from "../controllers/SeriesController";

var router = express.Router();


router.get('/', Controller.index.get);

export default router;

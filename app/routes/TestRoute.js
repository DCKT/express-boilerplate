/**
* Test Route
* path: /
******************** */

import express from "express";
import Controller from "../controllers/TestController";

var router = express.Router();


router.get('/', Controller.index.get);

export default router;

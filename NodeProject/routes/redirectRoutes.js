import redirectController from'../controllers/redirectController.js';
import express from 'express';
const redirectRouter = express.Router();

// Define routes for redirects
redirectRouter.get("/:linkId", redirectController.redirectLink);
redirectRouter.get("/chart/:linkId", redirectController.getDataSegmentation);

export default redirectRouter;

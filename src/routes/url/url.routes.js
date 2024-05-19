"use strict";
import express from "express";
const router = express.Router();
import UrlController from "../../controllers/url.controller.js";

router.get("/:shortUrl", UrlController.getUrl);
router.get("/", (req, res) => {
    return res.status(200).json({
        name: "URL",
    });
});

router.post("/", UrlController.setUrls);

export default router;

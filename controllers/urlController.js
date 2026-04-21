const Url = require('../models/urlModel');
const { nanoid } = require('nanoid');

async function generateUrl(req, res) {
    try {
        const { url } = req.body;

        if (!url) {
            return res.status(400).json({ message: "URL is mandatory" });
        }

        const shortId = nanoid(6);

        const newUrl = await Url.create({
            shorturl: shortId,
            actualurl: url
        });

        return res.status(201).json({
            message: "Short URL created",
            shortUrl: shortId,
            data: newUrl
        });

    } catch (err) {
        return res.status(500).json({
            message: "Server Error",
            error: err.message
        });
    }
}

module.exports = { generateUrl };
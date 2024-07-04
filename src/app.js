import express from "express";

const app = express();

app.get('/status', function (req, res) {
    res.json({
        code: 200,
        success: true,
        message: "OK"
    })
});

export default app;
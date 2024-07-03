import express from "express";

const app = express();

app.get('/status', function (req, res) {
    res.json({
        code: 200,
        success: true,
        message: "OK"
    })
});

const port = process.env.PORT || 3000;
const environment = process.env.NODE_ENV || "development";

app.listen(port, () => {
  console.log(`Server running in ${environment} mode on port ${port}`);
});

export default app;
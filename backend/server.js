const express = require(`express`);
const cors = require(`cors`)

const app = express();
app.use(express.json)
app.use(cors())

HTTP_PORT = process.env.HTTP_PORT || 3000

app.listen(HTTP_PORT, () => {
    console.log(`Server listening on http://localhost:${HTTP_PORT}`)
})

app.get(("/"), (req, res) => {
    res.json({ "status": "alive" })
})
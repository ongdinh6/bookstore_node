const express = require('express');
const router = express.Router();

const dummyBooks = [
    {
        id: 1,
        title: "Harry Porter",
        price: "$20"
    },
    {
        id: 2,
        title: "Titanic",
        price: "$50"
    },
    {
        id: 3,
        title: "Unknown Name",
        price: "$100"
    },
]

router.get("/", async (req, res, next) => {
    res.send(dummyBooks);
});

router.get(':/id', async (req, res, next) => {
    const book = dummyBooks.filter(book => book.id === req.params.id);
    res.send(book);
});

module.exports = router;
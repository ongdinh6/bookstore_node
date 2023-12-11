const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', async (req, res, next) => {
  const userInfo = {
    name: "Dinh Ong Minh",
    age: "1"
  }
  res.send(userInfo);
});

module.exports = router;

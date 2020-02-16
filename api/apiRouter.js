const router = require('express').Router();

const authRouter = require('../routes/authRouter');

router.use('/api/auth', authRouter);

// Global test endpoint
router.get('/', (req, res) => {
res.send(`<h3>you've reached the BE</h3>`)
});

module.exports = router;
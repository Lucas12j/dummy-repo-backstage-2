const express = require('express');
const app = express();
app.use(express.json());
app.get('/health', (_, res) => res.json({ status: 'ok' }));
app.get('/orders', (_, res) => res.json([]));
app.post('/orders', (req, res) => res.status(201).json({ id: 'demo-1', ...req.body }));
app.listen(process.env.PORT || 8081, '0.0.0.0');

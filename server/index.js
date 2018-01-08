import express from 'express';

const app = express();

const HOST = '127.0.0.1';
const PORT = 3000;

app.get('*', (req, res) => {
    res.json({ status: 'ok', text: 'success' });
});

app.listen(PORT, () => {
    console.log('server start!');
})
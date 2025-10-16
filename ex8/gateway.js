const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const PORT = 3000;

app.use('/service1', createProxyMiddleware({
    target: 'http://localhost:3001', 
    changeOrigin: true
}));

app.use('/service2', createProxyMiddleware({
    target: 'http://localhost:3002', 
    changeOrigin: true
}));

app.get('/', (req, res) => {
    res.send('API Gateway is running!');
});

app.listen(PORT, () => {
    console.log(`API Gateway listening on http://localhost:${PORT}`);
});

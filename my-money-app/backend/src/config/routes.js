const express = require('express');
const auth = require('./auth');

module.exports = server => {
    /**
     * Rotas protegidas por Token JWT
     */
    const protectedApi = express.Router();
    server.use('/api', protectedApi);

    // API REST usa Middleware de Autenticação
    protectedApi.use(auth);

    const BillingCycle = require('../api/billingCycle/billingCycleService');
    BillingCycle.register(protectedApi, '/billingCycles');

    /**
     * Rotas Abertas
     */
    const openApi = express.Router();
    server.use('/oapi', openApi);

    const AuthService = require('../api/user/authService');
    openApi.post('/login', AuthService.login);
    openApi.post('/signup', AuthService.signup);
    openApi.post('/validateToken', AuthService.validateToken);
};
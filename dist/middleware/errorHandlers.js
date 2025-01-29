"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFoundHandler = exports.errorHandler = void 0;
const errorHandler = (err, _req, res, _next) => {
    console.error(err.stack);
    res.status(500).json({
        status: 'error',
        message: 'Internal server error',
    });
};
exports.errorHandler = errorHandler;
const notFoundHandler = (_req, res) => {
    res.status(404).json({
        status: 'error',
        message: 'Route not found',
    });
};
exports.notFoundHandler = notFoundHandler;

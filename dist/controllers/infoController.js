"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInfo = void 0;
const constants_1 = require("../config/constants");
const getInfo = (_req, res) => {
    try {
        const response = {
            email: constants_1.CONFIG.EMAIL,
            current_datetime: new Date().toISOString(),
            github_url: constants_1.CONFIG.GITHUB_URL,
        };
        res.status(200).json(response);
    }
    catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Internal server error',
        });
    }
};
exports.getInfo = getInfo;

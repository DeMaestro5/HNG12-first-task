"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CONFIG = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.CONFIG = {
    EMAIL: 'osstephen70@gmail.com',
    GITHUB_URL: 'https://github.com/DeMaestro5/HNG12-first-task',
    PORT: process.env.PORT || 4001,
};

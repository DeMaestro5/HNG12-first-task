"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CONFIG = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.CONFIG = {
    EMAIL: process.env.EMAIL || 'default@example.com',
    GITHUB_URL: process.env.GITHUB_URL || 'https://default.github.url',
    PORT: process.env.PORT ? Number(process.env.PORT) : 4001,
};

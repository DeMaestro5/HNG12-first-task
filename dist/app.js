"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const infoRoutes_1 = __importDefault(require("./routes/infoRoutes"));
const constants_1 = require("./config/constants");
const app = (0, express_1.default)();
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Routes
app.use('/', infoRoutes_1.default);
// Start server
app.listen(constants_1.CONFIG.PORT, () => {
    console.log(`Server is running on http://localhost:${constants_1.CONFIG.PORT}`);
});
exports.default = app;

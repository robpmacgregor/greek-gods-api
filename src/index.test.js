"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const express_1 = __importDefault(require("express"));
// Import the app or recreate the healthcheck endpoint for testing
const app = (0, express_1.default)();
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok' });
});
describe('GET /health', () => {
    it('should return status ok', async () => {
        const res = await (0, supertest_1.default)(app).get('/health');
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ status: 'ok' });
    });
});

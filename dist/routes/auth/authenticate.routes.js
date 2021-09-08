"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoutes = void 0;
var express_1 = require("express");
var authenticate_1 = __importDefault(require("./authenticate"));
var authRoutes = (0, express_1.Router)();
exports.authRoutes = authRoutes;
authRoutes.post("/sessions", function (request, response) {
    return (0, authenticate_1.default)().handle(request, response);
});

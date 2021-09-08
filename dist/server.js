"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var cors_1 = __importDefault(require("cors"));
var express_1 = __importDefault(require("express"));
require("express-async-errors");
require("./database");
var routes_1 = require("./routes");
var AppError_1 = require("./errors/AppError");
var app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(routes_1.router);
// @ts-ignore
app.use(function (err, request, response, next) {
    if (err instanceof AppError_1.AppError) {
        // @ts-ignore
        return response.status(err.statusCode).json({ message: err.message });
    }
    // @ts-ignore
    return response.status(500).json({
        status: "error",
        message: "Internal server error - " + err.message
    });
});
app.listen(3333, function () { return console.log("Server is running!"); });

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.appointmentsRoutes = void 0;
var express_1 = require("express");
var createAppointment_1 = __importDefault(require("./createAppointment"));
var listAllAppointment_1 = __importDefault(require("./listAllAppointment"));
var findByIdAppointment_1 = __importDefault(require("./findByIdAppointment"));
var updateAppointment_1 = __importDefault(require("./updateAppointment"));
var deleteAppointment_1 = __importDefault(require("./deleteAppointment"));
var appointmentsRoutes = (0, express_1.Router)();
exports.appointmentsRoutes = appointmentsRoutes;
appointmentsRoutes.post("/", function (request, response) {
    return (0, createAppointment_1.default)().handle(request, response);
});
appointmentsRoutes.get("/", function (request, response) {
    return (0, listAllAppointment_1.default)().handle(request, response);
});
appointmentsRoutes.get("/:id", function (request, response) {
    return (0, findByIdAppointment_1.default)().handle(request, response);
});
appointmentsRoutes.put("/:id", function (request, response) {
    return (0, updateAppointment_1.default)().handle(request, response);
});
appointmentsRoutes.delete("/:id", function (request, response) {
    return (0, deleteAppointment_1.default)().handle(request, response);
});

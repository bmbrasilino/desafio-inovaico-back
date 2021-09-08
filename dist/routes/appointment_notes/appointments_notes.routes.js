"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.appointmentsNotesRoutes = void 0;
var express_1 = require("express");
var createAppointmentNotes_1 = __importDefault(require("./createAppointmentNotes"));
var listAllAppointmentNotes_1 = __importDefault(require("./listAllAppointmentNotes"));
var findByIdAppointmentNotes_1 = __importDefault(require("./findByIdAppointmentNotes"));
var updateAppointmentNotes_1 = __importDefault(require("./updateAppointmentNotes"));
var deleteAppointmentNotes_1 = __importDefault(require("./deleteAppointmentNotes"));
var appointmentsNotesRoutes = (0, express_1.Router)();
exports.appointmentsNotesRoutes = appointmentsNotesRoutes;
appointmentsNotesRoutes.post("/", function (request, response) {
    return (0, createAppointmentNotes_1.default)().handle(request, response);
});
appointmentsNotesRoutes.get("/", function (request, response) {
    return (0, listAllAppointmentNotes_1.default)().handle(request, response);
});
appointmentsNotesRoutes.get("/:id", function (request, response) {
    return (0, findByIdAppointmentNotes_1.default)().handle(request, response);
});
appointmentsNotesRoutes.put("/:id", function (request, response) {
    return (0, updateAppointmentNotes_1.default)().handle(request, response);
});
appointmentsNotesRoutes.delete("/:id", function (request, response) {
    return (0, deleteAppointmentNotes_1.default)().handle(request, response);
});

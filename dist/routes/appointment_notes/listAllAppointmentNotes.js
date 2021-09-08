"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AppointmentNotesRepository_1 = require("../../repositories/AppointmentNotesRepository");
var ListAllAppointmentNotesService_1 = require("../../services/appointment_notes/ListAllAppointmentNotesService");
var ListAllAppointmentNotesController_1 = require("../../controllers/appointment_notes/ListAllAppointmentNotesController");
exports.default = (function () {
    var appointmentRepository = new AppointmentNotesRepository_1.AppointmentNotesRepository();
    var listAllAppointmentNotesService = new ListAllAppointmentNotesService_1.ListAllAppointmentNotesService(appointmentRepository);
    return new ListAllAppointmentNotesController_1.ListAllAppointmentNotesController(listAllAppointmentNotesService);
});

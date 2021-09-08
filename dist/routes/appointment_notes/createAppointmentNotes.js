"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AppointmentNotesRepository_1 = require("../../repositories/AppointmentNotesRepository");
var CreateAppointmentNotesController_1 = require("../../controllers/appointment_notes/CreateAppointmentNotesController");
var CreateAppointmentNotesService_1 = require("../../services/appointment_notes/CreateAppointmentNotesService");
exports.default = (function () {
    var appointmentNotesRepository = new AppointmentNotesRepository_1.AppointmentNotesRepository();
    var createAppointmentService = new CreateAppointmentNotesService_1.CreateAppointmentNotesService(appointmentNotesRepository);
    return new CreateAppointmentNotesController_1.CreateAppointmentNotesController(createAppointmentService);
});

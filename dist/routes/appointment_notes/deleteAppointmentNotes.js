"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AppointmentNotesRepository_1 = require("../../repositories/AppointmentNotesRepository");
var DeleteAppointmentNotesController_1 = require("../../controllers/appointment_notes/DeleteAppointmentNotesController");
var DeleteAppointmentNotesService_1 = require("../../services/appointment_notes/DeleteAppointmentNotesService");
exports.default = (function () {
    var appointmentNotesRepository = new AppointmentNotesRepository_1.AppointmentNotesRepository();
    var createAppointmentService = new DeleteAppointmentNotesService_1.DeleteAppointmentNotesService(appointmentNotesRepository);
    return new DeleteAppointmentNotesController_1.DeleteAppointmentNotesController(createAppointmentService);
});

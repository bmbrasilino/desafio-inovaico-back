"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AppointmentNotesRepository_1 = require("../../repositories/AppointmentNotesRepository");
var UpdateAppointmentNotesController_1 = require("../../controllers/appointment_notes/UpdateAppointmentNotesController");
var UpdateAppointmentNotesService_1 = require("../../services/appointment_notes/UpdateAppointmentNotesService");
exports.default = (function () {
    var appointmentNotesRepository = new AppointmentNotesRepository_1.AppointmentNotesRepository();
    var updateAppointmentNotesService = new UpdateAppointmentNotesService_1.UpdateAppointmentNotesService(appointmentNotesRepository);
    return new UpdateAppointmentNotesController_1.UpdateAppointmentNotesController(updateAppointmentNotesService);
});

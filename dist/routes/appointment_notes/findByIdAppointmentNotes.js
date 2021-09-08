"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AppointmentNotesRepository_1 = require("../../repositories/AppointmentNotesRepository");
var FindByIdAppointmentNotesController_1 = require("../../controllers/appointment_notes/FindByIdAppointmentNotesController");
var FindByIdAppointmentNotesService_1 = require("../../services/appointment_notes/FindByIdAppointmentNotesService");
exports.default = (function () {
    var appointmentRepository = new AppointmentNotesRepository_1.AppointmentNotesRepository();
    var findByIdAppointmentService = new FindByIdAppointmentNotesService_1.FindByIdAppointmentNotesService(appointmentRepository);
    return new FindByIdAppointmentNotesController_1.FindByIdAppointmentNotesController(findByIdAppointmentService);
});

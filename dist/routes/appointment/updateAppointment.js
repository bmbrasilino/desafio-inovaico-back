"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AppointmentRepository_1 = require("../../repositories/AppointmentRepository");
var UpdateAppointmentService_1 = require("../../services/appointment/UpdateAppointmentService");
var UpdateAppointmentController_1 = require("../../controllers/appointment/UpdateAppointmentController");
exports.default = (function () {
    var appointmentRepository = new AppointmentRepository_1.AppointmentRepository();
    var updateAppointmentService = new UpdateAppointmentService_1.UpdateAppointmentService(appointmentRepository);
    return new UpdateAppointmentController_1.UpdateAppointmentController(updateAppointmentService);
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AppointmentRepository_1 = require("../../repositories/AppointmentRepository");
var DeleteAppointmentController_1 = require("../../controllers/appointment/DeleteAppointmentController");
var DeleteAppointmentService_1 = require("../../services/appointment/DeleteAppointmentService");
exports.default = (function () {
    var appointmentRepository = new AppointmentRepository_1.AppointmentRepository();
    var deleteAppointmentService = new DeleteAppointmentService_1.DeleteAppointmentService(appointmentRepository);
    return new DeleteAppointmentController_1.DeleteAppointmentController(deleteAppointmentService);
});

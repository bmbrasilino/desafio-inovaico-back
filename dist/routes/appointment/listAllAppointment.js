"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AppointmentRepository_1 = require("../../repositories/AppointmentRepository");
var ListAllAppointmentService_1 = require("../../services/appointment/ListAllAppointmentService");
var ListAllAppointmentController_1 = require("../../controllers/appointment/ListAllAppointmentController");
exports.default = (function () {
    var appointmentRepository = new AppointmentRepository_1.AppointmentRepository();
    var listAllAppointmentService = new ListAllAppointmentService_1.ListAllAppointmentService(appointmentRepository);
    return new ListAllAppointmentController_1.ListAllAppointmentController(listAllAppointmentService);
});

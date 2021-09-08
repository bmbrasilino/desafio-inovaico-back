"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AppointmentRepository_1 = require("../../repositories/AppointmentRepository");
var CreateAppointmentController_1 = require("../../controllers/appointment/CreateAppointmentController");
var CreateAppointmentService_1 = require("../../services/appointment/CreateAppointmentService");
exports.default = (function () {
    var appointmentRepository = new AppointmentRepository_1.AppointmentRepository();
    var createAppointmentService = new CreateAppointmentService_1.CreateAppointmentService(appointmentRepository);
    return new CreateAppointmentController_1.CreateAppointmentController(createAppointmentService);
});

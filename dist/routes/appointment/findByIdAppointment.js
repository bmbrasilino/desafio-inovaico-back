"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AppointmentRepository_1 = require("../../repositories/AppointmentRepository");
var FindByIdAppointmentService_1 = require("../../services/appointment/FindByIdAppointmentService");
var FindByIdAppointmentController_1 = require("../../controllers/appointment/FindByIdAppointmentController");
exports.default = (function () {
    var appointmentRepository = new AppointmentRepository_1.AppointmentRepository();
    var findByIdAppointmentService = new FindByIdAppointmentService_1.FindByIdAppointmentService(appointmentRepository);
    return new FindByIdAppointmentController_1.FindByIdAppointmentController(findByIdAppointmentService);
});

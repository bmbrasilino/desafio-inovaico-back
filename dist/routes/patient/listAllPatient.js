"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PatientRepository_1 = require("../../repositories/PatientRepository");
var ListAllPatientService_1 = require("../../services/patient/ListAllPatientService");
var ListAllPatientController_1 = require("../../controllers/patient/ListAllPatientController");
exports.default = (function () {
    var patientsRepository = new PatientRepository_1.PatientRepository();
    var listAllPatientService = new ListAllPatientService_1.ListAllPatientService(patientsRepository);
    return new ListAllPatientController_1.ListAllPatientController(listAllPatientService);
});

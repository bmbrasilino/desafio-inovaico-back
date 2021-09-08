"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PatientRepository_1 = require("../../repositories/PatientRepository");
var CreatePatientController_1 = require("../../controllers/patient/CreatePatientController");
var CreatePatientService_1 = require("../../services/patient/CreatePatientService");
exports.default = (function () {
    var patientsRepository = new PatientRepository_1.PatientRepository();
    var createPatientService = new CreatePatientService_1.CreatePatientService(patientsRepository);
    return new CreatePatientController_1.CreatePatientController(createPatientService);
});

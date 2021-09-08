"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PatientRepository_1 = require("../../repositories/PatientRepository");
var DeletePatientController_1 = require("../../controllers/patient/DeletePatientController");
var DeletePatientService_1 = require("../../services/patient/DeletePatientService");
exports.default = (function () {
    var patientsRepository = new PatientRepository_1.PatientRepository();
    var deletePatientService = new DeletePatientService_1.DeletePatientService(patientsRepository);
    return new DeletePatientController_1.DeletePatientController(deletePatientService);
});

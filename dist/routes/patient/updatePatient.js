"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PatientRepository_1 = require("../../repositories/PatientRepository");
var UpdatePatientController_1 = require("../../controllers/patient/UpdatePatientController");
var UpdatePatientService_1 = require("../../services/patient/UpdatePatientService");
exports.default = (function () {
    var patientsRepository = new PatientRepository_1.PatientRepository();
    var updatePatientService = new UpdatePatientService_1.UpdatePatientService(patientsRepository);
    return new UpdatePatientController_1.UpdatePatientController(updatePatientService);
});

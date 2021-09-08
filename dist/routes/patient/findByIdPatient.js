"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PatientRepository_1 = require("../../repositories/PatientRepository");
var FindByIdPatientService_1 = require("../../services/patient/FindByIdPatientService");
var FindByIdPatientController_1 = require("../../controllers/patient/FindByIdPatientController");
exports.default = (function () {
    var patientsRepository = new PatientRepository_1.PatientRepository();
    var findByIdPatientService = new FindByIdPatientService_1.FindByIdPatientService(patientsRepository);
    return new FindByIdPatientController_1.FindByIdPatientController(findByIdPatientService);
});

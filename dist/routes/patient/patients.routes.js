"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.patientsRoutes = void 0;
var express_1 = require("express");
var createPatient_1 = __importDefault(require("./createPatient"));
var listAllPatient_1 = __importDefault(require("./listAllPatient"));
var findByIdPatient_1 = __importDefault(require("./findByIdPatient"));
var updatePatient_1 = __importDefault(require("./updatePatient"));
var deletePatient_1 = __importDefault(require("./deletePatient"));
var patientsRoutes = (0, express_1.Router)();
exports.patientsRoutes = patientsRoutes;
patientsRoutes.post("/", function (request, response) {
    return (0, createPatient_1.default)().handle(request, response);
});
patientsRoutes.get("/", function (request, response) {
    return (0, listAllPatient_1.default)().handle(request, response);
});
patientsRoutes.get("/:id", function (request, response) {
    return (0, findByIdPatient_1.default)().handle(request, response);
});
patientsRoutes.put("/:id", function (request, response) {
    return (0, updatePatient_1.default)().handle(request, response);
});
patientsRoutes.delete("/:id", function (request, response) {
    return (0, deletePatient_1.default)().handle(request, response);
});

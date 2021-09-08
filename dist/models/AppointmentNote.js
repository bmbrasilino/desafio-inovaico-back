"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentNote = void 0;
var uuid_1 = require("uuid");
var typeorm_1 = require("typeorm");
var Patient_1 = require("./Patient");
// @ts-ignore
var Appointment_1 = require("./Appointment");
var AppointmentNote = /** @class */ (function () {
    function AppointmentNote() {
        if (!this.id) {
            this.id = (0, uuid_1.v4)();
        }
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
        __metadata("design:type", String)
    ], AppointmentNote.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Patient_1.Patient; }, function (patient) { return patient.id; }, { eager: true }),
        (0, typeorm_1.JoinColumn)({ name: 'patient_id' }),
        __metadata("design:type", Object)
    ], AppointmentNote.prototype, "patient_id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Appointment_1.Appointment; }, function (appointment) { return appointment.id; }, { eager: true }),
        (0, typeorm_1.JoinColumn)({ name: 'appointment_id' }),
        __metadata("design:type", Object)
    ], AppointmentNote.prototype, "appointment_id", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "varchar", nullable: true }),
        __metadata("design:type", Object)
    ], AppointmentNote.prototype, "annotation", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)(),
        __metadata("design:type", Object)
    ], AppointmentNote.prototype, "created_at", void 0);
    AppointmentNote = __decorate([
        (0, typeorm_1.Entity)("appointment_notes"),
        __metadata("design:paramtypes", [])
    ], AppointmentNote);
    return AppointmentNote;
}());
exports.AppointmentNote = AppointmentNote;

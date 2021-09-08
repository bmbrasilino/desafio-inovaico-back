"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UsersRepository_1 = require("../../repositories/UsersRepository");
var AuthenticateUserController_1 = require("../../controllers/auth/AuthenticateUserController");
var AuthenticateUserService_1 = require("../../services/auth/AuthenticateUserService");
exports.default = (function () {
    var usersRepository = new UsersRepository_1.UsersRepository();
    var authenticateService = new AuthenticateUserService_1.AuthenticateUserService(usersRepository);
    return new AuthenticateUserController_1.AuthenticateUserController(authenticateService);
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UsersRepository_1 = require("../../repositories/UsersRepository");
var CreateUserController_1 = require("../../controllers/account/CreateUserController");
var CreateUserService_1 = require("../../services/account/CreateUserService");
exports.default = (function () {
    var usersRepository = new UsersRepository_1.UsersRepository();
    var createUserService = new CreateUserService_1.CreateUserService(usersRepository);
    return new CreateUserController_1.CreateUserController(createUserService);
});

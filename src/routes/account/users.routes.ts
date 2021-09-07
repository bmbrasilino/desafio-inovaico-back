import { Router } from "express";

import CreateUser from "./createUser";

const usersRoutes = Router();

usersRoutes.post("/", (request, response) => {
  return CreateUser().handle(request, response);
});

export { usersRoutes };

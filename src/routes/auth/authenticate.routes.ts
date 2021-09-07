import { Router } from "express";

import AuthenticateUserController from "./authenticate";

const authRoutes = Router();

authRoutes.post("/sessions", (request, response) => {
  return AuthenticateUserController().handle(request, response);
});

export { authRoutes };

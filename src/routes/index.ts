import { Router } from 'express';
import { usersRoutes } from "./account/users.routes";

const router = Router();

router.use("/users", usersRoutes);

export { router };

import { Router } from 'express';
import { usersRoutes } from "./account/users.routes";
import { authRoutes } from "./auth/authenticate.routes";

const router = Router();

router.use("/users", usersRoutes);
router.use(authRoutes);

export { router };

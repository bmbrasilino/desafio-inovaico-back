import { Router } from 'express';
import { patientsRoutes } from "./patient/patients.routes";
import { usersRoutes } from "./account/users.routes";
import { authRoutes } from "./auth/authenticate.routes";

const router = Router();

router.use("/patients", patientsRoutes);
router.use("/users", usersRoutes);
router.use(authRoutes);

export { router };

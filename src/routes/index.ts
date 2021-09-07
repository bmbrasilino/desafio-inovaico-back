import { Router } from 'express';
import { patientsRoutes } from "./patient/patients.routes";
import { appointmentsRoutes } from "./appointment/appointments.routes";
import { usersRoutes } from "./account/users.routes";
import { authRoutes } from "./auth/authenticate.routes";

const router = Router();

router.use("/patients", patientsRoutes);
router.use("/appointments", appointmentsRoutes);
router.use("/users", usersRoutes);
router.use(authRoutes);

export { router };

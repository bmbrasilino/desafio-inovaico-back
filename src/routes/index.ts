import { Router } from 'express';
import { patientsRoutes } from "./patient/patients.routes";
import { appointmentsRoutes } from "./appointment/appointments.routes";
import { appointmentsNotesRoutes } from "./appointment_notes/appointments_notes.routes";
import { usersRoutes } from "./account/users.routes";
import { authRoutes } from "./auth/authenticate.routes";

const router = Router();

router.use("/patients", patientsRoutes);
router.use("/appointments", appointmentsRoutes);
router.use("/appointment_notes", appointmentsNotesRoutes);
router.use("/users", usersRoutes);
router.use(authRoutes);

export { router };

import { Response, Request } from "express";
import { CreateAppointmentNotesService } from "../../services/appointment_notes/CreateAppointmentNotesService";

class CreateAppointmentNotesController {
  constructor (private createAppointmentNotesService: CreateAppointmentNotesService) {}
  
  async handle(request: Request, response: Response): Promise<Response> {
    const { patient_id, appointment_id, annotation } = request.body;
    await this.createAppointmentNotesService.execute({ patient_id, appointment_id, annotation });
    return response.status(201).send();
  }
}

export {CreateAppointmentNotesController}

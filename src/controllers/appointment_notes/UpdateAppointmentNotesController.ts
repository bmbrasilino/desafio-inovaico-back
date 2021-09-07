import { Response, Request } from "express";
import { UpdateAppointmentNotesService } from "../../services/appointment_notes/UpdateAppointmentNotesService";

class UpdateAppointmentNotesController {
  constructor (private updateAppointmentNotesService: UpdateAppointmentNotesService) {}
  
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { patient_id, appointment_id, annotation } = request.body;

    const a = await this.updateAppointmentNotesService.execute({ id, patient_id, appointment_id, annotation });
    console.log(a)
    return response.status(200).send();
  }
}

export { UpdateAppointmentNotesController };

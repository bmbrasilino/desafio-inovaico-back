import { Response, Request } from "express";
import { DeleteAppointmentNotesService } from "../../services/appointment_notes/DeleteAppointmentNotesService";

class DeleteAppointmentNotesController {
  constructor (private deleteAppointmentNotesService: DeleteAppointmentNotesService) {}
  
  async handle(request: Request, response: Response): Promise<Response> {
    await this.deleteAppointmentNotesService.execute({ id: request.params.id });
    return response.status(200).send();
  }
}

export { DeleteAppointmentNotesController };

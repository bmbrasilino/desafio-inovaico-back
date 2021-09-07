import { Response, Request } from "express";
import { FindByIdAppointmentNotesService } from "../../services/appointment_notes/FindByIdAppointmentNotesService";

export default class FindByIdAppointmentNotesController {
  constructor (private findByIdAppointmentNotesService: FindByIdAppointmentNotesService) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const patient = await this.findByIdAppointmentNotesService.execute({id})
    return response.status(201).send(patient);
  }
}

export { FindByIdAppointmentNotesController };

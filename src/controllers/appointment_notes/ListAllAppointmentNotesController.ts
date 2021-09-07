import { Response, Request } from "express";
import { ListAllAppointmentNotesService } from "../../services/appointment_notes/ListAllAppointmentNotesService";

export default class ListAllAppointmentNotesController {
  constructor (private listAllAppointmentNotesService: ListAllAppointmentNotesService) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const all = await this.listAllAppointmentNotesService.execute();
    return response.status(201).send(all);
  }
}

export { ListAllAppointmentNotesController };

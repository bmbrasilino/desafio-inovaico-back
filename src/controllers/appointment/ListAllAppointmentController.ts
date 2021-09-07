import { Response, Request } from "express";
import { ListAllAppointmentService } from "../../services/appointment/ListAllAppointmentService";

export default class ListAllAppointmentController {
  constructor (private listAllAppointmentService: ListAllAppointmentService) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const all = await this.listAllAppointmentService.execute();
    return response.status(201).send(all);
  }
}

export { ListAllAppointmentController };

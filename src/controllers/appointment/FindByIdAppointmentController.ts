import { Response, Request } from "express";
import { FindByIdAppointmentService } from "../../services/appointment/FindByIdAppointmentService";

export default class FindByIdAppointmentController {
  constructor (private findByIdAppointmentService: FindByIdAppointmentService) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const patient = await this.findByIdAppointmentService.execute({id})
    return response.status(201).send(patient);
  }
}

export { FindByIdAppointmentController };

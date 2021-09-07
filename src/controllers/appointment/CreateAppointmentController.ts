import { Response, Request } from "express";
import { CreateAppointmentService } from "../../services/appointment/CreateAppointmentService";

class CreateAppointmentController {
  constructor (private createAppointmentService: CreateAppointmentService) {}
  
  async handle(request: Request, response: Response): Promise<Response> {
    const { patient_id, consultation_date } = request.body;
    await this.createAppointmentService.execute({ patient_id, consultation_date });
    return response.status(201).send();
  }
}

export { CreateAppointmentController };

import { Response, Request } from "express";
import { UpdateAppointmentService } from "../../services/appointment/UpdateAppointmentService";

class UpdateAppointmentController {
  constructor (private updateAppointmentService: UpdateAppointmentService) {}
  
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { patient_id, consultation_date } = request.body;

    await this.updateAppointmentService.execute({ id, patient_id, consultation_date });
    return response.status(200).send();
  }
}

export { UpdateAppointmentController };

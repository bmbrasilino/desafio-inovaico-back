import { Response, Request } from "express";
import { DeleteAppointmentService } from "../../services/appointment/DeleteAppointmentService";

class DeleteAppointmentController {
  constructor (private deleteAppointmentService: DeleteAppointmentService) {}
  
  async handle(request: Request, response: Response): Promise<Response> {
    await this.deleteAppointmentService.execute({ id: request.params.id });
    return response.status(200).send();
  }
}

export { DeleteAppointmentController };

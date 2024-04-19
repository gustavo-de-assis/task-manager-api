import Joi from "joi";
import { CreateTaskParams } from "@/services";

export const createTaskSchema = Joi.object<CreateTaskParams>({
  title: Joi.string().required(),
  description: Joi.string().required(),
  deadline: Joi.date().required(),
});

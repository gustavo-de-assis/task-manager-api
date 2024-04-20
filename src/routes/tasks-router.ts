import { deletTask, getTasks, postTask } from "@/controllers";
import { validateBody } from "@/middlewares/validation-middleware";
import { createTaskSchema } from "@/schemas/tasks-schemas";
import { Router } from "express";

const tasksRouter = Router();

tasksRouter.post("/", validateBody(createTaskSchema), postTask);
tasksRouter.get("/", getTasks);
tasksRouter.delete("/:taskId", deletTask);

export { tasksRouter };

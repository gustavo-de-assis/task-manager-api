import { Router } from "express";
import { deletTask, getTasks, postTask, updateTask } from "@/controllers";
import { validateBody } from "@/middlewares/validation-middleware";
import { createTaskSchema } from "@/schemas/tasks-schemas";

const tasksRouter = Router();

tasksRouter.post("/", validateBody(createTaskSchema), postTask);
tasksRouter.get("/", getTasks);
tasksRouter.delete("/:taskId", deletTask);
tasksRouter.put("/:taskId", updateTask);

export { tasksRouter };

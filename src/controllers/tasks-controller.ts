import { Request, Response } from "express";
import httpStatus from "http-status";
import { Task } from "@/protocols";
import taskService from "@/services/tasks-service";

export async function postTask(req: Request, res: Response) {
  try {
    await taskService.createTask(req.body);

    return res.sendStatus(httpStatus.OK);
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).send(error.message);
  }
}

//validação
export async function getTasks(req: Request, res: Response) {
  const filters = req.query;
  try {
    const tasks = await taskService.getTasks(filters);
    return res.status(httpStatus.OK).send(tasks);
  } catch (error) {
    console.log(error.message);
    if (error.name === "NotFoundError") {
      return res.sendStatus(httpStatus.NO_CONTENT);
    }
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }
}

export async function deletTask(req: Request, res: Response) {
  const { taskId } = req.params;

  try {
    await taskService.deletTask(Number(taskId));
    res.sendStatus(httpStatus.OK);
  } catch (error) {
    if (error.name === "NotFoundError") {
      return res.sendStatus(httpStatus.NOT_FOUND);
    }
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }
}

export async function updateTask(req: Request, res: Response) {
  const updatedTaskData = req.body as Partial<Task>;
  const { taskId } = req.params;

  try {
    await taskService.updateTask(Number(taskId), updatedTaskData);
    return res.sendStatus(httpStatus.OK);
  } catch (error) {
    console.log(error.message);
    if (error.name === "NotFoundError") {
      return res.sendStatus(httpStatus.NOT_FOUND);
    }
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }
}

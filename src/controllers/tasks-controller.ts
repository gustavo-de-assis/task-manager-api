import { Task } from "@/protocols";
import taskService from "@/services/tasks-service";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function postTask(req: Request, res: Response) {
  // middleware de validação das tasks? criar type?
  try {
    const data: Task = {
      title: req.body.title,
      description: req.body.description,
      deadline: new Date(req.body.deadline),
    };

    await taskService.createTask(data);

    return res.sendStatus(httpStatus.OK);
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).send(error.message);
  }
}

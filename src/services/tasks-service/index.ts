import { Task } from "@prisma/client";
import tasksRepository from "@/repositories/tasks-repository";
import { invalidDeadlineError } from "@/errors/invalid-deadline-error";

export async function createTask(data: CreateTaskParams): Promise<Task> {
  await validateTaskDeadline(data.deadline);
  return tasksRepository.create(data);
}

async function validateTaskDeadline(taskDate: Date) {
  const now = new Date();

  if (taskDate < now) {
    throw invalidDeadlineError();
  }
}

export type CreateTaskParams = Pick<Task, "title" | "description" | "deadline">;

const taskService = {
  createTask,
};

export default taskService;

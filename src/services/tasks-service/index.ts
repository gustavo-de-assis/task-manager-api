import { Task } from "@prisma/client";
import tasksRepository, { TaskFilters } from "@/repositories/tasks-repository";
import { invalidDeadlineError } from "@/errors/invalid-deadline-error";
import { notFoundError } from "@/errors/not-found-error";

export async function getTasks(filters: TaskFilters) {
  const tasks = await tasksRepository.findAllTasks(filters);

  if (!tasks || tasks.length === 0) {
    throw notFoundError();
  }

  return tasks;
}

export async function createTask(data: CreateTaskParams): Promise<Task> {
  data.deadline = new Date(data.deadline);
  await validateTaskDeadline(data.deadline);
  return tasksRepository.create(data);
}

export async function deletTask(taskId: number) {
  const task = await tasksRepository.findById(taskId);

  if (!task) {
    throw notFoundError();
  }

  return tasksRepository.deleteTask(taskId);
}

export async function updateTask(
  taskId: number,
  data: Partial<CreateTaskParams>
) {
  const task = await tasksRepository.findById(taskId);

  if (!task) {
    throw notFoundError();
  }

  if (data.deadline) {
    data.deadline = new Date(data.deadline);
    await validateTaskDeadline(data.deadline);
  }

  return tasksRepository.updateTask(taskId, data);
}

async function validateTaskDeadline(taskDate: Date) {
  const now = new Date();
  now.setHours(0, 0, 0, 0);

  const taskDateMidnight = new Date(taskDate);
  taskDateMidnight.setHours(0, 0, 0, 0);

  if (taskDateMidnight < now) {
    throw invalidDeadlineError();
  }
}

export type CreateTaskParams = Pick<Task, "title" | "description" | "deadline">;

const taskService = {
  createTask,
  getTasks,
  deletTask,
  updateTask,
};

export default taskService;

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
  // Get the current date in UTC and set it to midnight
  const now = new Date();
  const nowUTC = new Date(
    Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate())
  );

  // Convert the task date to UTC midnight
  const taskDateUTC = new Date(
    Date.UTC(
      taskDate.getUTCFullYear(),
      taskDate.getUTCMonth(),
      taskDate.getUTCDate()
    )
  );

  if (taskDateUTC < nowUTC) {
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

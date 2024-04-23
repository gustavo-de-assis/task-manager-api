import { Prisma, Task } from "@prisma/client";
import { prisma } from "@/config";

async function create(data: Prisma.TaskCreateInput) {
  return prisma.task.create({
    data,
  });
}

async function findAllTasks(filters: Partial<TaskFilters>) {
  const filterArray = Object.entries(filters).map(([key, value]) => ({
    [key]: value,
  }));

  return prisma.task.findMany({
    orderBy: filterArray,
  });
}

async function findById(taskId: number) {
  return prisma.task.findFirst({
    where: {
      id: taskId,
    },
  });
}

async function deleteTask(taskId: number) {
  return prisma.task.delete({
    where: {
      id: taskId,
    },
  });
}

async function updateTask(
  taskId: number,
  updatedTask: Partial<UpdateTaskParams>
) {
  return prisma.task.update({
    where: {
      id: taskId,
    },
    data: updatedTask,
  });
}

export type UpdateTaskParams = Omit<Task, "id">;

export interface TaskFilters {
  title?: "asc" | "desc";
  deadline?: "asc" | "desc";
}

const tasksRepository = {
  create,
  findAllTasks,
  findById,
  deleteTask,
  updateTask,
};

export default tasksRepository;

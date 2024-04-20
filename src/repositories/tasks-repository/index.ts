import { Prisma, Task } from "@prisma/client";
import { prisma } from "@/config";

async function create(data: Prisma.TaskCreateInput) {
  return prisma.task.create({
    data,
  });
}

async function findAllTasks() {
  return prisma.task.findMany();
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

const tasksRepository = {
  create,
  findAllTasks,
  findById,
  deleteTask,
  updateTask,
};

export default tasksRepository;

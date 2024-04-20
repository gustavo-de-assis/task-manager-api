import { Prisma } from "@prisma/client";
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

const tasksRepository = {
  create,
  findAllTasks,
  findById,
  deleteTask,
};

export default tasksRepository;

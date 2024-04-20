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

const tasksRepository = {
  create,
  findAllTasks,
};

export default tasksRepository;

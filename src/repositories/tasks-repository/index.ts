import { Prisma } from "@prisma/client";
import { prisma } from "@/config";

async function create(data: Prisma.TaskCreateInput) {
  return prisma.task.create({
    data,
  });
}

const tasksRepository = {
  create,
};

export default tasksRepository;

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function seed() {
  await prisma.user.createMany({
    data: [
      {
        name: "Keo",
        email: "keo@example.com",
        age: 25,
        isMarried: false,
        nationality: "Cambodian",
      },
      {
        name: "Aung Min",
        email: "aung.min@example.com",
        age: 30,
        isMarried: true,
        nationality: "Myanmar",
      },
      {
        name: "Sakura Tanaka",
        email: "sakura.t@example.com",
        age: 22,
        isMarried: false,
        nationality: "Japanese",
      },
      {
        name: "John Smith",
        email: "john.smith@example.com",
        age: 35,
        isMarried: true,
        nationality: "American",
      },
      {
        name: "Linh Nguyen",
        email: "linh.nguyen@example.com",
        age: 28,
        isMarried: false,
        nationality: "Vietnamese",
      },
      {
        name: "Fatima Zahra",
        email: "fatima.zahra@example.com",
        age: 27,
        isMarried: true,
        nationality: "Moroccan",
      },
      {
        name: "Carlos Rivera",
        email: "carlos.r@example.com",
        age: 40,
        isMarried: true,
        nationality: "Mexican",
      },
      {
        name: "Sophia Müller",
        email: "sophia.muller@example.com",
        age: 26,
        isMarried: false,
        nationality: "German",
      },
      {
        name: "Rajesh Kumar",
        email: "rajesh.kumar@example.com",
        age: 33,
        isMarried: true,
        nationality: "Indian",
      },
      {
        name: "Olivia Brown",
        email: "olivia.brown@example.com",
        age: 24,
        isMarried: false,
        nationality: "British",
      },
    ],
  });
}

seed().then(() => prisma.$disconnect());

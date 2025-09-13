import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();
app.use(express.json());

app.get("/users", async (_, res) => {
  const users = await prisma.user.findMany({
    where: { isMarried: true, age: { gt: 30 } },
  });
  res.json(users);
});

app.put("/users", async (_, res) => {
  const updatedUser = await prisma.user.update({
    where: { email: "keo@example.com" },
    data: {
      age: 20,
      nationality: "Myanmar",
    },
  });
  res.json(updatedUser);
});

app.delete("/users", async (_, res) => {
  const deletedUser = await prisma.user.delete({
    where: { email: "sakura.t@example.com" },
  });
  res.json(deletedUser);
});

app.listen(4000, () => {
  console.log("Server running on port 4000");
});

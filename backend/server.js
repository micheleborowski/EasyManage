import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const app = express();
app.use(express.json());

app.post("/orders", async (request, response) => {
    const { client, product, date } = request.body;
  
    try {
      const newClient = await prisma.client.create({
        data: {
          name: client[0].name,
          phone: client[0].phone,
        },
      });
  
      const newOrder = await prisma.order.create({
        data: {
          clientId: newClient.id,
          product,
          date: date ? new Date(date) : null,
        },
      });
  
      response.status(201).json(newOrder);
    } catch (error) {
      response.status(500).json({ error: error.message });
    }
  });
  
  

  app.get("/orders", async (request, response) => {
    try {
      const orders = await prisma.order.findMany({
        include: { client: true },
      });
  
      response.status(200).json(orders);
    } catch (error) {
      response.status(500).json({ error: error.message });
    }
  });
  

app.listen(3000);
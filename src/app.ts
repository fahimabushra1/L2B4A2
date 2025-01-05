import express, { Application, Request, Response } from "express";
import cors from "cors";
import { ProductRoutes } from "./app/modules/bookStore/routers/book.route";
const app: Application = express();

// parsers
app.use(express.json());
app.use(cors())

//application route
app.use("/", ProductRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send("It's L2B4A2!")
})


export default app;